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
                useModule("com.github.arkivanov:gradle-setup-plugin:c9a0a04506")
            }
        }
    }

    plugins {
        id("com.arkivanov.gradle.setup")
    }
}

if (!startParameter.projectProperties.containsKey("check_publication")) {
    include(":decompose")
    include(":decompose-test-utils")
    include(":jetpack-component-context")
    include(":extensions-compose")
    include(":extensions-compose-experimental")
    include(":extensions-android")
    include(":sample:shared:shared")
    include(":sample:shared:compose")
    include(":sample:shared:dynamic-features:api")
    include(":sample:shared:dynamic-features:compose-api")
    include(":sample:shared:dynamic-features:feature1Impl")
    include(":sample:shared:dynamic-features:feature2Impl")
    include(":sample:app-android")
    include(":sample:app-desktop")
    include(":sample:app-js-compose")
    include(":sample:app-js")
} else {
    include(":tools:check-publication")
}
