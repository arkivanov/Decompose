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
        classpath(deps.jetbrains.kotlin.composeCompilerGradlePlug)
        classpath(deps.jetbrains.kotlinx.binaryCompatibilityValidator)
        classpath(deps.jetbrains.kotlin.serializationGradlePlug)
        classpath(deps.dropbox.dependencyGuard)
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
        compileSdkVersion = 35,
        targetSdkVersion = 35,
    ),
    binaryCompatibilityValidatorConfig = BinaryCompatibilityValidatorConfig(
        nonPublicMarkers = listOf("com.arkivanov.decompose.InternalDecomposeApi"),
        klib = true,
    ),
    publicationConfig = PublicationConfig(
        group = "com.arkivanov.decompose",
        version = deps.versions.decompose.get(),
        projectName = "Decompose",
        projectDescription = "Kotlin Multiplatform lifecycle-aware business logic components",
        projectUrl = "https://github.com/arkivanov/Decompose",
        scmUrl = "scm:git:git://github.com/arkivanov/Decompose.git",
        licenseName = "Apache-2.0",
        licenseUrl = "https://www.apache.org/licenses/LICENSE-2.0.txt",
        developerId = "arkivanov",
        developerName = "Arkadii Ivanov",
        developerEmail = "arkann1985@gmail.com",
        signingKey = System.getenv("SIGNING_KEY"),
        signingPassword = System.getenv("SIGNING_PASSWORD"),
        repositoryUrl = "https://ossrh-staging-api.central.sonatype.com/service/local/staging/deploy/maven2/",
        repositoryUserName = System.getenv("SONATYPE_USER_NAME"),
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
