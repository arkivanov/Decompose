import com.arkivanov.gradle.bundle
import com.arkivanov.gradle.dependsOn
import com.arkivanov.gradle.setupBinaryCompatibilityValidator
import com.arkivanov.gradle.setupMultiplatform
import com.arkivanov.gradle.setupPublication
import com.arkivanov.gradle.setupSourceSets

plugins {
    id("kotlin-multiplatform")
    id("com.android.kotlin.multiplatform.library")
    id("kotlinx-serialization")
    id("com.arkivanov.gradle.setup")
}

setupMultiplatform()

kotlin {
    android {
        namespace = "com.arkivanov.decompose.testutils"
    }

    setupSourceSets {
        all {
            languageSettings {
                optIn("com.arkivanov.decompose.InternalDecomposeApi")
                optIn("com.arkivanov.decompose.ExperimentalDecomposeApi")
            }
        }

        common.main.dependencies {
            implementation(project(":decompose"))
            implementation(deps.jetbrains.kotlinx.kotlinxSerializationCore)
            implementation(deps.jetbrains.kotlinx.kotlinxSerializationJson)
        }
    }
}
