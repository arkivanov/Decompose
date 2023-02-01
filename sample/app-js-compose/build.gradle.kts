import com.arkivanov.gradle.bundle
import com.arkivanov.gradle.setupMultiplatform
import com.arkivanov.gradle.setupSourceSets

plugins {
    id("kotlin-multiplatform")
    id("org.jetbrains.compose")
    id("com.arkivanov.gradle.setup")
}

setupMultiplatform {
    js(IR) {
        browser()
        binaries.executable()
    }
}

kotlin {
    setupSourceSets {
        val js by bundle()

        js.main.dependencies {
            implementation(project(":decompose"))
            implementation(project(":extensions-compose-jetbrains"))
            implementation(project(":sample:shared:shared"))
            implementation(project(":sample:shared:compose"))
            implementation(compose.runtime)
            implementation(compose.foundation)
            implementation(compose.material)
        }
    }
}

compose.experimental {
    web.application {}
}
