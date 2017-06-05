import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import { createStore } from './src/state/createStore'

exports.replaceRouterComponent = ({ history }) => {
    const store = createStore()

    const ConnectedRouterWrapper = ({ children }) => (
        <Provider store={store}>
            <ConnectedRouter history={history}>{children}</ConnectedRouter>
        </Provider>
    )

    return ConnectedRouterWrapper
}
