import React, { useContext } from 'react';
import { context } from './Parent';

export const Child3 = () => {
    const color = useContext(context)
    return (
        <div  className='border  p-4'>

            <button className={color.thirdChild}> Third  Child</button>
        </div>
    )
}
