import React from 'react'
import { Pane } from 'evergreen-ui';

export default function TextForm(props) {
    return (
        <Pane className='sv-bgr w-full py-2 px-4 h-16 flex flex-col rounded-md'>
            <label>{props.label}</label>
            <input type='text' className='input-field'></input>
        </Pane>
    )
}
