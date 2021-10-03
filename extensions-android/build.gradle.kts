plugins {
    id("com.android.library")
    id("kotlin-android")
    id("com.arkivanov.gradle.setup")
}

setup {
    androidLibrary()
    androidLibraryPublications()
}

dependencies {
    implementation(project(":decompose"))
}
