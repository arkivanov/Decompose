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
    id("com.android.library")
    id("org.jetbrains.compose")
    id("org.jetbrains.kotlin.plugin.compose")
    id("com.arkivanov.gradle.setup")
    id("com.dropbox.dependency-guard")
}

setupMultiplatform {
    androidTarget()
    jvm()
    macosCompat()
    iosCompat()
    js { browser() }
    wasmJs { browser() }
}

setupPublication()
setupBinaryCompatibilityValidator()

android {
    namespace = "com.arkivanov.decompose.extensions.compose"
}

dependencyGuard {
    configuration("androidReleaseRuntimeClasspath")
}

kotlin {
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
            implementation(compose.foundation)
        }

        jvm.test.dependencies {
            implementation(deps.jetbrains.compose.ui.uiTestJunit4)
            implementation(deps.jetbrains.kotlinx.kotlinxCoroutinesSwing)
            implementation(deps.junit.junit)
            implementation(compose.desktop.currentOs)
        }
    }
}
