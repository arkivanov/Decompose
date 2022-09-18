//
//  ListView.swift
//  app-ios
//
//  Created by Arkadii Ivanov on 13/05/2022.
//

import SwiftUI
import Shared

struct ArticleListView: View {
    private let component: ArticleList

    @ObservedObject
    private var observableModel: ObservableValue<ArticleListModel>

    private var model: ArticleListModel { observableModel.value }

    init(_ component: ArticleList) {
        self.component = component
        observableModel = ObservableValue(component.models)
    }

    var body: some View {
        List(model.articles, id: \.id) { article in
            Text(article.title)
                .padding()
                .frame(maxWidth: .infinity, alignment: .leading)
                .onTapGesture { component.onArticleClicked(id: article.id) }
                .listRowBackground(
                    article.id == model.selectedArticleId?.int64Value ? Color.accentColor : Color.clear)
                .listRowInsets(EdgeInsets())
        }.listStyle(PlainListStyle())
    }
}

struct ArticleListView_Previews: PreviewProvider {
    static var previews: some View {
        ArticleListView(ArticleListPreview())
    }
}

class ArticleListPreview: ArticleList {
    func onArticleClicked(id: Int64) { }

    var models: ReqValue<ArticleListModel> = value(
        ArticleListModel(
            articles: [
                ArticleListArticle(id: 1, title: "Test Title 1"),
                ArticleListArticle(id: 2, title: "Test Title 2"),
                ArticleListArticle(id: 3, title: "Test Title 3")
            ],
            selectedArticleId: 1
        )
    )
}
