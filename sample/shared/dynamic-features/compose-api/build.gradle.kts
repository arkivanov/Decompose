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
}

kotlin {
    setupSourceSets {
        common.main.dependencies {
            implementation(project(":sample:shared:dynamic-features:api"))
            implementation(compose.runtime)
            implementation(compose.ui)
        }
    }
}
