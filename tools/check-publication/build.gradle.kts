import com.arkivanov.gradle.bundle
import com.arkivanov.gradle.iosCompat
import com.arkivanov.gradle.macosCompat
import com.arkivanov.gradle.setupMultiplatform
import com.arkivanov.gradle.setupSourceSets
import com.arkivanov.gradle.tvosCompat
import com.arkivanov.gradle.watchosCompat

plugins {
    id("kotlin-multiplatform")
    id("com.android.library")
    id("com.arkivanov.gradle.setup")
}

repositories {
    maven("https://oss.sonatype.org/content/groups/staging/") {
        credentials {
            username = "arkivanov"
            password = System.getenv("SONATYPE_PASSWORD")
        }
    }
}

setupMultiplatform()

val version = deps.versions.decompose.get()

kotlin {
    setupSourceSets {
        val android by bundle()
        val jvm by bundle()

        common.main.dependencies {
            implementation("com.arkivanov.decompose:decompose:$version")
        }

        android.main.dependencies {
            implementation("com.arkivanov.decompose:extensions-android:$version")
            implementation("com.arkivanov.decompose:extensions-compose-jetbrains:$version")
        }

        jvm.main.dependencies {
            implementation("com.arkivanov.decompose:extensions-compose-jetbrains:$version")
        }
    }
}
