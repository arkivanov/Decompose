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
    id("kotlin-parcelize")
    id("com.arkivanov.gradle.setup")
}

setupMultiplatform()
setupPublication()
setupBinaryCompatibilityValidator()

kotlin {
    setupSourceSets {
        val android by bundle()
        val nonAndroid by bundle()
        val native by bundle()
        val nonNative by bundle()

        (nonAndroid + native + nonNative) dependsOn common
        (allSet - android) dependsOn nonAndroid
        (allSet - nativeSet) dependsOn nonNative
        nativeSet dependsOn native

        all {
            languageSettings {
                optIn("com.arkivanov.decompose.InternalDecomposeApi")
            }
        }

        common.main.dependencies {
            api(deps.essenty.lifecycle)
            api(deps.essenty.stateKeeper)
            api(deps.essenty.instanceKeeper)
            api(deps.essenty.backHandler)
        }

        android.main.dependencies {
            implementation(deps.androidx.activity.activityKtx)
            implementation(deps.androidx.lifecycle.lifecycleCommonJava8)
        }
    }
}
