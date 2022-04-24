plugins {
    id("com.android.application")
    id("kotlin-android")
    id("kotlin-parcelize")
    id("org.jetbrains.compose")
    id("com.arkivanov.gradle.setup")
}

setupAndroidApp {
    androidApp(
        applicationId = "com.arkivanov.masterdetail.app",
        versionCode = 1,
        versionName = "1.0",
    )
}

android {
    packagingOptions {
        exclude("META-INF/*")
    }
}

dependencies {
    implementation(project(":decompose"))
    implementation(project(":extensions-compose-jetbrains"))
    implementation(project(":sample:master-detail:shared"))
    implementation(project(":sample:master-detail:ui-compose"))
    implementation(compose.foundation)
    implementation(compose.material)
    implementation(deps.androidx.core.coreKtx)
    implementation(deps.androidx.appcompat.appcompat)
    implementation(deps.androidx.lifecycle.lifecycleCommonJava8)
    implementation(deps.androidx.activity.activityCompose)
    implementation(deps.android.material.material)
}
