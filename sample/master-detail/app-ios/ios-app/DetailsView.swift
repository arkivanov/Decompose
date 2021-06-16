//
//  DetailsView.swift
//  ios-app
//
//  Created by Nikola Milovic on 14/06/2021.
//

import SwiftUI
import MasterDetail

struct DetailsView: View {

    var article: ArticleDetailsArticle

    var onCloseClicked: () -> Void

    var showToolbar: Bool

    var body: some View {
        if !showToolbar {
            ScrollView {
                Text(article.text).padding([.top, .leading, .trailing]).lineLimit(nil)
            }
        } else {
            NavigationView {
                VStack {
                    ScrollView {
                        Text(article.text).padding([.top, .leading, .trailing]).lineLimit(nil)
                    }
                }.navigationBarTitle(Text(article.title), displayMode: .inline).navigationBarItems(leading:
                        Image(systemName: "arrow.backward")
                        .aspectRatio(contentMode: .fit).imageScale(.large)
                        .foregroundColor(.blue).onTapGesture {
                        onCloseClicked()
                    })
            }
        }


    }
}

struct DetailsView_Previews: PreviewProvider {
    static var previews: some View {
        DetailsView(article: ArticleDetailsArticle(title: "You can use this approach to create loops of any type. For example, this code ", text: "You can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each color name and color value:, u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each , u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each u can use this approach to create loops of any type. For example, this code creates an array of three colors, loops over them all, and creates text views using each "), onCloseClicked: { }, showToolbar: true)
    }
}
