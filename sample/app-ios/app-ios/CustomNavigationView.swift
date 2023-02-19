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

        private var centerIndex: Int {
            children.items.count / 2
        }

        init(_ component: CustomNavigationComponent, _ children: Children) {
            self.component = component
            self.children = children
        }

        var body: some View {
            GeometryReader { proxy in
                switch (mode) {
                case .pager:
                    ZStack {
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
                    }
                case .carousel:
                    EmptyView()
                default:
                    EmptyView()
                }
            }
        }

        private func getVirtualIndex(childIndex: Int) -> Int {
            let childCount = children.items.count
            if children.index < centerIndex {
                return (childIndex + centerIndex - Int(children.index)) % childCount
            }
            if children.index > centerIndex {
                return (childIndex - (Int(children.index) - centerIndex) + childCount) % childCount
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
                    }.buttonStyle(.borderedProminent)
                }
                if mode == .pager {
                    Button(action: component.onSwitchToCarouselClicked) {
                        Text("Carousel")
                    }.buttonStyle(.borderedProminent)
                }
                Button(action: component.onBackwardClicked) {
                    Text("Back")
                }.buttonStyle(.borderedProminent)
                Button(action: component.onForwardClicked) {
                    Text("Fwd")
                }.buttonStyle(.borderedProminent)
                if mode == .carousel {
                    Button(action: component.onShuffleClicked) {
                        Text("Shuffle")
                    }.buttonStyle(.borderedProminent)
                }
                Spacer()
            }
        }
    }
}
