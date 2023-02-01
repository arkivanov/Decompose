import com.arkivanov.gradle.bundle
import com.arkivanov.gradle.dependsOn
import com.arkivanov.gradle.setupMultiplatform
import com.arkivanov.gradle.setupSourceSets
import org.jetbrains.compose.experimental.dsl.IOSDevices
import org.jetbrains.kotlin.gradle.plugin.mpp.KotlinNativeTarget

plugins {
    id("kotlin-multiplatform")
    id("org.jetbrains.compose")
    id("com.arkivanov.gradle.setup")
}

setupMultiplatform {
    listOf(iosX64("uikitX64"), iosArm64("uikitArm64")).forEach {
        it.binaries {
            executable {
                entryPoint = "com.arkivanov.sample.app.main"
                freeCompilerArgs += listOf(
                    "-linker-option", "-framework", "-linker-option", "Metal",
                    "-linker-option", "-framework", "-linker-option", "CoreText",
                    "-linker-option", "-framework", "-linker-option", "CoreGraphics"
                )
            }
        }
    }
}

kotlin {
    setupSourceSets {
        val uikit by bundle()

        uikit dependsOn common
        iosSet dependsOn uikit

        common.main.dependencies {
            implementation(project(":decompose"))
            implementation(project(":extensions-compose-jetbrains"))
            implementation(project(":sample:shared:shared"))
            implementation(project(":sample:shared:compose"))
            implementation(compose.runtime)
            implementation(compose.foundation)
            implementation(compose.material)
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
        bundleIdPrefix = "com.arkivanov.decompose.sample"
        projectName = "DecomposeSample"

        deployConfigurations {
            simulator("IPhone12Pro") {
                // Usage: ./gradlew iosDeployIPhone12ProDebug
                device = IOSDevices.IPHONE_12_PRO
            }

            /*
             * Usage: ./gradlew iosDeployDeviceDebug
             *
             * If your are getting "A valid provisioning profile for this executable was not found" error,
             * see: https://developer.apple.com/forums/thread/128121?answerId=403323022#403323022
             */
            connectedDevice("Device") {
                // Uncomment and fill with your Team ID
                // teamId = ""
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
