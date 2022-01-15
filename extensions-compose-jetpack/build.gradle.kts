plugins {
    id("com.android.library")
    id("kotlin-android")
    id("com.arkivanov.gradle.setup")
}

setupAndroidLibrary {
    androidLibrary()
    publications()
    binaryCompatibilityValidator()
}

android {
    buildFeatures {
        compose = true
    }

    composeOptions {
        kotlinCompilerExtensionVersion = deps.versions.jetpackComposeCompiler.get()
    }

    defaultConfig {
        testInstrumentationRunner = "androidx.test.runner.AndroidJUnitRunner"
    }

    packagingOptions {
        pickFirst("META-INF/AL2.0")
        pickFirst("META-INF/LGPL2.0")
        pickFirst("META-INF/LGPL2.1")
    }
}

dependencies {
    implementation(project(":decompose"))
    implementation(deps.androidx.compose.foundation.foundation)
    implementation(deps.androidx.activity.activityKtx)
    androidTestImplementation(deps.androidx.compose.ui.uiTestJunit4)
    androidTestImplementation(deps.junit.junit)
    androidTestImplementation(deps.androidx.compose.ui.uiTestManifest)
    androidTestImplementation(deps.androidx.test.core)
}
