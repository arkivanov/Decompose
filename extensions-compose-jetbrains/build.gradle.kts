import com.arkivanov.gradle.bundle
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
    android()
    jvm()
    ios()
}

setupPublication()
setupBinaryCompatibilityValidator()

kotlin {
    setupSourceSets {
        val android by bundle()
        val jvm by bundle()

        common.main.dependencies {
            implementation(project(":decompose"))
            implementation(compose.foundation)
        }

        android.main.dependencies {
            implementation(deps.androidx.activity.activityKtx)

            // Temporary dependency until JB Compose has movableContentOf for Android
            implementation(deps.androidx.compose.runtime.runtime)
        }

        jvm.test.dependencies {
            implementation(deps.jetbrains.compose.ui.uiTestJunit4)
            implementation(deps.jetbrains.kotlinx.kotlinxCoroutinesSwing)
            implementation(deps.junit.junit)
            implementation(compose.desktop.currentOs)
        }
    }
}
