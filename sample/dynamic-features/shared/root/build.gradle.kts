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
                implementation(project(":extensions-compose-jetbrains"))
                implementation(project(":sample:dynamic-features:shared:main"))
                implementation(project(":sample:dynamic-features:shared:feature1Api"))
                implementation(project(":sample:dynamic-features:shared:feature2Api"))
                implementation(deps.reaktive.reaktive)
                implementation(compose.runtime)
                implementation(compose.foundation)
                implementation(compose.material)
            }
        }

        named("androidMain") {
            dependencies {
                implementation(deps.android.play.core)
            }
        }

        named("jvmMain") {
            dependencies {
                implementation(project(":sample:dynamic-features:shared:feature1Impl"))
                implementation(project(":sample:dynamic-features:shared:feature2Impl"))
            }
        }
    }
}
