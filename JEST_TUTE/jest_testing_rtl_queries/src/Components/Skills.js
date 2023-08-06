import React, { useEffect, useState } from 'react'

export const Skills = ({ skills }) => {
    const [state, setState] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setState(false)
        }, 500);
    }, [])
    return (
        <div>

            <ul>
                {skills.map((item) => {
                    return <li key={item}>{item}</li>
                })}
            </ul>

            <div className="row">
                <div className="col-12">

                    <div className="container">
                        {state ?
                            <button onClick={() => setState(!state)}>LogIn </button> :
                            <button onClick={() => setState(!state)}>Logout</button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
