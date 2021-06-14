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
    var model: ObservableValue<MasterDetail.ArticleListModel>
    
    var component : MasterDetail.ArticleList
    
    init(_ articleList: MasterDetail.ArticleList) {
        self.model = ObservableValue(articleList.models)
        self.component = articleList
    }

    var body: some View {
        List {
        VStack{
            ForEach(model.value.articles, id: \.self) { article in
                ListItem(article.title).onTapGesture {
                    component.onArticleClicked(id: article.id)
                    Print(article.id)
                }
            }
        }
        }.frame(minHeight:0, maxHeight: .infinity, alignment : .top)
    }
}

struct ListItem : View {
    
    var title : String
    var id : Int64
    
    init(_ title : String) {
        self.title = title
        id = 10
    }
    
    var body : some View {
        Text(title).padding().frame(maxWidth: .infinity, alignment: .leading)
        Divider()
    }
    
}

struct ListView_Previews: PreviewProvider {
    static var previews: some View {
        ListView(
               ArticlesList()
        )
    }
    //
    class ArticlesList: ArticleList {
        func onArticleClicked(id: Int64) -> Void{
    
        }
    
        let models: Value<MasterDetail.ArticleListModel> = valueOf(ArticleListModel(articles:
            [
                    ArticleListArticle(id: 1, title: "123"),
                    ArticleListArticle(id: 2, title: "1234"),
                    ArticleListArticle(id: 3, title: "12345")
                ], selectedArticleId: 123)
    
        )
    }
 
}


//     model : valueOf(
//ArticleListModel(
//    articles: [
//        ArticleListArticle(id: 1, title: "123"),
//        ArticleListArticle(id: 2, title: "1234"),
//        ArticleListArticle(id: 3, title: "12345")
//    ],
//    selectedArticleId: 123
//)
//) , onArticleClicked: {_ in }
//
//
