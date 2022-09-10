import com.arkivanov.gradle.bundle
import com.arkivanov.gradle.dependsOn
import com.arkivanov.gradle.iosCompat
import com.arkivanov.gradle.setupMultiplatform
import com.arkivanov.gradle.setupSourceSets

plugins {
    id("kotlin-multiplatform")
    id("com.android.library")
    id("org.jetbrains.compose")
    id("com.arkivanov.gradle.setup")
}

setupMultiplatform {
    android()
    jvm()
    iosCompat(
        simulatorArm64 = null, // Not supported by Compose yet
    )
}

kotlin {
    setupSourceSets {
        val jvm by bundle()
        val ios by bundle()

        ios dependsOn common
        iosSet dependsOn ios

        common.main.dependencies {
            implementation(project(":decompose"))
            implementation(project(":extensions-compose-jetbrains"))
            implementation(project(":sample:shared:shared"))
            implementation(project(":sample:shared:dynamic-features:api"))
            implementation(project(":sample:shared:dynamic-features:compose-api"))
            implementation(compose.runtime)
            implementation(compose.foundation)
            implementation(compose.material)
        }

        jvm.main.dependencies {
            implementation(project(":sample:shared:dynamic-features:feature1Impl"))
            implementation(project(":sample:shared:dynamic-features:feature2Impl"))
        }
    }
}
