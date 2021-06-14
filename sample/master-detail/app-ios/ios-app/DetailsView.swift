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
    private var model: ObservableValue<MasterDetail.ArticleDetailsModel>

    init(_ detail: MasterDetail.ArticleDetails) {
        self.model = ObservableValue(detail.models)
    }

    var body: some View {
        VStack{
            ActionBar(model.value.article.title)
            Divider()
            ScrollView {
                Text(model.value.article.text).padding([.top, .leading, .trailing]).lineLimit(nil)
            }
        }.frame(minHeight:0, maxHeight: .infinity, alignment : .top)
    }
}

struct ActionBar : View {
    
    var title : String
    
    init(_ text : String) {
        self.title = text
    }
    
    var body : some View {
        HStack {
        Button(action: {
        
         }) {
        
             Image(systemName: "arrow.backward") // set image here
                .aspectRatio(contentMode: .fit).imageScale(.large)
                 .foregroundColor(.blue)
            
             
        }
            Text(title).lineLimit(1).font(.title2)
            
            Spacer()
        }.padding([.leading, .bottom, .trailing]) .frame(width: .infinity, alignment: .leading)
    }
}

struct DetailsView_Previews: PreviewProvider {
    static var previews: some View {
        DetailsView(ArticleDetail())
    }

    class ArticleDetail: ArticleDetails {
        func onCloseClicked() {

        }

        let models: Value<ArticleDetailsModel> = valueOf(
            ArticleDetailsModel(isToolbarVisible: true, article: ArticleDetailsArticle(title: "You can use this approach to create loops of any type. For example, this code ", text: "You can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each color name and color value:, u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each , u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each "))
        )

    }
}
