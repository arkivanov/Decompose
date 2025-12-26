import com.arkivanov.gradle.setupAndroidApp

plugins {
    id("com.android.application")
    id("kotlin-android")
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

    packagingOptions {
        exclude("META-INF/*")
    }

    dynamicFeatures.add(":sample:shared:dynamic-features:feature1Impl")
    dynamicFeatures.add(":sample:shared:dynamic-features:feature2Impl")
}

dependencies {
    implementation(project(":decompose"))
    implementation(project(":extensions-android"))
    implementation(project(":sample:shared:shared"))
    implementation(project(":sample:shared:compose"))
    implementation(compose.runtime)
    implementation(compose.foundation)
    implementation(compose.material)
    implementation(deps.androidx.core.coreKtx)
    implementation(deps.androidx.appcompat.appcompat)
    implementation(deps.androidx.activity.activityCompose)
    implementation(deps.android.material.material)
}
