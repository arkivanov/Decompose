//
//  RootView.swift
//  iosApp
//
//  Created by Nikola Milovic on 12/06/2021.
//

import SwiftUI
import MasterDetail

struct RootView: View {
    @ObservedObject
    private var masterRoot: ObservableValue<MasterDetail.Root>

    init(_ masterRoot: MasterDetail.Root) {
        self.masterRoot = ObservableValue(valueOf(masterRoot))
    }


    var body: some View {
        let listChild = self.masterRoot.value.listRouterState.value.activeChild.instance

        let detailChild = self.masterRoot.value.detailsRouterState.value.activeChild.instance
        // Print(listChild)
        ZStack(alignment: .top) {
            switch listChild {
            case let list as MasterDetail.RootListChild.List:
                ListView(list.component)
            default: EmptyView()
            }

            switch detailChild {
            case let detail as MasterDetail.RootDetailsChild.Details: DetailsView(detail.component)
            default: EmptyView()
            }

        }
    }
}

extension View {
    func Print(_ vars: Any...) -> some View {
        for v in vars { print(v) }
        return EmptyView()
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

        var listRouterState: Value<RouterState<AnyObject, RootListChild>> = simpleRouterState(RootListChild.List(component: ListView_Previews.ArticlesList()))

        var models: Value<RootModel> = Value<RootModel>.init()


    }
}
