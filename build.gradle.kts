import com.arkivanov.gradle.AndroidConfig
import com.arkivanov.gradle.BinaryCompatibilityValidatorConfig
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
        classpath(deps.jetbrains.kotlin.serializationGradlePlug)
    }
}

plugins {
    id("com.arkivanov.gradle.setup")
}

setupDefaults(
    multiplatformConfigurator = {
        androidTarget()
        jvm()
        js { browser() }
        wasmJs { browser() }
        iosCompat()
        watchosCompat()
        tvosCompat()
        macosCompat()
    },
    androidConfig = AndroidConfig(
        minSdkVersion = 21,
        compileSdkVersion = 34,
        targetSdkVersion = 34,
    ),
    binaryCompatibilityValidatorConfig = BinaryCompatibilityValidatorConfig(
        nonPublicMarkers = listOf("com.arkivanov.decompose.InternalDecomposeApi"),
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

    afterEvaluate {
        // Workaround for https://youtrack.jetbrains.com/issue/KT-52776
        rootProject.extensions.findByType<org.jetbrains.kotlin.gradle.targets.js.nodejs.NodeJsRootExtension>()?.apply {
            versions.webpackCli.version = "4.10.0"
        }
    }
}
