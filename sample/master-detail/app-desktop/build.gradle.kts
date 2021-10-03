import com.arkivanov.gradle.Target
import org.jetbrains.kotlin.gradle.plugin.mpp.KotlinNativeTarget
import org.jetbrains.kotlin.gradle.tasks.KotlinCompile
import org.jetbrains.compose.desktop.application.dsl.TargetFormat

plugins {
    id("kotlin-multiplatform")
    id("org.jetbrains.compose")
    id("com.arkivanov.gradle.setup")
}

setup {
    multiplatform(Target.Jvm)
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
                implementation(project(":sample:master-detail:shared"))
                implementation(project(":sample:master-detail:compose-ui"))
                implementation(compose.desktop.currentOs)
            }
        }
    }
}

compose.desktop {
    application {
        mainClass = "com.arkivanov.masterdetail.app.MainKt"

        nativeDistributions {
            targetFormats = setOf(TargetFormat.Dmg, TargetFormat.Msi, TargetFormat.Deb)
            packageName = "DecomposeMasterDetail"
            packageVersion = "1.0.0"

            windows {
                menuGroup = "Decompose Samples"
                // see https://wixtoolset.org/documentation/manual/v3/howtos/general/generate_guids.html
                upgradeUuid = "26181E8D-ADC6-4D03-BC67-B642F461AED4"
            }
        }
    }
}
