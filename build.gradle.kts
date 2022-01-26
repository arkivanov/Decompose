import com.arkivanov.gradle.AndroidConfig
import com.arkivanov.gradle.PublicationConfig
import com.arkivanov.gradle.Target
import com.arkivanov.gradle.darwinSet
import com.arkivanov.gradle.named

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
        classpath("org.jetbrains.kotlinx.binary-compatibility-validator:org.jetbrains.kotlinx.binary-compatibility-validator.gradle.plugin:0.8.0-RC")
    }
}

plugins {
    id("com.arkivanov.gradle.setup")
}

setupAllProjects {
    multiplatformTargets(
        Target.Android,
        Target.Jvm,
        Target.Js(),
        Target.Ios(),
        Target.WatchOs(),
        Target.TvOs(),
        Target.MacOs(),
    )

    multiplatformSourceSets {
        val nonAndroid by named(common)
        val native by named(common)
        val nonNative by named(common)

        android.dependsOn(nonNative)
        jvm.dependsOn(nonAndroid, nonNative)
        js.dependsOn(nonAndroid, nonNative)
        darwinSet.dependsOn(nonAndroid, native)
    }

    androidConfig(
        AndroidConfig(
            minSdkVersion = 21,
            compileSdkVersion = 31,
            targetSdkVersion = 31,
        )
    )

    publicationConfig(
        PublicationConfig(
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
        )
    )
}

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
