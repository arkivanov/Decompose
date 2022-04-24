plugins {
    id("kotlin-android")
    id("com.android.library")
    id("com.arkivanov.gradle.setup")
}

setupAndroidLibrary {
    androidLibrary()
}

dependencies {
    implementation(project(":sample:counter:shared"))
    implementation(project(":extensions-android"))
    implementation(deps.android.material.material)
}
