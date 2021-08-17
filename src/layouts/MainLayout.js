import React, { Component } from 'react'
import TopTitle from '../components/TopTitle'
import Sidebar from '../components/Sidebar'
import TitleContext from '../context/TitleContext'

export default class MainLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            topTitle: ''
        }
    }
    updateTitle = (newTitle) => {
        this.setState({ topTitle: newTitle });
    }
    render() {
        return (
            <TitleContext.Provider value={{ topTitle: this.state.topTitle, update: this.updateTitle }}>
                <div className="App">
                    <Sidebar />
                    <div className="container">
                        <TopTitle />
                        {this.props.children}
                    </div>
                </div>
            </TitleContext.Provider>

        )
    }
}
