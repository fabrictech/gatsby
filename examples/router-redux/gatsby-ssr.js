const $ = require(`react`).createElement
const renderToString = require(`react-dom/server`).renderToString
const Provider = require(`react-redux`).Provider

const createStore = require(`./src/state/createStore`).createStore

exports.replaceServerBodyRender = ({ component: body }) => {

    const store = createStore()

    const ConnectedBody = $(Provider, { store }, body)

    return {
        body: renderToString(ConnectedBody),
    }
}
