import com.arkivanov.gradle.bundle
import com.arkivanov.gradle.dependsOn
import com.arkivanov.gradle.setupBinaryCompatibilityValidator
import com.arkivanov.gradle.setupMultiplatform
import com.arkivanov.gradle.setupPublication
import com.arkivanov.gradle.setupSourceSets

plugins {
    id("kotlin-multiplatform")
    id("com.android.library")
    id("kotlinx-serialization")
    id("com.arkivanov.gradle.setup")
    id("com.dropbox.dependency-guard")
}

setupMultiplatform()
setupPublication()
setupBinaryCompatibilityValidator()

android {
    namespace = "com.arkivanov.decompose.jetpackcomponentcontext"
}

dependencyGuard {
    configuration("androidReleaseRuntimeClasspath")
}

kotlin {
    setupSourceSets {
        val android by bundle()
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
            api(project(":decompose"))
            api(deps.androidx.lifecycle.lifecycleRuntime)
            api(deps.androidx.lifecycle.lifecycleViewModelSavedState)
            implementation(deps.jetbrains.kotlinx.kotlinxSerializationCore)
        }

        common.test.dependencies {
            implementation(project(":decompose-test-utils"))
        }

        android.test.dependencies {
            implementation(deps.robolectric.robolectric)
        }
    }
}
