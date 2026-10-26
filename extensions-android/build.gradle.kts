import com.arkivanov.gradle.setupAndroidLibrary
import com.arkivanov.gradle.setupBinaryCompatibilityValidator
import com.arkivanov.gradle.setupPublication

plugins {
    id("com.android.library")
    id("com.arkivanov.gradle.setup")
    id("com.dropbox.dependency-guard")

    // Workaround: https://github.com/Kotlin/binary-compatibility-validator/issues/312#issuecomment-4873043356
    id("io.github.tjokinen.android-bcv-bridge")
}

setupAndroidLibrary()
setupPublication()
setupBinaryCompatibilityValidator()

android {
    namespace = "com.arkivanov.decompose.extensions.android"
}

dependencyGuard {
    configuration("releaseRuntimeClasspath")
}

dependencies {
    implementation(project(":decompose"))
}

// For android-bcv-bridge.
// -Dsplit_targets enables this module's Kotlin compilation only on Linux.
afterEvaluate {
    val compileEnabled = tasks.named("compileReleaseKotlin").get().enabled
    listOf("releaseApiBuild", "releaseApiCheck", "releaseApiDump").forEach { taskName ->
        tasks.named(taskName).configure { enabled = compileEnabled }
    }
}
