package com.arkivanov.sample.app

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.compose.ui.window.Application
import com.arkivanov.decompose.DefaultComponentContext
import com.arkivanov.essenty.lifecycle.LifecycleRegistry
import com.arkivanov.essenty.lifecycle.destroy
import com.arkivanov.essenty.lifecycle.resume
import com.arkivanov.essenty.lifecycle.stop
import com.arkivanov.sample.shared.dynamicfeatures.dynamicfeature.DefaultFeatureInstaller
import com.arkivanov.sample.shared.root.RootComponent
import com.arkivanov.sample.shared.root.RootContent
import kotlinx.cinterop.*
import platform.UIKit.*
import platform.Foundation.*

fun main() {
    val args = emptyArray<String>()
    memScoped {
        val argc = args.size + 1
        val argv = (arrayOf("skikoApp") + args).map { it.cstr.ptr }.toCValues()
        autoreleasepool {
            UIApplicationMain(argc, argv, null, NSStringFromClass(SkikoAppDelegate))
        }
    }
}

class SkikoAppDelegate : UIResponder, UIApplicationDelegateProtocol {
    companion object : UIResponderMeta(), UIApplicationDelegateProtocolMeta

    @ObjCObjectBase.OverrideInit
    constructor() : super()

    private val lifecycle = LifecycleRegistry()

    private val root =
        RootComponent(
            componentContext = DefaultComponentContext(lifecycle = lifecycle),
            featureInstaller = DefaultFeatureInstaller,
        )

    private var _window: UIWindow? = null
    override fun window() = _window
    override fun setWindow(window: UIWindow?) {
        _window = window
    }

    override fun application(application: UIApplication, didFinishLaunchingWithOptions: Map<Any?, *>?): Boolean {
        window = UIWindow(frame = UIScreen.mainScreen.bounds)
        window!!.rootViewController = Application("Minesweeper") {
            Column {
                // To skip upper part of screen.
                Box(modifier = Modifier
                    .height(100.dp))

                RootContent(
                    root = root,
                    modifier = Modifier.weight(1F).fillMaxWidth(),
                )
            }
        }
        window!!.makeKeyAndVisible()
        return true
    }

    override fun applicationDidBecomeActive(application: UIApplication) {
        lifecycle.resume()
    }

    override fun applicationWillResignActive(application: UIApplication) {
        lifecycle.stop()

    }

    override fun applicationWillTerminate(application: UIApplication) {
        lifecycle.destroy()
    }
}
