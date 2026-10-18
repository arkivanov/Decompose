import com.arkivanov.gradle.setupAndroidApp

plugins {
    id("com.android.application")
    id("org.jetbrains.compose")
    id("org.jetbrains.kotlin.plugin.compose")
    id("com.arkivanov.gradle.setup")
}

setupAndroidApp(
    applicationId = "com.arkivanov.sample.app",
    versionCode = 1,
    versionName = "1.0",
)

android {
    namespace = "com.arkivanov.sample.app"

    packaging {
        resources {
            excludes += "META-INF/*"
        }
    }
}

dependencies {
    implementation(project(":decompose"))
    implementation(project(":extensions-android"))
    implementation(project(":sample:shared:shared"))
    implementation(project(":sample:shared:compose"))
    implementation(deps.jetbrains.compose.runtime)
    implementation(deps.jetbrains.compose.foundation)
    implementation(deps.jetbrains.compose.material)
    implementation(deps.androidx.core.coreKtx)
    implementation(deps.androidx.appcompat.appcompat)
    implementation(deps.androidx.activity.activityCompose)
    implementation(deps.android.material.material)
}
