import React, { createContext, useState } from 'react'
import { Child1 } from './Child1'
import { Child2 } from './Child2'
import { Child3 } from './Child3'
import { Child4 } from './Child4'


export const context = createContext()
export const Parent = () => {
    const ClassConst = "btn btn-sm text-white fw-bold mt-2  fs-5"
    const [color, setColor] = useState(
        {
            firstChild: `${ClassConst} bg-primary`,
            secondChild: `${ClassConst} bg-secondary`,
            thirdChild: `${ClassConst} bg-success`,
            fourthChild: `${ClassConst}  fs-5 bg-info`
        }
    )
    return (
        <context.Provider value={color}>
            <div className="col-md-12"><Child1 /></div>
            <div className="col-md-12"><Child2 /></div>
            <div className="col-md-12"><Child3 /></div>
            <div className="col-md-12"><Child4 /></div>
        </context.Provider>
    )
}
