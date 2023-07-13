import React, { useContext } from 'react';
import { context } from './Parent';

export const Child4 = () => {
    const color = useContext(context)
    return (
        <div  className='border  p-4'>

            <button className={color.fourthChild}> Fourth  Child</button>
        </div>
    )
}
