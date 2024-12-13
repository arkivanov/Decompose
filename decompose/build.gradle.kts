import com.arkivanov.gradle.bundle
import com.arkivanov.gradle.dependsOn
import com.arkivanov.gradle.plus
import com.arkivanov.gradle.setupBinaryCompatibilityValidator
import com.arkivanov.gradle.setupMultiplatform
import com.arkivanov.gradle.setupPublication
import com.arkivanov.gradle.setupSourceSets
import org.jetbrains.kotlin.gradle.tasks.KotlinCompilationTask

plugins {
    id("kotlin-multiplatform")
    id("com.android.library")
    id("kotlinx-serialization")
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
        val darwin by bundle()
        val itvos by bundle()
        val js by bundle()
        val wasmJs by bundle()
        val nonWeb by bundle()
        val web by bundle()

        (darwin) dependsOn common
        nonWeb dependsOn common
        (allSet - js - wasmJs) dependsOn nonWeb
        web dependsOn common
        (js + wasmJs) dependsOn web
        (iosSet + tvosSet) dependsOn itvos
        (darwinSet - iosSet - tvosSet + itvos) dependsOn darwin

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
        }

        common.test.dependencies {
            implementation(deps.jetbrains.kotlinx.kotlinxCoroutinesCore)
            implementation(deps.jetbrains.kotlinx.kotlinxSerializationJson)
        }

        android.main.dependencies {
            implementation(deps.androidx.fragment.fragmentKtx)
        }

        android.test.dependencies {
            implementation(deps.robolectric.robolectric)
        }

        web.main.dependencies {
            implementation(deps.jetbrains.kotlinx.kotlinxSerializationJson)
        }

        wasmJs.main.dependencies {
            implementation(deps.jetbrains.kotlinx.kotlinxBrowser)
        }
    }
}

tasks.named<KotlinCompilationTask<*>>("compileKotlinWasmJs").configure {
    compilerOptions {
        freeCompilerArgs.add("-Xwasm-kclass-fqn")
    }
}
