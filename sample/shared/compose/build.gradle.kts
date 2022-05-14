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
        Target.Jvm,
    )
}

kotlin {
    sourceSets {
        commonMain {
            dependencies {
                implementation(project(":decompose"))
                implementation(project(":extensions-compose-jetbrains"))
                implementation(project(":sample:shared:shared"))
                implementation(project(":sample:shared:dynamic-features:api"))
                implementation(project(":sample:shared:dynamic-features:compose-api"))
                implementation(compose.runtime)
                implementation(compose.foundation)
                implementation(compose.material)
            }
        }

        named("jvmMain") {
            dependencies {
                implementation(project(":sample:shared:dynamic-features:feature1Impl"))
                implementation(project(":sample:shared:dynamic-features:feature2Impl"))
            }
        }
    }
}
