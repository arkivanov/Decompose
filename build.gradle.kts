import com.arkivanov.gradle.*
import groovy.json.JsonSlurper
import java.net.HttpURLConnection
import java.net.URL

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

private val sonatypeBaseUrl = "https://ossrh-staging-api.central.sonatype.com"

tasks.register("dropOpenSonatypeRepositories") {
    getOpenSonatypeRepositoryKeys().forEach { key ->
        requestDelete("/manual/drop/repository/$key")
    }
}

tasks.register("closeSonatypeRespositories") {
    getOpenSonatypeRepositoryKeys().forEach { key ->
        requestPost("/manual/upload/repository/$key")
    }
}

fun getOpenSonatypeRepositoryKeys(): List<String> {
    val jsonBytes = requestGet("/manual/search/repositories?ip=any&profile_id=com.arkivanov.decompose")
    val json = JsonSlurper().parse(jsonBytes) as Map<*, *>
    val repositories = json["repositories"] as List<*>

    return repositories.filterIsInstance<Map<*, *>>()
        .filter { it["state"] == "open" }
        .map { it["key"] as String }
}

fun requestGet(url: String): ByteArray =
    startRequest(url = url, method = "GET").inputStream.readAllBytes()

fun requestDelete(url: String) {
    startRequest(url = url, method = "DELETE")
}

fun requestPost(url: String) {
    startRequest(url = url, method = "POST")
}

fun startRequest(url: String, method: String): HttpURLConnection {
    val connection = URL("$sonatypeBaseUrl$url").openConnection() as HttpURLConnection
    connection.setRequestProperty("Authorization", "Bearer ${System.getenv("SONATYPE_AUTH_BASE64")}")
    connection.requestMethod = method
    check(connection.responseCode in 200..299) { "Invalid response code: ${connection.responseCode}" }

    return connection
}
