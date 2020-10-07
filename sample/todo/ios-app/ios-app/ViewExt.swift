//
//  ViewExt.swift
//  ios-app
//
//  Created by Arkadii Ivanov on 10/7/20.
//  Copyright © 2020 Arkadii Ivanov. All rights reserved.
//

import Foundation
import SwiftUI

extension View {
    @ViewBuilder
    func isHidden(_ hidden: Bool) -> some View {
        if hidden {
            self.hidden()
        } else {
            self
        }
    }
}
