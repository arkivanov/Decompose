import com.arkivanov.gradle.Target
import org.jetbrains.kotlin.gradle.plugin.mpp.KotlinNativeTarget
import org.jetbrains.kotlin.konan.target.Family

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
        Target.Ios(),
    )
}

kotlin {
    targets
        .filterIsInstance<KotlinNativeTarget>()
        .filter { it.konanTarget.family == Family.IOS }
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
    }
}
