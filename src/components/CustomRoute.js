import React from 'react'
import { Redirect, Route } from 'react-router'
import { Component } from 'react';

export class CustomRoute extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        }
    }

    checkToken = () => {
        if (localStorage.getItem('refreshToken') === null) {
            this.setState({ redirect: true })
        }
    }
    render() {
        this.checkToken()
        if (this.state.redirect) {
            return <Redirect to='/' />
        }
        return (
            <Route path={this.props.path}>
                {this.props.children}
            </Route>
        )
    }
}

export default CustomRoute;
