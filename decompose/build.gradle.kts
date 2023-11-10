import com.arkivanov.gradle.bundle
import com.arkivanov.gradle.dependsOn
import com.arkivanov.gradle.plus
import com.arkivanov.gradle.setupBinaryCompatibilityValidator
import com.arkivanov.gradle.setupMultiplatform
import com.arkivanov.gradle.setupPublication
import com.arkivanov.gradle.setupSourceSets

plugins {
    id("kotlin-multiplatform")
    id("com.android.library")
    id("kotlinx-serialization")
    id("kotlin-parcelize")
    id("com.arkivanov.parcelize.darwin")
    id("com.arkivanov.gradle.setup")
}

setupMultiplatform()
setupPublication()
setupBinaryCompatibilityValidator()

android {
    namespace = "com.arkivanov.decompose"
}

kotlin {
    setupSourceSets {
        val android by bundle()
        val nonAndroid by bundle()
        val nonNative by bundle()
        val darwin by bundle()
        val js by bundle()
        val nonJs by bundle()

        (nonAndroid + darwin + nonNative + nonJs) dependsOn common
        (allSet - android) dependsOn nonAndroid
        (allSet - nativeSet) dependsOn nonNative
        (allSet - js) dependsOn nonJs
        darwinSet dependsOn darwin

        all {
            languageSettings {
                optIn("com.arkivanov.decompose.InternalDecomposeApi")
                optIn("com.arkivanov.decompose.ExperimentalDecomposeApi")
            }
        }

        common.main.dependencies {
            api(deps.essenty.lifecycle)
            api(deps.essenty.stateKeeper)
            api(deps.essenty.instanceKeeper)
            api(deps.essenty.backHandler)
            api(deps.jetbrains.kotlinx.kotlinxSerializationCore)
            implementation(deps.jetbrains.kotlinx.kotlinxSerializationJson)
        }

        common.test.dependencies {
            implementation(deps.jetbrains.kotlinx.kotlinxCoroutinesCore)
        }

        android.main.dependencies {
            implementation(deps.androidx.activity.activityKtx)
            implementation(deps.androidx.fragment.fragmentKtx)
            implementation(deps.androidx.lifecycle.lifecycleCommonJava8)
        }
    }
}
