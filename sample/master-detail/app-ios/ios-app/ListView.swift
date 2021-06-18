//
//  ListView.swift
//  ios-app
//
//  Created by Nikola Milovic on 13/06/2021.
//

import SwiftUI
import MasterDetail

struct ListView: View {

    @ObservedObject
    private var model: ObservableValue<ArticleListModel>

    private let component: ArticleList

    init(_ component: ArticleList) {
        self.model = ObservableValue(component.models)
        self.component = component
    }

    var body: some View {
        List(model.value.articles, id: \.self) { article in
            Text(article.title).padding().frame(maxWidth: .infinity, alignment: .leading).onTapGesture{
                component.onArticleClicked(id: article.id)
            }
        }.padding(.top)
    }
}

struct ListView_Previews: PreviewProvider {
    static var previews: some View {
        ListView(StubArticleList())
    }

    class StubArticleList: ArticleList {
        func onArticleClicked(id: Int64) { }

        var models: Value<ArticleListModel> = valueOf(ArticleListModel(articles:
            [ArticleListArticle(id: 1, title: "Test Title 1"),
            ArticleListArticle(id: 2, title: "Test Title 2"),
            ArticleListArticle(id: 3, title: "Test Title 3")], selectedArticleId: 1))
    }
}

