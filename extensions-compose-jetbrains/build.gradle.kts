import com.arkivanov.gradle.Target

plugins {
    id("kotlin-multiplatform")
    id("com.android.library")
    id("org.jetbrains.compose")
    id("com.arkivanov.gradle.setup")
}

setup {
    multiplatform(Target.Android, Target.Jvm)
    multiplatformPublications()
}

kotlin {
    sourceSets {
        commonMain {
            dependencies {
                implementation(project(":decompose"))
                implementation(compose.foundation)
            }
        }

        named("androidMain") {
            dependencies {
                implementation(deps.androidx.activity.activityKtx)
            }
        }

        named("jvmTest") {
            dependencies {
                implementation(deps.jetbrains.compose.ui.uiTestJunit4)
                implementation(deps.junit.junit)
                implementation(compose.desktop.currentOs)
            }
        }
    }
}
