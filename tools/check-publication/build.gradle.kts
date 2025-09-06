import com.arkivanov.gradle.bundle
import com.arkivanov.gradle.dependsOn
import com.arkivanov.gradle.plus
import com.arkivanov.gradle.setupMultiplatform
import com.arkivanov.gradle.setupSourceSets

plugins {
    id("kotlin-multiplatform")
    id("com.android.library")
    id("com.arkivanov.gradle.setup")
}

repositories {
    maven("https://central.sonatype.com/api/v1/publisher/deployments/download/") {
        name = "deployments"
        credentials(HttpHeaderCredentials::class) {
            name = "Authorization"
            value = "Bearer ${System.getenv("SONATYPE_AUTH_BASE64")}"
        }
        authentication {
            create<HttpHeaderAuthentication>("header")
        }
    }
}

setupMultiplatform()

val version = deps.versions.decompose.get()

android {
    namespace = "com.arkivanov.decompose.tools.checkpublication"
}

kotlin {
    setupSourceSets {
        val android by bundle()
        val jvm by bundle()
        val compose by bundle()
        val js by bundle()
        val wasmJs by bundle()

        compose dependsOn common
        android dependsOn compose
        (android + jvm + js + wasmJs + iosSet + macosSet) dependsOn compose

        common.main.dependencies {
            implementation("com.arkivanov.decompose:decompose:$version")
        }

        android.main.dependencies {
            implementation("com.arkivanov.decompose:extensions-android:$version")
        }

        compose.main.dependencies {
            implementation("com.arkivanov.decompose:extensions-compose:$version")
        }
    }
}
