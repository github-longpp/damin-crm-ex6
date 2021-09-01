import React from 'react'
import { Redirect, Route } from 'react-router'
// import axios from 'axios';
import { Component } from 'react';

// const api = axios.create({
//     baseURL: 'http://localhost:4000/index',
//     timeout: 300000,
//     headers: {
//         'Content-Type': 'application/json',
//     }
// })

// api.setToken = (token) => {
//     api.defaults.headers['Auth-token'] = token
//     localStorage.setItem('token', token)
// }

// function refreshToken() {
//     return api.post('/refreshToken', {
//         refreshToken: localStorage.getItem('refreshToken')
//     })
// }

// api.interceptors.request.use((request) => {
//     if (request.url !== '/' && request.url !== '/signup') {
//         request.headers['Auth-token'] = localStorage.getItem('accessToken')
//     }
//     console.log('req: ',request);
//     return request;
// }, error => {
//     return Promise.reject(error)
// })

// api.interceptors.response.use((response) => {
//     const statusCode = response.status
//     console.log(statusCode);
//     if (statusCode === 401) {
//         return refreshToken().then(res => {
//             console.log('get token refreshToken>>', res.data.accessToken)
//             const { token } = res.data.accessToken
//             api.setToken(token);
//             const config = response.config
//             config.headers['Auth-token'] = token
//             config.baseURL = 'http://localhost:4000/index'
//             return api(config)

//         })

//     }
//     console.log('res: ',response);
//     return response
// }, error => {
//     console.warn('Error status', error.response.status)
//     if (error.response) {
//         return error.response.data
//     } else {
//         return Promise.reject(error)
//     }
// })


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
