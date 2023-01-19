package com.arkivanov.sample.shared.dialog

import com.arkivanov.sample.shared.RProps
import mui.material.Button
import mui.material.Dialog
import mui.material.DialogActions
import mui.material.DialogContent
import mui.material.DialogContentText
import mui.material.DialogTitle
import react.FC
import react.dom.aria.ariaDescribedBy
import react.dom.aria.ariaLabelledBy

var DialogComponentContent: FC<RProps<DialogComponent>> = FC { props ->
    Dialog {
        open = true
        onClose = { _, _ -> props.component.onDismissClicked() }
        ariaLabelledBy = "dialog-title"
        ariaDescribedBy = "dialog-message"

        DialogTitle {
            this.asDynamic().id = "dialog-title"
            +props.component.title
        }

        DialogContent {
            DialogContentText {
                this.asDynamic().id = "dialog-message"
                +props.component.message
            }
        }

        DialogActions {
            Button {
                onClick = { props.component.onDismissClicked() }
                +"Close"
            }
        }
    }
}
