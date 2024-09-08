//
//  MultiPaneView.swift
//  app-ios
//
//  Created by Arkadii Ivanov on 13/05/2022.
//

import SwiftUI
import Shared

private let listPaneWeight = CGFloat(0.3)
private let detailsPaneWeight = CGFloat(0.4)
private let authorPaneWeight = CGFloat(0.3)

struct MultiPaneView: View {
    private let component: MultiPaneComponent
    
    @StateValue
    private var panels: ChildPanels<AnyObject, ArticleListComponent, AnyObject, ArticleDetailsComponent, AnyObject, ArticleAuthorComponent>
    
    private var mode: ChildPanelsMode { panels.mode }
    private var listComponent: ArticleListComponent { panels.main.instance }
    private var detailsComponent: ArticleDetailsComponent? { panels.details?.instance }
    private var authorComponent: ArticleAuthorComponent? { panels.extra?.instance }
    
    init(_ component: MultiPaneComponent) {
        self.component = component
        _panels = StateValue(component.panels)
    }
    
    var body: some View {
        ZStack(alignment: .top) {
            ListPane(
                listComponent: listComponent,
                mode: mode,
                isVisible: (mode != .single) || (detailsComponent == nil)
            )
            
            DetailsPane(
                detailsComponent: detailsComponent,
                mode: mode
            )
            
            AuthorPane(
                authorComponent: authorComponent,
                mode: mode
            )
        }
        .onAppear { component.setMode(mode: requiredMode()) }
        .onReceive(NotificationCenter.default.publisher(for: UIDevice.orientationDidChangeNotification)) { _ in
            component.setMode(mode: requiredMode())
        }
    }
}

struct ListPane: View {
    let listComponent: ArticleListComponent
    let mode: ChildPanelsMode
    let isVisible: Bool
    
    var body: some View {
        GeometryReader { metrics in
            HStack {
                ArticleListView(listComponent)
                    .frame(width: mode == .single ? metrics.size.width : metrics.size.width * listPaneWeight)
                
                if (mode != .single) {
                    Spacer().frame(width: metrics.size.width * (detailsPaneWeight + authorPaneWeight))
                }
            }
        }.opacity(isVisible ? 1 : 0)
    }
}

struct DetailsPane: View {
    let detailsComponent: ArticleDetailsComponent?
    let mode: ChildPanelsMode
    
    var body: some View {
        if (detailsComponent != nil) {
            GeometryReader { metrics in
                HStack {
                    if (mode != .single) {
                        Spacer().frame(width: metrics.size.width * listPaneWeight)
                    }
                    
                    let width = switch mode {
                        case .single: metrics.size.width
                        case .dual: metrics.size.width * (detailsPaneWeight + authorPaneWeight)
                        case .triple: metrics.size.width * detailsPaneWeight
                        default: metrics.size.width
                    }
                    
                    ArticleDetailsView(detailsComponent!)
                        .frame(width: width)
                        .background(.background)
                    
                    if (mode == .triple) {
                        Spacer().frame(width: metrics.size.width * authorPaneWeight)
                    }
                }
            }
        } else {
            EmptyView()
        }
    }
}

struct AuthorPane: View {
    let authorComponent: ArticleAuthorComponent?
    let mode: ChildPanelsMode
    
    var body: some View {
        if (authorComponent != nil) {
            GeometryReader { metrics in
                HStack {
                    if (mode != .single) {
                        Spacer().frame(width: metrics.size.width * listPaneWeight)
                    }
                    
                    if (mode == .triple) {
                        Spacer().frame(width: metrics.size.width * detailsPaneWeight)
                    }
                    
                    let width = switch mode {
                        case .single: metrics.size.width
                        case .dual: metrics.size.width * (detailsPaneWeight + authorPaneWeight)
                        case .triple: metrics.size.width * authorPaneWeight
                        default: metrics.size.width
                    }
                    
                    ArticleAuthorView(authorComponent!)
                        .frame(width: width)
                        .background(.background)
                }
            }
        } else {
            EmptyView()
        }
    }
}

private func requiredMode() -> ChildPanelsMode {
    return if (UIDevice.current.userInterfaceIdiom == .pad) {
        UIDevice.current.orientation.isLandscape ? .triple : .dual
    } else {
        UIDevice.current.orientation.isLandscape ? .dual : .single
    }
}

struct MultiPaneView_Previews: PreviewProvider {
    static var previews: some View {
        MultiPaneView(PreviewMultiPaneComponent(isMultiPane: true))
    }
}
