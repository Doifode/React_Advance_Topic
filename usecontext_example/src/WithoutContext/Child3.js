import React from 'react'
import { Child4 } from './Child4'

export const Child3 = ({ color }) => {
    return (
        <div className='border  p-3'>
            <button className={color.thirdChild}> Third Child </button>

            <Child4 color={color} />

        </div>
    )
}
