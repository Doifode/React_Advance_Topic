import React from 'react'
import { Child3 } from './Child3'

export const Child2 = ({ color }) => {
    return (
        <div className='border  p-3'>
            <button className={color.secondChild}> Second Child </button>

            <Child3 color={color} />
            
        </div>
    )
}
