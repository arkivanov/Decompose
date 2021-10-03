import com.arkivanov.gradle.Target

plugins {
    id("kotlin-multiplatform")
    id("com.android.dynamic-feature")
    id("org.jetbrains.compose")
    id("com.arkivanov.gradle.setup")
}

setup {
    multiplatform(Target.Android, Target.Jvm)
}

kotlin {
    sourceSets {
        commonMain {
            dependencies {
                implementation(project(":decompose"))
                implementation(project(":sample:dynamic-features:shared:feature2Api"))
                implementation(compose.runtime)
                implementation(compose.foundation)
                implementation(compose.material)
            }
        }

        named("androidMain") {
            dependencies {
                implementation(project(":sample:dynamic-features:app-android"))
            }
        }
    }
}
