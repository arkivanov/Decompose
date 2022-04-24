import com.arkivanov.gradle.Target

plugins {
    id("kotlin-multiplatform")
    id("com.android.library")
    id("org.jetbrains.compose")
    id("com.arkivanov.gradle.setup")
}

setupMultiplatform {
    targets(
        Target.Android,
    )
}

kotlin {
    sourceSets {
        commonMain {
            dependencies {
                implementation(project(":sample:counter:shared"))
                implementation(project(":decompose"))
                implementation(project(":extensions-compose-jetbrains"))
                implementation(compose.foundation)
                implementation(compose.material)
            }
        }
    }
}
