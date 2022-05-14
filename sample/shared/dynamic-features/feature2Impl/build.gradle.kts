import com.arkivanov.gradle.Target

plugins {
    id("kotlin-multiplatform")
    id("com.android.dynamic-feature")
    id("org.jetbrains.compose")
    id("com.arkivanov.gradle.setup")
}

setupMultiplatform {
    targets(
        Target.Android,
        Target.Jvm,
        Target.Js(mode = Target.Js.Mode.IR),
        Target.Ios(
            arm64 = false, // Uncomment to enable arm64 target
        ),
    )
}

kotlin {
    sourceSets {
        commonMain {
            dependencies {
                implementation(project(":decompose"))
                implementation(project(":sample:shared:dynamic-features:api"))
                implementation(deps.reaktive.reaktive)
            }
        }

        named("androidMain") {
            dependencies {
                implementation(project(":sample:app-android"))
                implementation(project(":sample:shared:dynamic-features:compose-api"))
                implementation(compose.material)
            }
        }

        named("jvmMain") {
            dependencies {
                implementation(project(":sample:shared:dynamic-features:compose-api"))
                implementation(compose.material)
            }
        }

        named("jsMain") {
            dependencies {
                implementation(project.dependencies.enforcedPlatform(deps.jetbrains.kotlinWrappers.kotlinWrappersBom.get()))
                implementation("org.jetbrains.kotlin-wrappers:kotlin-react")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-styled")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-emotion")
                implementation("org.jetbrains.kotlin-wrappers:kotlin-mui")
            }
        }
    }
}

compose.web.targets()

configurations.all {
    // Exclude native Compose compiler
    exclude("org.jetbrains.compose.compiler", "compiler-hosted")
}
