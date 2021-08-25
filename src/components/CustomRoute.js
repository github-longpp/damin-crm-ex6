import React from 'react'
import { Redirect, Route } from 'react-router'

export default function CustomRoute(props) {
    if (localStorage.getItem('token') === null) {
        console.log(localStorage.getItem('token'));
        return <Redirect to='/' />
    } else {
        return (
            <Route path={props.path}>
                {props.children}
            </Route>
        )
    }
}
