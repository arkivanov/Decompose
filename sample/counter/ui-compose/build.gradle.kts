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
        Target.Ios(
            simulatorArm64 = false, // Not supported by Compose yet
            arm64 = false, // Uncomment to enable arm64 target, also check other modules
        )
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

                // Workaround as per https://youtrack.jetbrains.com/issue/KT-41821
                implementation("org.jetbrains.kotlinx:atomicfu:0.17.2")
            }
        }
    }
}
