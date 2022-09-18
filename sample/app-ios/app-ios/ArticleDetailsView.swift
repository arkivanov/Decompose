//
//  ArticleDetailsView.swift
//  app-ios
//
//  Created by Arkadii Ivanov on 13/05/2022.
//

import SwiftUI
import Shared

struct ArticleDetailsView: View {
    private let component: ArticleDetails
    
    @ObservedObject
    private var observableModel: ObservableValue<ArticleDetailsModel>
    
    private var model: ArticleDetailsModel { observableModel.value }
    
    init(_ component: ArticleDetails) {
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
        ArticleDetailsView(ArticleDetailsPreview())
    }
}

class ArticleDetailsPreview: ArticleDetails {
    func onCloseClicked() {}
    
    var models: ReqValue<ArticleDetailsModel> = value(
        ArticleDetailsModel(
            isToolbarVisible: false,
            article: ArticleDetailsArticle(
                title: "You can use this approach to create loops of any type. For example, this code ", text: "You can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each color name and color value:, u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each , u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each "
            )
        )
    )
}
