//
//  ListView.swift
//  ios-app
//
//  Created by Nikola Milovic on 13/06/2021.
//

import SwiftUI
import MasterDetail

struct ListView: View {

    var items: [MasterDetail.ArticleListArticle]

    var onArticleClicked: (_ id: Int64) -> Void

    var body: some View {
        List(items, id: \.self) { article in
            Text(article.title).padding().frame(maxWidth: .infinity, alignment: .leading).onTapGesture {
                onArticleClicked(article.id)
            }
        }.padding(.top)
    }
}

struct ListView_Previews: PreviewProvider {
    static var previews: some View {
        ListView(
            items: [ArticleListArticle(id: 1, title: "123"),
                ArticleListArticle(id: 2, title: "1234"),
                ArticleListArticle(id: 3, title: "12345")],
            onArticleClicked: { _ in }
        )
    }
}

