import SwiftUI
import Shared

struct KittenView: View {
    
    private let component: KittenComponent

    @ObservedObject
    private var model: ObservableValue<KittenComponentModel>

    private var imageName: String {
        switch (model.value.imageType) {
        case .cat1: return "cat1"
        case .cat2: return "cat2"
        case .cat3: return "cat3"
        case .cat4: return "cat4"
        case .cat5: return "cat5"
        default: return ""
        }
    }
    
    init(_ component: KittenComponent) {
        self.component = component
        model = ObservableValue(component.model)
    }

    var body: some View {
        ZStack {
            Image(imageName)
                    .resizable()
                    .aspectRatio(contentMode: .fill)
            VStack {
                Text(model.value.text)
                        .foregroundColor(.white)
                        .minimumScaleFactor(0.05)
                Spacer()
            }
        }
    }
}

struct KittenView_Previews: PreviewProvider {
    static var previews: some View {
        KittenView(PreviewKittenComponent())
    }
}

class PreviewKittenComponent: KittenComponent {
    var model: Value<KittenComponentModel> = mutableValue(KittenComponentModel(imageType: .cat1, text: "000"))
}

