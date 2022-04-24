import com.arkivanov.gradle.Target
import org.jetbrains.kotlin.gradle.plugin.mpp.KotlinNativeTarget

plugins {
    id("kotlin-multiplatform")
    id("com.android.library")
    id("kotlin-parcelize")
    id("com.arkivanov.gradle.setup")
}

setupMultiplatform {
    targets(
        Target.Android,
        Target.Jvm,
        Target.Js(mode = Target.Js.Mode.IR),
        Target.Ios(isAppleSiliconEnabled = false),
    )
}

kotlin {
    targets
        .filterIsInstance<KotlinNativeTarget>()
        .filter { it.name.startsWith("ios") || it.name.startsWith("watchos") }
        .forEach {
            it.binaries {
                framework {
                    baseName = "MasterDetail"
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
            }
        }

        named("jsMain") {
            dependencies {
                implementation(project.dependencies.enforcedPlatform(deps.jetbrains.kotlinWrappers.kotlinWrappersBom.get()))
                implementation("org.jetbrains.kotlin-wrappers:kotlin-react")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-styled")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-emotion")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-mui")
            }
        }
    }
}
