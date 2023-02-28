import SwiftUI
import Shared

struct CustomNavigationView: View {

    typealias Children = CustomNavigationComponentChildren<AnyObject, KittenComponent>

    private let component: CustomNavigationComponent

    @ObservedObject
    private var observableChildren: ObservableValue<Children>

    private var mode: CustomNavigationComponentMode {
        observableChildren.value.mode
    }

    init(_ component: CustomNavigationComponent) {
        self.component = component
        observableChildren = ObservableValue(component.children)
    }

    var body: some View {
        ZStack {
            ChildItems(component, observableChildren.value)
            VStack {
                Spacer()
                Buttons(component, mode).padding()
            }
        }
    }
}

extension CustomNavigationView {

    struct ChildItems: View {
        private let component: CustomNavigationComponent
        private let children: Children

        init(_ component: CustomNavigationComponent, _ children: Children) {
            self.component = component
            self.children = children
        }

        @ViewBuilder
        var body: some View {
            GeometryReader { proxy in
                ForEach(Array(children.items.enumerated()), id: \.element) { (index, item) in
                    KittenView(item.instance, children.mode == .carousel ? .small : .large)
                            .modifier(KittenModifier(
                                    mode: children.mode,
                                    childCount: children.items.count,
                                    activeIndex: Int(children.index),
                                    childIndex: index,
                                    screenSize: proxy.size
                            ))
                }
            }
        }
    }

    struct Buttons: View {
        private let component: CustomNavigationComponent
        private let mode: CustomNavigationComponentMode

        init(_ component: CustomNavigationComponent, _ mode: CustomNavigationComponentMode) {
            self.component = component
            self.mode = mode
        }

        var body: some View {
            HStack(spacing: 16) {
                Spacer()
                if mode == .carousel {
                    Button(action: component.onSwitchToPagerClicked) {
                        Text("Pager")
                    }
                            .buttonStyle(.borderedProminent)
                }
                if mode == .pager {
                    Button(action: component.onSwitchToCarouselClicked) {
                        Text("Carousel")
                    }
                            .buttonStyle(.borderedProminent)
                }
                Button(action: component.onBackwardClicked) {
                    Text("Back")
                }
                        .buttonStyle(.borderedProminent)
                Button(action: component.onForwardClicked) {
                    Text("Fwd")
                }
                        .buttonStyle(.borderedProminent)
                if mode == .carousel {
                    Button(action: component.onShuffleClicked) {
                        Text("Shuffle")
                    }
                            .buttonStyle(.borderedProminent)
                }
                Spacer()
            }
        }
    }

    struct KittenModifier: ViewModifier {
        let mode: CustomNavigationComponentMode
        let childCount: Int
        let activeIndex: Int
        let childIndex: Int
        let screenSize: CGSize

        private var centerIndex: Int {
            childCount / 2
        }

        private var tileSize: CGFloat {
            activeIndex == childIndex ? 80 : 70
        }

        private var frameSize: CGSize {
            mode == .carousel ? CGSize(width: tileSize, height: tileSize) : screenSize
        }

        private var virtualIndex: Int {
            if activeIndex < centerIndex {
                return (childIndex + centerIndex - activeIndex) % childCount
            }
            if activeIndex > centerIndex {
                return (childIndex - (activeIndex - centerIndex) + childCount) % childCount
            }
            return childIndex
        }

        private var offsetSize: CGSize {
            switch mode {
            case .carousel:
                let angle = Angle.degrees(360.0 * Double(childIndex - activeIndex) / Double(childCount))
                let constraintSize = min(screenSize.width, screenSize.height)
                let x = sin(angle.radians) * constraintSize / 3.0
                let y = -cos(angle.radians) * constraintSize / 3.0
                return CGSize(width: screenSize.width / 2 - tileSize / 2 + x, height: screenSize.height / 2 - tileSize / 2 + y)
            case .pager:
                let offsetX = virtualIndex > centerIndex
                        ? screenSize.width
                        : (virtualIndex < centerIndex ? -screenSize.width : 0)
                return CGSize(width: offsetX, height: 0)
            default:
                return CGSize(width: 0, height: 0)
            }
        }

        private var opacity: CGFloat {
            (centerIndex - 1)...(centerIndex + 1) ~= virtualIndex || mode == .carousel ? 1.0 : 0.0
        }

        func body(content: Content) -> some View {
            content
                    .frame(width: frameSize.width, height: frameSize.height)
                    .clipped()
                    .cornerRadius(mode == .carousel ? 16 : 0)
                    .opacity(opacity)
                    .animation(nil, value: opacity)
                    .offset(offsetSize)
                    .animation(.easeInOut, value: mode)
                    .animation(.easeInOut, value: virtualIndex)
        }
    }
}
