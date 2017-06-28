import React from 'react'
import { Route, Redirect } from 'react-router'

class RedirectPage extends React.Component {

    componentDidMount() {
        if (process.env.NODE_ENV === `production`) {
            window.___navigateTo(this.props.pathContext.to)
        }
    }

    render() {
        return (
            <Route
                path="*"
                render={() => <Redirect to={this.props.pathContext.to} />}
            />
        )
    }
}

export default RedirectPage