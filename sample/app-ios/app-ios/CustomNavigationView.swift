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
        private var mode: CustomNavigationComponentMode {
            children.mode
        }
        private var childCount: Int {
            children.items.count
        }
        private var centerIndex: Int {
            childCount / 2
        }
        private var activeIndex: Int {
            Int(children.index)
        }

        init(_ component: CustomNavigationComponent, _ children: Children) {
            self.component = component
            self.children = children
        }

        @ViewBuilder
        var body: some View {
            GeometryReader { proxy in
                switch (mode) {
                case .pager:
                    ForEach(0..<children.items.count) { index in
                        let virtualIndex = getVirtualIndex(childIndex: index)
                        let offsetX = virtualIndex > centerIndex
                                ? proxy.size.width
                                : (virtualIndex < centerIndex ? -proxy.size.width : 0)
                        let opacity = (centerIndex - 1)...(centerIndex + 1) ~= virtualIndex ? 1.0 : 0.0
                        KittenView(children.items[index].instance)
                                .frame(width: proxy.size.width, height: proxy.size.height)
                                .clipped()
                                .opacity(opacity)
                                .animation(nil, value: opacity)
                                .offset(x: offsetX)
                                .animation(.easeInOut, value: virtualIndex)
                    }
                case .carousel:
                    ForEach(0..<children.items.count) { index in
                        let virtualIndex = getVirtualIndex(childIndex: index)
                        let angle = Angle.degrees(360.0 * Double(index - activeIndex) / Double(childCount))
                        let constraintSize = min(proxy.size.width, proxy.size.height)
                        let tileSize = 70.0
                        let x = sin(angle.radians) * constraintSize / 3.0
                        let y = -cos(angle.radians) * constraintSize / 3.0
                        KittenView(children.items[index].instance)
                                .frame(width: tileSize, height: tileSize)
                                .clipped()
                                .offset(x: proxy.size.width / 2 - tileSize / 2 + x, y: proxy.size.height / 2 - tileSize / 2 + y)
                                .animation(.easeInOut, value: virtualIndex)
                    }
                default:
                    EmptyView()
                }
            }
        }

        private func getVirtualIndex(childIndex: Int) -> Int {
            if children.index < centerIndex {
                return (childIndex + centerIndex - activeIndex) % childCount
            }
            if children.index > centerIndex {
                return (childIndex - (activeIndex - centerIndex) + childCount) % childCount
            }
            return childIndex
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
}
