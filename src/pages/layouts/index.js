import React, { Component } from 'react'
import TopTitle from './components/TopTitle'
import Sidebar from './components/Sidebar'
import { Pane } from 'evergreen-ui'

export default class MainLayout extends Component {

    render() {
        return (
            <Pane className="w-full flex">
                <Sidebar />
                <Pane className="container py-3 px-6">
                    <TopTitle />
                    {this.props.children}
                </Pane>
            </Pane>
        )
    }
}
