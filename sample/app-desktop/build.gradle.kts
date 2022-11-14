import com.arkivanov.gradle.bundle
import com.arkivanov.gradle.setupMultiplatform
import com.arkivanov.gradle.setupSourceSets
import org.jetbrains.compose.desktop.application.dsl.TargetFormat

plugins {
    id("kotlin-multiplatform")
    id("org.jetbrains.compose")
    id("com.arkivanov.gradle.setup")
}

setupMultiplatform {
    jvm {
        withJava()
    }
}

kotlin {
    setupSourceSets {
        val jvm by bundle()

        jvm.main.dependencies {
            implementation(project(":decompose"))
            implementation(project(":extensions-compose-jetbrains"))
            implementation(project(":sample:shared:shared"))
            implementation(project(":sample:shared:compose"))
            implementation(compose.desktop.currentOs)
            implementation(deps.jetbrains.kotlinx.kotlinxCoroutinesSwing)
            implementation(deps.reaktive.reaktive)
            implementation(deps.reaktive.coroutinesInterop)
        }
    }
}

compose.desktop {
    application {
        mainClass = "com.arkivanov.sample.app.MainKt"

        nativeDistributions {
            targetFormats = setOf(TargetFormat.Dmg, TargetFormat.Msi, TargetFormat.Deb)
            packageName = "DecomposeSample"
            packageVersion = "1.0.0"

            windows {
                menuGroup = "Decompose Samples"
                // see https://wixtoolset.org/documentation/manual/v3/howtos/general/generate_guids.html
                upgradeUuid = "26181E8D-ADC6-4D03-BC67-B642F461AED4"
            }
        }
    }
}
