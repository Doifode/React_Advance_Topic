import React, { useContext } from 'react';
import { context } from './Parent';

export const Child1 = () => {
    const color = useContext(context)
    return (
        <div className='border  p-4'>
            <button className={color.firstChild}> First  Child</button>
        </div>
    )
}
