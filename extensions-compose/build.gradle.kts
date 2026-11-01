import com.arkivanov.gradle.bundle
import com.arkivanov.gradle.dependsOn
import com.arkivanov.gradle.iosCompat
import com.arkivanov.gradle.macosCompat
import com.arkivanov.gradle.setupBinaryCompatibilityValidator
import com.arkivanov.gradle.setupMultiplatform
import com.arkivanov.gradle.setupPublication
import com.arkivanov.gradle.setupSourceSets

plugins {
    id("kotlin-multiplatform")
    id("com.android.kotlin.multiplatform.library")
    id("org.jetbrains.compose")
    id("org.jetbrains.kotlin.plugin.compose")
    id("com.arkivanov.gradle.setup")
    id("com.dropbox.dependency-guard")

    // Workaround: https://github.com/Kotlin/binary-compatibility-validator/issues/312#issuecomment-4873043356
    id("io.github.tjokinen.android-bcv-bridge")
}

setupMultiplatform {
    jvm()
    macosCompat()
    iosCompat(x64 = null)
    js { browser() }
    wasmJs { browser() }
}

setupPublication()
setupBinaryCompatibilityValidator()

dependencyGuard {
    configuration("androidRuntimeClasspath")
}

kotlin {
    android {
        namespace = "com.arkivanov.decompose.extensions.compose"
    }

    setupSourceSets {
        val android by bundle()
        val jvm by bundle()
        val nonAndroid by bundle()

        nonAndroid dependsOn common
        (allSet - android) dependsOn nonAndroid

        all {
            languageSettings {
                optIn("com.arkivanov.decompose.InternalDecomposeApi")
                optIn("com.arkivanov.decompose.ExperimentalDecomposeApi")
            }
        }

        common.main.dependencies {
            implementation(project(":decompose"))
            implementation(deps.jetbrains.compose.runtime)
            implementation(deps.jetbrains.compose.foundation)
        }

        jvm.test.dependencies {
            implementation(project(":decompose-test-utils"))
            implementation(deps.jetbrains.compose.ui.uiTestJunit4)
            implementation(deps.jetbrains.kotlinx.kotlinxCoroutinesSwing)
            implementation(deps.junit.junit)
            implementation(compose.desktop.currentOs)
        }
    }
}

// Compose UI tests are jvmMain-only for now, so this check is not needed.
// Otherwise, remove it and add js.binaries.executable().
tasks.matching { it.name.startsWith("checkComposeUiTestConfiguration") }.configureEach {
    enabled = false
}

// For android-bcv-bridge.
// -Dsplit_targets enables this module's Android compilation only on Linux.
afterEvaluate {
    val compileEnabled = tasks.named("compileAndroidMain").get().enabled
    listOf("androidApiBuild", "androidApiCheck", "androidApiDump").forEach { taskName ->
        tasks.named(taskName).configure { enabled = compileEnabled }
    }
}
