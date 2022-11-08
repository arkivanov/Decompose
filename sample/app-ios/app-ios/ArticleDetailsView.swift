//
//  ArticleDetailsView.swift
//  app-ios
//
//  Created by Arkadii Ivanov on 13/05/2022.
//

import SwiftUI
import Shared

struct ArticleDetailsView: View {
    private let component: ArticleDetailsComponent
    
    @ObservedObject
    private var observableModel: ObservableValue<ArticleDetailsComponentModel>
    
    private var model: ArticleDetailsComponentModel { observableModel.value }
    
    init(_ component: ArticleDetailsComponent) {
        self.component = component
        observableModel = ObservableValue(component.models)
    }
    
    var body: some View {
        if model.isToolbarVisible {
            NavigationView {
                VStack {
                    DetailsTextView(text: model.article.text)
                }.navigationBarTitle(
                    Text(model.article.title),
                    displayMode: .inline
                ).navigationBarItems(
                    leading: Image(systemName: "arrow.backward")
                        .aspectRatio(contentMode: .fit)
                        .imageScale(.large)
                        .foregroundColor(.blue)
                        .onTapGesture { component.onCloseClicked() }
                )
            }
        } else {
            DetailsTextView(text: model.article.text)
        }
    }
}

struct DetailsTextView: View {
    let text: String
    
    var body: some View {
        ScrollView([.vertical]) {
            Text(text)
                .padding([.top, .leading, .trailing])
                .lineLimit(nil)
        }
    }
}

struct DetailsView_Previews: PreviewProvider {
    static var previews: some View {
        ArticleDetailsView(PreviewArticleDetailsComponent())
    }
}

class PreviewArticleDetailsComponent: ArticleDetailsComponent {
    func onCloseClicked() {}
    
    var models: Value<ArticleDetailsComponentModel> = mutableValue(
        ArticleDetailsComponentModel(
            isToolbarVisible: false,
            article: ArticleDetailsComponentArticle(
                title: "You can use this approach to create loops of any type. For example, this code ", text: "You can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each color name and color value:, u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each , u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each "
            )
        )
    )
}
