import com.arkivanov.gradle.bundle
import com.arkivanov.gradle.dependsOn
import com.arkivanov.gradle.iosCompat
import com.arkivanov.gradle.setupMultiplatform
import com.arkivanov.gradle.setupSourceSets
import org.jetbrains.kotlin.gradle.plugin.mpp.KotlinNativeTarget
import org.jetbrains.kotlin.konan.target.Family

plugins {
    id("kotlin-multiplatform")
    id("com.android.kotlin.multiplatform.library")
    id("org.jetbrains.compose")
    id("org.jetbrains.kotlin.plugin.compose")
    id("com.arkivanov.gradle.setup")
}

setupMultiplatform {
    jvm()
    iosCompat(x64 = null)
    js { browser() }
}

kotlin {
    android {
        namespace = "com.arkivanov.sample.shared.compose"
    }

    if ("XCODE_VERSION_MAJOR" in System.getenv().keys) {
        targets
            .filterIsInstance<KotlinNativeTarget>()
            .filter { it.konanTarget.family == Family.IOS }
            .forEach {
                it.binaries {
                    framework {
                        baseName = "Shared" // Used by app-ios-compose
                        export(project(":decompose"))
                        export(project(":sample:shared:shared"))
                        export(deps.essenty.lifecycle)

                        // Optional, only if you need Predictive Back Gesture on Darwin (Apple) targets
                        export(deps.androidx.navigationEvent.navigationEvent)

                        // Optional, only if you need state preservation on Darwin (Apple) targets
                        export(deps.essenty.stateKeeper)
                    }
                }
            }
    }

    setupSourceSets {
        val nonWeb by bundle()
        val jvm by bundle()
        val ios by bundle()
        val js by bundle()

        nonWeb dependsOn common
        (allSet - js) dependsOn nonWeb
        ios dependsOn common
        iosSet dependsOn ios

        common.main.dependencies {
            api(project(":decompose"))
            implementation(project(":extensions-compose"))
            api(project(":sample:shared:shared"))
            implementation(deps.jetbrains.compose.runtime)
            implementation(deps.jetbrains.compose.foundation)
            implementation(deps.jetbrains.compose.material)
            implementation(deps.jetbrains.compose.ui)
            implementation(deps.jetbrains.compose.components.resources)
            implementation(deps.jetbrains.compose.material.materialIconsCore)
        }

        jvm.test.dependencies {
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
