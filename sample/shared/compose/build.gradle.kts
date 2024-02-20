import com.arkivanov.gradle.bundle
import com.arkivanov.gradle.dependsOn
import com.arkivanov.gradle.iosCompat
import com.arkivanov.gradle.setupMultiplatform
import com.arkivanov.gradle.setupSourceSets
import org.jetbrains.kotlin.gradle.plugin.mpp.KotlinNativeTarget
import org.jetbrains.kotlin.konan.target.Family

plugins {
    id("kotlin-multiplatform")
    id("com.android.library")
    id("org.jetbrains.compose")
    id("com.arkivanov.gradle.setup")
}

setupMultiplatform {
    androidTarget()
    jvm()
    iosCompat()
    js { browser() }
}

android {
    namespace = "com.arkivanov.sample.shared.compose"
}

kotlin {
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
                        export(deps.essenty.backHandler)

                        // Optional, only if you need state preservation on Darwin (Apple) targets
                        export(deps.essenty.stateKeeper)
                    }
                }
            }
    }

    setupSourceSets {
        val jvm by bundle()
        val ios by bundle()

        ios dependsOn common
        iosSet dependsOn ios

        common.main.dependencies {
            api(project(":decompose"))
            implementation(project(":extensions-compose"))
            api(project(":sample:shared:shared"))
            implementation(project(":sample:shared:dynamic-features:api"))
            implementation(project(":sample:shared:dynamic-features:compose-api"))
            implementation(compose.runtime)
            implementation(compose.foundation)
            implementation(compose.material)
            implementation(compose.ui)

            // Required due to https://github.com/JetBrains/compose-multiplatform/issues/4326
            api(deps.jetbrains.kotlinx.kotlinxCoroutinesCore)
        }

        jvm.main.dependencies {
            implementation(project(":sample:shared:dynamic-features:feature1Impl"))
            implementation(project(":sample:shared:dynamic-features:feature2Impl"))
        }

        jvm.test.dependencies {
            implementation(deps.jetbrains.compose.ui.uiTestJunit4)
            implementation(deps.jetbrains.kotlinx.kotlinxCoroutinesSwing)
            implementation(deps.junit.junit)
            implementation(compose.desktop.currentOs)
        }
    }
}
