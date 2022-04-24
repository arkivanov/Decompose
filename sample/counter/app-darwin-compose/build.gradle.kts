import com.arkivanov.gradle.Target
import org.jetbrains.compose.experimental.dsl.IOSDevices
import org.jetbrains.kotlin.gradle.plugin.mpp.KotlinNativeTarget

plugins {
    id("kotlin-multiplatform")
    id("org.jetbrains.compose")
    id("com.arkivanov.gradle.setup")
}

setupMultiplatform {
    targets(
        Target.Ios(
            simulatorArm64 = false, // Not supported by Compose yet
            arm64 = false, // Uncomment to enable arm64 target, also check other modules
        ),
    )
}

kotlin {
    iosX64("uikitX64") {
        binaries {
            executable {
                entryPoint = "com.arkivanov.sample.counter.app.main"
                freeCompilerArgs += listOf(
                    "-linker-option", "-framework", "-linker-option", "Metal",
                    "-linker-option", "-framework", "-linker-option", "CoreText",
                    "-linker-option", "-framework", "-linker-option", "CoreGraphics"
                )
            }
        }
    }

    sourceSets {
        commonMain {
            dependencies {
                implementation(project(":sample:counter:shared"))
                implementation(project(":sample:counter:ui-compose"))
                implementation(project(":decompose"))
                implementation(compose.foundation)
                implementation(compose.material)
            }
        }
    }
}

kotlin.targets.withType<KotlinNativeTarget> {
    binaries.all {
        binaryOptions["memoryModel"] = "experimental"
        binaryOptions["freezing"] = "disabled"
    }
}

compose.experimental {
    uikit.application {
        bundleIdPrefix = "com.arkivanov"
        projectName = "DecomposeCounter"

        deployConfigurations {
            simulator("IPhone12Pro") {
                //Usage: ./gradlew iosDeployIPhone12ProDebug
                device = IOSDevices.IPHONE_13_PRO
            }
        }
    }
}


kotlin {
    targets.withType<KotlinNativeTarget> {
        binaries.all {
            // TODO: the current compose binary surprises LLVM, so disable checks for now.
            freeCompilerArgs += "-Xdisable-phases=VerifyBitcode"
        }
    }
}
