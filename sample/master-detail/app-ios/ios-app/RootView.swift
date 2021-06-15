//
//  RootView.swift
//  ios-app
//
//  Created by Nikola Milovic on 12/06/2021.
//

import SwiftUI
import MasterDetail

struct RootView: View {
    @ObservedObject
    private var masterRoot: ObservableValue<MasterDetail.Root>

    @ObservedObject
    private var listRouterState: ObservableValue<RouterState<AnyObject, MasterDetail.RootListChild>>

    @ObservedObject
    private var detailRouterState: ObservableValue<RouterState<AnyObject, MasterDetail.RootDetailsChild>>

    init(_ masterRoot: MasterDetail.Root) {
        self.masterRoot = ObservableValue(valueOf(masterRoot))
        self.listRouterState = ObservableValue(masterRoot.listRouterState)
        self.detailRouterState = ObservableValue(masterRoot.detailsRouterState)
    }


    var body: some View {
        let listChild = listRouterState.value.activeChild.instance

        let detailChild = detailRouterState.value.activeChild.instance

        ZStack(alignment: .top) {
            switch listChild {
                case let list as MasterDetail.RootListChild.List:
                    ListView(items: list.component.models.value.articles,
                             onArticleClicked: list.component.onArticleClicked)
                default: EmptyView()
            }

            switch detailChild {
                case let detail as MasterDetail.RootDetailsChild.Details: DetailsView(article: detail.component.models.value.article,
                                                                                      onCloseClicked: detail.component.onCloseClicked)
                default: EmptyView()
            }

        }
    }
}

struct RootView_Previews: PreviewProvider {
    static var previews: some View {
        RootView(RootViewPreview())
    }

    class RootViewPreview: MasterDetail.Root {

        func setMultiPane(isMultiPane: Bool) {

        }

        var detailsRouterState: Value<RouterState<AnyObject, RootDetailsChild>> = simpleRouterState(RootDetailsChild.None())

        var listRouterState: Value<RouterState<AnyObject, RootListChild>> = simpleRouterState(RootListChild.List(component:
                StubArticleList()
            ))

        var models: Value<RootModel> = Value<RootModel>.init()


    }

    class StubArticleList: ArticleList {
        func onArticleClicked(id: Int64) {

        }

        let models: Value<ArticleListModel> = valueOf(ArticleListModel(
            articles:
                [ArticleListArticle(id: 1, title: "123"),
                 ArticleListArticle(id: 2, title: "1234"),
                 ArticleListArticle(id: 3, title: "12345")],
            selectedArticleId: 123))

    }
}
