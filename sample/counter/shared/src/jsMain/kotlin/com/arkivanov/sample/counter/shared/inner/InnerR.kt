package com.arkivanov.sample.counter.shared.inner

import com.arkivanov.sample.counter.shared.RProps
import com.arkivanov.sample.counter.shared.counter.CounterR
import com.arkivanov.sample.counter.shared.uniqueKey
import com.arkivanov.sample.counter.shared.useAsState
import csstype.BoxSizing
import csstype.JustifyContent
import csstype.pct
import csstype.px
import mui.material.Button
import mui.material.ButtonColor
import mui.material.ButtonVariant
import mui.material.Paper
import mui.material.PaperVariant
import mui.material.Stack
import mui.material.StackDirection
import mui.system.ResponsiveStyleValue
import mui.system.sx
import react.FC
import react.Props
import react.key

val InnerR: FC<RProps<CounterInner>> = FC { props ->
    val leftRouterState by props.component.leftRouterState.useAsState()
    val rightRouterState by props.component.rightRouterState.useAsState()

    Paper {
        variant = PaperVariant.outlined
        sx = props.sx

        Stack {
            direction = ResponsiveStyleValue(StackDirection.column)
            spacing = ResponsiveStyleValue(2)

            sx {
                boxSizing = BoxSizing.borderBox
                width = 100.pct
                padding = 16.px
            }

            CounterR {
                component = props.component.counter
                key = component.uniqueKey()

                sx {
                    width = 100.pct
                }
            }

            Stack {
                direction = ResponsiveStyleValue(StackDirection.row)
                spacing = ResponsiveStyleValue(2)

                sx {
                    justifyContent = JustifyContent.center
                    width = 100.pct
                }

                ChildItem {
                    child = leftRouterState.activeChild.instance
                    onNext = props.component::onNextLeftChild
                    onPrev = props.component::onPrevLeftChild
                }

                ChildItem {
                    child = rightRouterState.activeChild.instance
                    onNext = props.component::onNextRightChild
                    onPrev = props.component::onPrevRightChild
                }
            }
        }
    }
}

external interface ChildItemProps : Props {
    var child: CounterInner.Child
    var onNext: () -> Unit
    var onPrev: () -> Unit
}

private val ChildItem: FC<ChildItemProps> = FC { props ->
    Stack {
        direction = ResponsiveStyleValue(StackDirection.column)
        spacing = ResponsiveStyleValue(2)

        Button {
            variant = ButtonVariant.contained
            color = ButtonColor.primary
            onClick = { props.onNext() }

            +"Next counter"
        }

        Button {
            variant = ButtonVariant.contained
            disabled = !props.child.isBackEnabled
            onClick = { props.onPrev() }

            +"Prev counter"
        }

        CounterR {
            component = props.child.counter
            key = component.uniqueKey()
        }
    }
}
