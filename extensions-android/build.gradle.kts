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

dependencies {
    implementation(project(":decompose"))
}
