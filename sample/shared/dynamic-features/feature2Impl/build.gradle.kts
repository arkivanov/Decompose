import com.arkivanov.gradle.bundle
import com.arkivanov.gradle.iosCompat
import com.arkivanov.gradle.setupMultiplatform
import com.arkivanov.gradle.setupSourceSets
import org.jetbrains.compose.ComposeCompilerKotlinSupportPlugin
import org.jetbrains.kotlin.gradle.plugin.KotlinCompilation
import org.jetbrains.kotlin.gradle.plugin.KotlinCompilerPluginSupportPlugin
import org.jetbrains.kotlin.gradle.plugin.KotlinPlatformType

plugins {
    id("kotlin-multiplatform")
    id("com.android.dynamic-feature")
    id("org.jetbrains.compose")
    id("com.arkivanov.gradle.setup")
}

setupMultiplatform {
    android()
    jvm()
    js(IR) { browser() }
    iosCompat(
        arm64 = null // Comment out to enable arm64 target
    )
}

kotlin {
    setupSourceSets {
        val android by bundle()
        val jvm by bundle()
        val js by bundle()

        common.main.dependencies {
            implementation(project(":decompose"))
            implementation(project(":sample:shared:dynamic-features:api"))
            implementation(deps.reaktive.reaktive)
        }

        android.main.dependencies {
            implementation(project(":sample:app-android"))
            implementation(project(":sample:shared:dynamic-features:compose-api"))
            implementation(compose.material)
        }

        jvm.main.dependencies {
            implementation(project(":sample:shared:dynamic-features:compose-api"))
            implementation(compose.material)
        }

        js.main.dependencies {
            implementation(project.dependencies.enforcedPlatform(deps.jetbrains.kotlinWrappers.kotlinWrappersBom.get()))
            implementation("org.jetbrains.kotlin-wrappers:kotlin-react")
            implementation("org.jetbrains.kotlin-wrappers:kotlin-styled")
            implementation("org.jetbrains.kotlin-wrappers:kotlin-emotion")
            implementation("org.jetbrains.kotlin-wrappers:kotlin-mui")
        }
    }
}

compose.web.targets()

plugins.removeAll { it is ComposeCompilerKotlinSupportPlugin }

class ComposeNoNativePlugin : KotlinCompilerPluginSupportPlugin by ComposeCompilerKotlinSupportPlugin() {
    override fun isApplicable(kotlinCompilation: KotlinCompilation<*>): Boolean {
        return when (kotlinCompilation.target.platformType) {
            KotlinPlatformType.native -> false
            else -> ComposeCompilerKotlinSupportPlugin().isApplicable(kotlinCompilation)
        }
    }
}

apply<ComposeNoNativePlugin>()
