enableFeaturePreview("VERSION_CATALOGS")

@Suppress("UnstableApiUsage")
dependencyResolutionManagement {
    versionCatalogs {
        create("deps") {
            from(files("deps.versions.toml"))
        }
    }
}

pluginManagement {
    repositories {
        gradlePluginPortal()
        maven("https://jitpack.io")
    }

    resolutionStrategy {
        eachPlugin {
            if (requested.id.toString() == "com.arkivanov.gradle.setup") {
                useModule("com.github.arkivanov:gradle-setup-plugin:9f046bd98f")
            }
        }
    }

    plugins {
        id("com.arkivanov.gradle.setup")
    }
}

if (!startParameter.projectProperties.containsKey("check_publication")) {
    include(":decompose")
    include(":extensions-compose-jetpack")
    include(":extensions-compose-jetbrains")
    include(":extensions-android")
    include(":sample:counter:shared")
    include(":sample:counter:app-android")
    include(":sample:counter:app-js")
    include(":sample:master-detail:shared")
    include(":sample:master-detail:compose-ui")
    include(":sample:master-detail:app-android")
    include(":sample:master-detail:app-desktop")
    include(":sample:master-detail:app-js")
    include(":sample:dynamic-features:shared:feature1Api")
    include(":sample:dynamic-features:shared:feature1Impl")
    include(":sample:dynamic-features:shared:feature2Api")
    include(":sample:dynamic-features:shared:feature2Impl")
    include(":sample:dynamic-features:shared:main")
    include(":sample:dynamic-features:shared:root")
    include(":sample:dynamic-features:app-android")
    include(":sample:dynamic-features:app-desktop")
} else {
    include(":tools:check-publication")
}
