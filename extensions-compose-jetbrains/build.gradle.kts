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
    id("com.arkivanov.gradle.setup")
}

setupMultiplatform {
    androidTarget()
    jvm()
    macosCompat()
    iosCompat()
    js { browser() }
}

setupPublication()
setupBinaryCompatibilityValidator()

android {
    namespace = "com.arkivanov.decompose.extensions.compose.jetbrains"
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
            }
        }

        common.main.dependencies {
            implementation(project(":decompose"))
            implementation(compose.foundation)
        }

        android.main.dependencies {
            implementation(deps.androidx.activity.activityKtx)
        }

        jvm.test.dependencies {
            implementation(deps.jetbrains.compose.ui.uiTestJunit4)
            implementation(deps.jetbrains.kotlinx.kotlinxCoroutinesSwing)
            implementation(deps.junit.junit)
            implementation(compose.desktop.currentOs)
        }
    }
}
