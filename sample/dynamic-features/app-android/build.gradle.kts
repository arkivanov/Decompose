plugins {
    id("com.android.application")
    id("kotlin-android")
    id("kotlin-parcelize")
    id("org.jetbrains.compose")
    id("com.arkivanov.gradle.setup")
}

setup {
    androidApp(
        applicationId = "com.arkivanov.dynamicfeatures.app",
        versionCode = 1,
        versionName = "1.0",
    )
}

android {
    packagingOptions {
        exclude("META-INF/*")
    }

    dynamicFeatures.add(":sample:dynamic-features:shared:feature1Impl")
    dynamicFeatures.add(":sample:dynamic-features:shared:feature2Impl")
}

dependencies {
    implementation(project(":decompose"))
    implementation(project(":extensions-compose-jetbrains"))
    implementation(project(":sample:dynamic-features:shared:root"))
    implementation(deps.androidx.core.coreKtx)
    implementation(deps.androidx.appcompat.appcompat)
    implementation(deps.androidx.activity.activityCompose)
    implementation(deps.android.material.material)
    implementation(deps.android.play.core)
    implementation(compose.foundation)
    implementation(compose.material)
}
