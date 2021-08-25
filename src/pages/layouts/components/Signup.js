import React, { Component } from 'react'
import { Pane, Button, toaster } from 'evergreen-ui';
import axios from 'axios';
import { Redirect } from 'react-router';

const api = axios.create({
    baseURL: 'http://68.183.235.47:4000/api/auth/signup'
})

export class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            redirect: false
        };
    }

    getUsername = (event) => {
        this.setState({ username: event.target.value })
    }

    getPassword = (event) => {
        this.setState({ password: event.target.value })
    }

    signup = async () => {
        let email = this.state.username
        let password = this.state.password
        api.post('/', {
            "email": email,
            "password": password
        }).then(
            (res) => {
                this.setState({ redirect: true })
            }
        ).catch(
            () => toaster.danger('Email đã tồn tại')
        )
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/' />;
        }
        return (
            <Pane className='w-full h-full flex justify-center items-center'>
                <Pane className='login-form rounded-2xl flex flex-col p-6 shadow-lg'>
                    <Pane className='flex justify-center mb-6 text-2xl font-semibold'>
                        Đăng kí tài khoản
                    </Pane>
                    <Pane className='mb-4'>
                        <Pane className='py-2 px-4 flex flex-col h-16 sv-bgr'>
                            <Pane className='text-sm font-medium'>Tài khoản</Pane>
                            <input type='text' className='input-field' onChange={this.getUsername}></input>
                        </Pane>
                    </Pane>
                    <Pane className='mb-4'>
                        <Pane className='py-2 px-4 flex flex-col h-16 sv-bgr'>
                            <Pane className='text-sm font-medium'>Mật khẩu</Pane>
                            <input type='password' className='input-field' onChange={this.getPassword}></input>
                        </Pane>
                    </Pane>
                    <Pane className='h-14 flex items-center justify-center mb-4'>
                        <Button appearance="primary" onClick={this.signup}>
                            Đăng ký
                        </Button>
                    </Pane>
                </Pane>
            </Pane>
        )
    }
}

export default Signup

