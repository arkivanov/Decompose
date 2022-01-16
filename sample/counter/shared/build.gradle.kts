import com.arkivanov.gradle.Target
import org.jetbrains.kotlin.gradle.plugin.mpp.KotlinNativeTarget
import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    id("kotlin-multiplatform")
    id("com.android.library")
    id("kotlin-parcelize")
    id("com.arkivanov.gradle.setup")
}

setupMultiplatform {
    targets(
        Target.Android,
        Target.Js(mode = Target.Js.Mode.IR),
        Target.Ios(isAppleSiliconEnabled = false),
        Target.WatchOs(isAppleSiliconEnabled = false),
    )
}

android {
    buildFeatures {
        compose = true
    }

    composeOptions {
        kotlinCompilerExtensionVersion = deps.versions.jetpackComposeCompiler.get()
    }
}

kotlin {
    targets
        .filterIsInstance<KotlinNativeTarget>()
        .filter { it.name.startsWith("ios") || it.name.startsWith("watchos") }
        .forEach {
            it.binaries {
                framework {
                    baseName = "Counter"
                    transitiveExport = true
                    export(project(":decompose"))
                }
            }
        }

    sourceSets {
        commonMain {
            dependencies {
                api(project(":decompose"))
                implementation(deps.reaktive.reaktive)
                implementation("com.badoo.reaktive:reaktive:1.2.0")
            }
        }

        named("androidMain") {
            dependencies {
                implementation(project(":extensions-compose-jetpack"))
                implementation(project(":extensions-android"))
                implementation(deps.androidx.compose.foundation.foundation)
                implementation(deps.androidx.compose.material.material)
                implementation(deps.androidx.compose.ui.uiTooling)
                implementation(deps.android.material.material)
            }
        }

        named("jsMain") {
            dependencies {
                implementation(project.dependencies.enforcedPlatform(deps.jetbrains.kotlinWrappers.kotlinWrappersBom.get()))
                implementation("org.jetbrains.kotlin-wrappers:kotlin-react")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-styled")
                implementation(deps.muirwik.muirwikComponents)
            }
        }
    }
}

// As per KT-38694 (https://github.com/avdim/compose_mpp_workaround)

configurations {
    create("composeCompiler") {
        isCanBeConsumed = false
    }
}

dependencies {
    add("composeCompiler", "androidx.compose.compiler:compiler:${deps.versions.jetpackComposeCompiler.get()}")
}

afterEvaluate {
    val composeCompilerJar =
        project
            .configurations
            .getByName("composeCompiler")
            .resolve()
            .firstOrNull()
            ?: throw Exception("Please add \"androidx.compose.compiler:compiler\" (and only that) as a \"composeCompiler\" dependency")

    project.tasks.withType<KotlinCompile> {
        kotlinOptions.freeCompilerArgs += listOf("-Xuse-ir", "-Xplugin=$composeCompilerJar")
    }
}
