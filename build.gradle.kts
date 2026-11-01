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
        gradlePluginPortal()
        google()
    }

    dependencies {
        classpath(deps.kotlin.kotlinGradlePlug)
        classpath(deps.android.gradle)
        classpath(deps.jetbrains.compose.composeGradlePlug)
        classpath(deps.jetbrains.kotlin.composeCompilerGradlePlug)
        classpath(deps.jetbrains.kotlinx.binaryCompatibilityValidator)
        classpath(deps.jetbrains.kotlin.serializationGradlePlug)
        classpath(deps.dropbox.dependencyGuard)
        classpath(deps.tjokinen.androidBcvBridge)
    }
}

plugins {
    id("com.arkivanov.gradle.setup")
}

setupDefaults(
    multiplatformConfigurator = {
        jvm()
        js { browser() }
        wasmJs { browser() }
        linuxX64()
        linuxArm64()
        iosCompat(x64 = null)
        watchosCompat()
        tvosCompat()
        macosCompat()
    },
    androidConfig = AndroidConfig(
        minSdkVersion = 24,
        compileSdkVersion = 37,
        targetSdkVersion = 37,
    ),
    binaryCompatibilityValidatorConfig = BinaryCompatibilityValidatorConfig(
        nonPublicMarkers = listOf("com.arkivanov.decompose.InternalDecomposeApi"),
        klib = false, // Not working correctly on CI because of the task split Linux/macOS
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

// Workaround for API validation of the Android target in KMP modules:
// https://github.com/Kotlin/binary-compatibility-validator/issues/312#issuecomment-4873043356
// -Dsplit_targets enables Android compilation only on Linux, so the android-bcv-bridge tasks follow it.
subprojects {
    plugins.withId("io.github.tjokinen.android-bcv-bridge") {
        afterEvaluate {
            val compileEnabled = tasks.named("compileAndroidMain").get().enabled
            listOf("androidApiBuild", "androidApiCheck", "androidApiDump").forEach { taskName ->
                tasks.named(taskName).configure { enabled = compileEnabled }
            }
        }
    }
}

allprojects {
    repositories {
        mavenCentral()
        google()
    }
}
