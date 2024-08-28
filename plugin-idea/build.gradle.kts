import org.jetbrains.intellij.platform.gradle.extensions.intellijPlatform
import org.jetbrains.kotlin.gradle.dsl.JvmTarget
import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    id("org.jetbrains.intellij.platform")
    kotlin("jvm")
}

java {
    sourceCompatibility = JavaVersion.VERSION_11
    targetCompatibility = JavaVersion.VERSION_11
}

repositories {
    intellijPlatform {
        defaultRepositories()
    }
}

intellijPlatform {
    pluginConfiguration {
        id = "org.arkivanov.decompose.plugin.idea"
        name = "Decompose"
        version = "0.0.1"
        description = "Improves IDE experience when using the Decompose library."

        ideaVersion {
            sinceBuild = "233"
        }

        vendor {
            name = "Arkadii Ivanov"
            url = "https://github.com/arkivanov"
        }
    }

    pluginVerification {
        ides {
            recommended()
        }
    }
}

dependencies {
    intellijPlatform {
        intellijIdeaCommunity("2023.3")
        bundledPlugin("org.jetbrains.kotlin")
        instrumentationTools()
    }
//    implementation("org.jetbrains.kotlin:kotlin-compiler:2.0.0")
}

tasks.withType<KotlinCompile> {
    compilerOptions {
        jvmTarget.set(JvmTarget.JVM_11)
    }
}
