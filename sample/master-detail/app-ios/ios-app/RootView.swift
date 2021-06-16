//
//  RootView.swift
//  ios-app
//
//  Created by Nikola Milovic on 12/06/2021.
//

import SwiftUI
import MasterDetail

let ListPaneScreenWidthPerc = CGFloat(0.4)
let DetailsPaneScreenWidthPerc = CGFloat(0.6)

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

        if isIOS() {
            print("is Ios")
            masterRoot.setMultiPane(isMultiPane: false)
        } else {
            print("Ipad")
            masterRoot.setMultiPane(isMultiPane: true)
        }
    }


    var body: some View {
        ZStack(alignment: .top) {
            ListPane(router: listRouterState.value, isMultiPane: masterRoot.value.models.value.isMultiPane)
            DetailsPane(router: detailRouterState.value, isMultiPane: masterRoot.value.models.value.isMultiPane)
        }

    }
}


struct ListPane: View {

    let listChild: MasterDetail.RootListChild
    let isMultiPane: Bool

    init(router: RouterState<AnyObject, MasterDetail.RootListChild>, isMultiPane: Bool) {
        self.listChild = router.activeChild.instance
        self.isMultiPane = isMultiPane
    }

    //Wrapping the views in AnyView allows this kind of syntax
    var body: some View {
        switch listChild {
        case let list as MasterDetail.RootListChild.List:
            GeometryReader { metrics in HStack {
                ListView(items: list.component.models.value.articles,
                    onArticleClicked: list.component.onArticleClicked).frame(width: isMultiPane ? metrics.size.width * ListPaneScreenWidthPerc : metrics.size.width)

                if isMultiPane {
                    Spacer().frame(width: metrics.size.width * DetailsPaneScreenWidthPerc)
                }
            }
            }

        default: EmptyView()
        }
    }
}

struct DetailsPane: View {

    let detailChild: MasterDetail.RootDetailsChild
    let isMultiPane: Bool

    init(router: RouterState<AnyObject, MasterDetail.RootDetailsChild>, isMultiPane: Bool) {
        self.detailChild = router.activeChild.instance
        self.isMultiPane = isMultiPane
    }

    var body: some View {
        switch detailChild {
        case let detail as MasterDetail.RootDetailsChild.Details:
            GeometryReader { metrics in HStack {

                if isMultiPane {
                    Spacer().frame(width: metrics.size.width * ListPaneScreenWidthPerc)
                }
                DetailsView(article: detail.component.models.value.article,
                    onCloseClicked: detail.component.onCloseClicked,
                    showToolbar: !isMultiPane
                ).frame(width: isMultiPane ? metrics.size.width * DetailsPaneScreenWidthPerc : metrics.size.width)

            } }

        default: EmptyView()
        }
    }
}

func isIOS() -> Bool {
    if UIDevice.current.userInterfaceIdiom == .pad {
        return false
    } else {
        return true
    }
}

struct RootView_Previews: PreviewProvider {
    static var previews: some View {
        RootView(RootViewPreview())
            .previewDevice("iPad (8th generation)")
    }

    class RootViewPreview: MasterDetail.Root {

        func setMultiPane(isMultiPane: Bool) { }

        var detailsRouterState: Value<RouterState<AnyObject, RootDetailsChild>> = simpleRouterState(RootDetailsChild.None())

        var listRouterState: Value<RouterState<AnyObject, RootListChild>> = simpleRouterState(RootListChild.List(component:
                StubArticleList()
            ))

        var models: Value<RootModel> = valueOf(RootModel(isMultiPane: false))

    }

    class StubArticleList: ArticleList {
        func onArticleClicked(id: Int64) { }

        let models: Value<ArticleListModel> = valueOf(ArticleListModel(
            articles:
                [ArticleListArticle(id: 1, title: "123"),
                ArticleListArticle(id: 2, title: "1234"),
                ArticleListArticle(id: 3, title: "12345")],
            selectedArticleId: 123))

    }
}
