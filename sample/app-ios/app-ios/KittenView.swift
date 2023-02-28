import SwiftUI
import Shared

struct KittenView: View {
    
    private let component: KittenComponent
    private let kittenSize: KittenSize

    @ObservedObject
    private var model: ObservableValue<KittenComponentModel>

    private var imageName: String {
        switch model.value.imageType {
        case .cat1: return "cat1"
        case .cat2: return "cat2"
        case .cat3: return "cat3"
        case .cat4: return "cat4"
        case .cat5: return "cat5"
        default: return ""
        }
    }

    private var fontSize: CGFloat {
        switch kittenSize {
        case .large: return 16
        case .small: return 10
        }
    }
    
    init(_ component: KittenComponent, _ kittenSize: KittenSize) {
        self.component = component
        self.kittenSize = kittenSize
        model = ObservableValue(component.model)
    }

    var body: some View {
        ZStack {
            Image(imageName)
                    .resizable()
                    .aspectRatio(contentMode: .fill)
            VStack {
                Text(model.value.text)
                        .padding(8)
                        .frame(maxWidth: .infinity)
                        .background(LinearGradient(
                                colors: [.black.opacity(0.75), .clear],
                                startPoint: .top,
                                endPoint: .bottom
                        ))
                        .foregroundColor(.white)
                        .modifier(AnimatableFontModifier(size: fontSize))
                Spacer()
            }
        }
    }
}

enum KittenSize {
    case large, small
}

private struct AnimatableFontModifier: AnimatableModifier {
    var size: CGFloat

    var animatableData: CGFloat {
        get { size }
        set { size = newValue }
    }

    func body(content: Content) -> some View {
        content.font(.system(size: size))
    }
}

struct KittenView_Previews: PreviewProvider {
    static var previews: some View {
        KittenView(PreviewKittenComponent(), .large)
    }
}

class PreviewKittenComponent: KittenComponent {
    var model: Value<KittenComponentModel> = mutableValue(KittenComponentModel(imageType: .cat1, text: "000"))
}

