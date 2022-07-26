import com.arkivanov.gradle.AndroidConfig
import com.arkivanov.gradle.PublicationConfig
import com.arkivanov.gradle.ensureUnreachableTasksDisabled
import com.arkivanov.gradle.iosCompat
import com.arkivanov.gradle.macosCompat
import com.arkivanov.gradle.setupDefaults
import com.arkivanov.gradle.tvosCompat
import com.arkivanov.gradle.watchosCompat

buildscript {
    repositories {
        mavenCentral()
        google()
        maven("https://maven.pkg.jetbrains.space/public/p/compose/dev")
    }

    dependencies {
        classpath(deps.kotlin.kotlinGradlePlug)
        classpath(deps.android.gradle)
        classpath(deps.jetbrains.compose.composeGradlePlug)
        classpath(deps.jetbrains.kotlinx.binaryCompatibilityValidator)
    }
}

plugins {
    id("com.arkivanov.gradle.setup")
}

setupDefaults(
    multiplatformConfigurator = {
        android()
        jvm()
        js(BOTH) { browser() }
        iosCompat()
        watchosCompat()
        tvosCompat()
        macosCompat()
    },
    androidConfig = AndroidConfig(
        minSdkVersion = 21,
        compileSdkVersion = 33,
        targetSdkVersion = 33,
    ),
    publicationConfig = PublicationConfig(
        group = "com.arkivanov.decompose",
        version = deps.versions.decompose.get(),
        projectName = "Decompose",
        projectDescription = "Kotlin Multiplatform lifecycle-aware business logic components",
        projectUrl = "https://github.com/arkivanov/Decompose",
        scmUrl = "scm:git:git://github.com/arkivanov/Decompose.git",
        licenseName = "The Apache License, Version 2.0",
        licenseUrl = "http://www.apache.org/licenses/LICENSE-2.0.txt",
        developerId = "arkivanov",
        developerName = "Arkadii Ivanov",
        developerEmail = "arkann1985@gmail.com",
        signingKey = System.getenv("SIGNING_KEY"),
        signingPassword = System.getenv("SIGNING_PASSWORD"),
        repositoryUrl = "https://oss.sonatype.org/service/local/staging/deployByRepositoryId/${System.getenv("SONATYPE_REPOSITORY_ID")}",
        repositoryUserName = "arkivanov",
        repositoryPassword = System.getenv("SONATYPE_PASSWORD"),
    ),
)

ensureUnreachableTasksDisabled()

allprojects {
    repositories {
        mavenCentral()
        google()
        maven("https://maven.pkg.jetbrains.space/public/p/compose/dev")
    }
}

// Workaround for https://youtrack.jetbrains.com/issue/KT-49109 until Kotlin 1.6.20
plugins.withType<org.jetbrains.kotlin.gradle.targets.js.nodejs.NodeJsRootPlugin> {
    the<org.jetbrains.kotlin.gradle.targets.js.nodejs.NodeJsRootExtension>().nodeVersion = "16.0.0"
}
