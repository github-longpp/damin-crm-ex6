import React, { Component } from 'react'
import AppContext from '../../../context'
import { Pane } from 'evergreen-ui';

export class TopTitle extends Component {
    render() {
        return (
            <Pane className='top-nav w-full flex justify-between items-center'>
                <Pane className='nav-title not-italic font-semibold text-lg h-auto'>
                    {this.context.title}
                </Pane>
                <Pane className='user-reference flex w-auto h-auto items-center'>
                    <Pane className=' user-name px-3 not-italic font-normal text-sm'>Phạm Phi Long</Pane>
                    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="28" cy="28" r="28" fill="#F8F9FA" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.9847 31.3462C24.1171 31.3462 20.8142 31.931 20.8142 34.2729C20.8142 36.6148 24.0961 37.2205 27.9847 37.2205C31.8523 37.2205 35.1542 36.6348 35.1542 34.2938C35.1542 31.9529 31.8733 31.3462 27.9847 31.3462Z" stroke="#CCCCCC" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M27.9846 28.0059C30.5227 28.0059 32.5799 25.9478 32.5799 23.4097C32.5799 20.8716 30.5227 18.8145 27.9846 18.8145C25.4465 18.8145 23.3885 20.8716 23.3885 23.4097C23.3799 25.9392 25.4237 27.9973 27.9523 28.0059H27.9846Z" stroke="#CCCCCC" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </Pane>
            </Pane>
        )
    }
}
TopTitle.contextType = AppContext;

export default TopTitle
