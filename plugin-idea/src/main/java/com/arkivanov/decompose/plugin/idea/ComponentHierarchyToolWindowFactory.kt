package com.arkivanov.decompose.plugin.idea

import com.intellij.icons.AllIcons
import com.intellij.openapi.project.DumbAware
import com.intellij.openapi.project.Project
import com.intellij.openapi.wm.ToolWindow
import com.intellij.openapi.wm.ToolWindowFactory
import javax.swing.JLabel

class ComponentHierarchyToolWindowFactory : ToolWindowFactory, DumbAware {

    override fun init(toolWindow: ToolWindow) {
        toolWindow.setIcon(AllIcons.Actions.ShowAsTree)
    }

    override fun shouldBeAvailable(project: Project): Boolean =
        false

    override fun createToolWindowContent(project: Project, toolWindow: ToolWindow) {
//        val contentManager = toolWindow.contentManager
//
//        println("MyTest: createToolWindowContent")
//        contentManager.addContent(
//            contentManager.factory.createContent(
//                JLabel("Hello!"),
//                null,
//                false
//            )
//        )
    }
}
