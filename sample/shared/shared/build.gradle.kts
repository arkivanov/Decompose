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
    id("kotlinx-serialization")
    id("com.arkivanov.gradle.setup")
}

setupMultiplatform {
    jvm()
    js { browser() }
    iosCompat(x64 = null)
}

kotlin {
    android {
        namespace = "com.arkivanov.sample.shared"

        androidResources {
            enable = true
        }
    }

    if ("XCODE_VERSION_MAJOR" in System.getenv().keys) {
        targets
            .filterIsInstance<KotlinNativeTarget>()
            .filter { it.konanTarget.family == Family.IOS }
            .forEach {
                it.binaries {
                    framework {
                        baseName = "Shared" // Used by app-ios
                        export(project(":decompose"))
                        export(deps.androidx.lifecycle.lifecycleCommon)
                        export(deps.androidx.lifecycle.lifecycleRuntime)

                        // Optional, only if you need state preservation on Darwin (Apple) targets
                        export(deps.essenty.stateKeeper)
                    }
                }
            }
    }

    setupSourceSets {
        val android by bundle()
        val js by bundle()
        val ios by bundle()

        ios dependsOn common
        iosSet dependsOn ios

        all {
            languageSettings {
                optIn("com.arkivanov.decompose.ExperimentalDecomposeApi")
            }
        }

        common.main.dependencies {
            api(project(":decompose"))
            api(deps.androidx.lifecycle.lifecycleCommon)
            api(deps.androidx.lifecycle.lifecycleRuntime)
            api(deps.androidx.navigationEvent.navigationEvent)
            api(deps.essenty.stateKeeper)
            implementation(deps.reaktive.reaktive)
            implementation(deps.jetbrains.kotlinx.kotlinxSerializationJson)
        }

        common.test.dependencies {
            implementation(deps.reaktive.reaktiveTesting)
        }

        android.main.dependencies {
            implementation(project(":extensions-android"))
            implementation(deps.android.material.material)
            implementation(deps.android.play.core)
        }

        js.main.dependencies {
            implementation(project.dependencies.enforcedPlatform(deps.jetbrains.kotlinWrappers.kotlinWrappersBom.get()))
            implementation("org.jetbrains.kotlin-wrappers:kotlin-react")
            implementation("org.jetbrains.kotlin-wrappers:kotlin-styled")
            implementation("org.jetbrains.kotlin-wrappers:kotlin-emotion")
            implementation("org.jetbrains.kotlin-wrappers:kotlin-mui")
        }
    }
}
