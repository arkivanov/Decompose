import SwiftUI
import Shared

struct MenuView: View {
    private let component: MenuComponent
    
    init(_ component: MenuComponent) {
        self.component = component
    }
    
    var body: some View {
        VStack {
            Button(action: component.onCustomNavigationItemSelected) {
                Text("Custom Navigation")
            }
        }
    }
}

struct MenuView_Previews: PreviewProvider {
    static var previews: some View {
        MenuView(PreviewMenuComponent())
    }
}
