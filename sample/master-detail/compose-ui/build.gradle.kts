import com.arkivanov.gradle.Target

plugins {
    id("kotlin-multiplatform")
    id("com.android.library")
    id("kotlin-parcelize")
    id("org.jetbrains.compose")
    id("com.arkivanov.gradle.setup")
}

setupMultiplatform {
    targets(Target.Android, Target.Jvm)
}

kotlin {
    sourceSets {
        commonMain {
            dependencies {
                implementation(project(":decompose"))
                implementation(project(":sample:master-detail:shared"))
                implementation(project(":extensions-compose-jetbrains"))
                implementation(compose.foundation)
                implementation(compose.material)
            }
        }

        named("jvmMain") {
            dependencies {
                implementation(compose.uiTooling)
            }
        }
    }
}
