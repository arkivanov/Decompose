//
//  DetailsView.swift
//  ios-app
//
//  Created by Nikola Milovic on 14/06/2021.
//

import SwiftUI
import MasterDetail

struct DetailsView: View {

    @ObservedObject
    private var model: ObservableValue<ArticleDetailsModel>

    private let component: ArticleDetails

    private let showToolbar: Bool

    init(_ component: ArticleDetails, showToolbar: Bool) {
        self.showToolbar = showToolbar
        self.component = component
        self.model = ObservableValue(component.models)
    }

    var body: some View {

        let articleText = model.value.article.text

        if showToolbar {
            NavigationView {
                VStack {
                    articleDetailView(text: articleText)
                }.navigationBarTitle(Text(model.value.article.title), displayMode: .inline).navigationBarItems(leading:
                        Image(systemName: "arrow.backward")
                        .aspectRatio(contentMode: .fit).imageScale(.large)
                        .foregroundColor(.blue).onTapGesture {
                        component.onCloseClicked() })
            }
        } else {
            articleDetailView(text: articleText)
        }
    }
}

func articleDetailView(text: String) -> some View {
    return ScrollView {
        Text(text).padding([.top, .leading, .trailing]).lineLimit(nil)
    }
}

struct DetailsView_Previews: PreviewProvider {
    static var previews: some View {
        DetailsView(StubArticleDetail(), showToolbar: true)
            .previewDevice("iPhone 8")
    }

    class StubArticleDetail: ArticleDetails {
        func onCloseClicked() { }

        var models: Value<ArticleDetailsModel> = valueOf(ArticleDetailsModel(
            isToolbarVisible: false,
            article: ArticleDetailsArticle(title: "You can use this approach to create loops of any type. For example, this code ", text: "You can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each color name and color value:, u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each , u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each ")))
    }

}
