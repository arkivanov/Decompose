plugins {
    id("kotlin-multiplatform")
    id("com.android.library")
    id("com.arkivanov.gradle.setup")
}

setupMultiplatform {
    targets()
}

repositories {
    maven("https://oss.sonatype.org/content/groups/staging/") {
        credentials {
            username = "arkivanov"
            password = System.getenv("SONATYPE_PASSWORD")
        }
    }
}

val version = deps.versions.decompose.get()

kotlin {
    sourceSets {
        commonMain {
            dependencies {
                implementation("com.arkivanov.decompose:decompose:$version")
            }
        }

        named("androidMain") {
            dependencies {
                implementation("com.arkivanov.decompose:extensions-android:$version")
                implementation("com.arkivanov.decompose:extensions-compose-jetbrains:$version")
            }
        }

        named("jvmMain") {
            dependencies {
                implementation("com.arkivanov.decompose:extensions-compose-jetbrains:$version")
            }
        }

        named("iosX64Main") {
            dependencies {
                implementation("com.arkivanov.decompose:extensions-compose-jetbrains:$version")
            }
        }

        named("iosArm64Main") {
            dependencies {
                implementation("com.arkivanov.decompose:extensions-compose-jetbrains:$version")
            }
        }

        named("macosX64Main") {
            dependencies {
                implementation("com.arkivanov.decompose:extensions-compose-jetbrains:$version")
            }
        }

        named("macosArm64Main") {
            dependencies {
                implementation("com.arkivanov.decompose:extensions-compose-jetbrains:$version")
            }
        }
    }
}
