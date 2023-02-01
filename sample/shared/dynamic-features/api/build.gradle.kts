import com.arkivanov.gradle.iosCompat
import com.arkivanov.gradle.setupMultiplatform

plugins {
    id("kotlin-multiplatform")
    id("com.android.library")
    id("com.arkivanov.gradle.setup")
}

setupMultiplatform {
    android()
    jvm()
    js(IR) { browser() }
    iosCompat()
}

android {
    namespace = "com.arkivanov.sample.shared.dynamicfeatures.api"
}

kotlin {
    sourceSets {
        commonMain {
            dependencies {
                implementation(project(":decompose"))
            }
        }
    }
}
