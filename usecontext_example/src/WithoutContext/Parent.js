import React, { useState } from 'react'
import { Child1 } from './Child1'

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
        <div className="container">
            <h1>WithOut context</h1>
            <div className="row border">
                <div className="col-md-12">

                    <Child1 color={color} />

                </div>

            </div>
        </div>
    )
}
export default Parent
