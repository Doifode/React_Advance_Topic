import React, { useContext } from 'react';
import { context } from './Parent';

export const Child2 = () => {
    const color = useContext(context)
    return (
        <div  className='border  p-4'>

            <button className={color.secondChild}> Second  Child</button>
        </div>
    )
}
