import com.arkivanov.gradle.Target
import org.jetbrains.compose.desktop.application.dsl.TargetFormat

plugins {
    id("kotlin-multiplatform")
    id("org.jetbrains.compose")
    id("com.arkivanov.gradle.setup")
}

setupMultiplatform {
    targets(Target.Jvm)
}

kotlin {
    jvm {
        withJava()
    }

    sourceSets {
        named("jvmMain") {
            dependencies {
                implementation(project(":decompose"))
                implementation(project(":extensions-compose-jetbrains"))
                implementation(project(":sample:dynamic-features:shared:root"))
                implementation(compose.desktop.currentOs)
            }
        }
    }
}

compose.desktop {
    application {
        mainClass = "com.arkivanov.dynamicfeatures.app.MainKt"

        nativeDistributions {
            targetFormats = setOf(TargetFormat.Dmg, TargetFormat.Msi, TargetFormat.Deb)
            packageName = "DecomposeDynamicFeatures"
            packageVersion = "1.0.0"

            windows {
                menuGroup = "Decompose Samples"
                // see https://wixtoolset.org/documentation/manual/v3/howtos/general/generate_guids.html
                upgradeUuid = "844114D7-ACB2-4C57-9F12-E44D806E2A4A"
            }
        }
    }
}
