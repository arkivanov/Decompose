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
    id("kotlin-parcelize")
    id("kotlinx-serialization")
    id("com.arkivanov.gradle.setup")
}

setupMultiplatform {
    androidTarget()
    jvm()
    js { browser() }
    iosCompat()
}

android {
    namespace = "com.arkivanov.sample.shared"
}

kotlin {
    if ("XCODE_VERSION_MAJOR" in System.getenv().keys) {
        targets
            .filterIsInstance<KotlinNativeTarget>()
            .filter { it.konanTarget.family == Family.IOS }
            .forEach {
                it.binaries {
                    framework {
                        baseName = "Shared" // Used by app-ios
                        export(project(":decompose"))

                        // Optional, only if you need state preservation on Darwin (Apple) targets
                        export(deps.essenty.stateKeeper)

                        // Optional, only if you need state preservation on Darwin (Apple) targets
                        export(deps.parcelizeDarwin.runtime)
                    }
                }
            }
    }

    setupSourceSets {
        val android by bundle()
        val js by bundle()
        val nonAndroid by bundle()

        nonAndroid.dependsOn(common)
        (allSet - android).dependsOn(nonAndroid)

        common.main.dependencies {
            api(project(":decompose"))
            implementation(project(":sample:shared:dynamic-features:api"))
            api(deps.essenty.lifecycle)
            api(deps.essenty.stateKeeper)
            api(deps.essenty.backHandler)
            implementation(deps.reaktive.reaktive)
        }

        common.test.dependencies {
            implementation(deps.reaktive.reaktiveTesting)
        }

        android.main.dependencies {
            implementation(project(":extensions-android"))
            implementation(deps.android.material.material)
            implementation(deps.android.play.core)
        }

        nonAndroid.main.dependencies {
            implementation(project(":sample:shared:dynamic-features:feature1Impl"))
            implementation(project(":sample:shared:dynamic-features:feature2Impl"))
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
