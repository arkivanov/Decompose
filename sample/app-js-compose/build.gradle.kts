import com.arkivanov.gradle.bundle
import com.arkivanov.gradle.setupMultiplatform
import com.arkivanov.gradle.setupSourceSets

plugins {
    id("kotlin-multiplatform")
    id("kotlinx-serialization")
    id("org.jetbrains.compose")
    id("org.jetbrains.kotlin.plugin.compose")
    id("com.arkivanov.gradle.setup")
}

setupMultiplatform {
    wasmJs {
        browser()
        binaries.executable()
    }
}

kotlin {
    setupSourceSets {
        val wasmJs by bundle()

        wasmJs.main.dependencies {
            implementation(project(":decompose"))
            implementation(project(":extensions-compose"))
            implementation(compose.runtime)
            implementation(compose.foundation)
            implementation(compose.material)
        }
    }
}

compose.experimental {
    web.application {}
}
