import React from 'react'
import { Pane } from 'evergreen-ui';

export default function SearchBox(props) {
    return (
        <Pane className='search-box h-8 w-full rounded flex items-center pr-3'>
            <Pane className='search-icon h-8 w-8 flex justify-center items-center'>
                <svg width='14px' height='14px' className="css-178dftq ub-z-idx_3 ub-w_14px ub-h_14px ub-box-szg_border-box" data-icon="search" viewBox="0 0 16 16">
                    <path d="M15.55 13.43l-2.67-2.68a6.94 6.94 0 001.11-3.76c0-3.87-3.13-7-7-7s-7 3.13-7 7 3.13 7 7 7c1.39 0 2.68-.42 
                                    3.76-1.11l2.68 2.67a1.498 1.498 0 102.12-2.12zm-8.56-1.44c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" fillRule="evenodd">
                    </path>
                </svg>
            </Pane>
            <input className='flex-grow text-xs font-normal' type='text' placeholder={props.placeholder}></input>
        </Pane>
    )
}
