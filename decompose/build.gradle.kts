plugins {
    id("kotlin-multiplatform")
    id("com.android.library")
    id("kotlin-parcelize")
    id("com.arkivanov.gradle.setup")
}

setupMultiplatform {
    targets()
    publications()
    binaryCompatibilityValidator()
}

kotlin {
    sourceSets {
        all {
            languageSettings {
                optIn("com.arkivanov.decompose.InternalDecomposeApi")
            }
        }

        commonMain {
            dependencies {
                api(deps.essenty.lifecycle)
                api(deps.essenty.stateKeeper)
                api(deps.essenty.instanceKeeper)
                api(deps.essenty.backPressed)
            }
        }

        named("androidMain") {
            dependencies {
                implementation(deps.androidx.activity.activityKtx)
                implementation(deps.androidx.lifecycle.lifecycleCommonJava8)
            }
        }
    }
}
