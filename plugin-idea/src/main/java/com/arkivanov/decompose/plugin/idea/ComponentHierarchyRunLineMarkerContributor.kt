package com.arkivanov.decompose.plugin.idea

import com.intellij.execution.lineMarker.RunLineMarkerContributor
import com.intellij.icons.AllIcons
import com.intellij.openapi.actionSystem.AnAction
import com.intellij.openapi.actionSystem.AnActionEvent
import com.intellij.openapi.wm.ToolWindowManager
import com.intellij.psi.PsiElement
import com.intellij.psi.impl.source.tree.LeafPsiElement
import org.jetbrains.kotlin.idea.base.psi.kotlinFqName
import org.jetbrains.kotlin.lexer.KtTokens
import javax.swing.JLabel

class ComponentHierarchyRunLineMarkerContributor : RunLineMarkerContributor() {

    override fun getInfo(element: PsiElement): Info? {
        if (element !is LeafPsiElement) {
            return null
        }

        if (element.node.elementType != KtTokens.CLASS_KEYWORD) {
            return null
        }

        return Info(
            AllIcons.Actions.ShowAsTree,
            { "Show component hierarchy" },
            ComponentHierarchyAction(element.psi.kotlinFqName?.asString()),
        )
    }
}

class ComponentHierarchyAction(
    private val className: String?,
) : AnAction() {

    override fun actionPerformed(event: AnActionEvent) {
        val project = event.project ?: return

        val toolWindow = ToolWindowManager.getInstance(project).getToolWindow("Decompose Component Hierarchy") ?: return
        toolWindow.isAvailable = true

        toolWindow.contentManager.apply {
            removeAllContents(true)

            addContent(
                factory.createContent(
                    JLabel("Hello $className"),
                    null,
                    false,
                )
            )
        }

        toolWindow.show()
    }
}
