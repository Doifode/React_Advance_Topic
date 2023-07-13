import React from 'react'
import { Child2 } from './Child2'

export const Child1 = ({ color }) => {
    return (
        <div className='container'>
            <div className="row border p-3">
                <div className="col-md-12">
                    <button className={color.firstChild}>First Child </button>
                </div>

                <Child2 color={color} />
                
            </div>
        </div>
    )
}
