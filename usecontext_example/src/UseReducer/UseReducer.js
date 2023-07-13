import React, { useReducer } from 'react'

export const UseReducer = () => {
    const reducer = (state, action) => {
        switch (action.type) {
            case 'Icrement':
                return {
                    count: state.count.sort((a, b) => a - b)
                }
            case 'Decrement':
                return {
                    count: state.count.sort((a, b) => b - a)
                }
            case 'Multiple':
                return {
                    count: state.count.map((i) => i * action.payload),
                    values: state.values = ''
                }
            case 'Devide':
                return {
                    count: state.count.map((i) => i / action.payload),
                    values: state.values = ''
                }
            default:
                return state
        }
    }
    const inititalState = {
        count: [1, 2, 3, 5, 4,],
        values: ''
    }
    const [state, dispatch] = useReducer(reducer, inititalState)
    return (
        <div className='  text-center'>
            <div className="row">
                <div className="m-5 text-center row">
                    <div className="col-md-4" p-3>
                        <div className=" fs-1 fw-bold">
                            {state.count.map((i) => <span className='m-0'>{i + ","}</span>)}
                        </div>
                        <button className='btn btn-success btn-sm m-2' onClick={() => dispatch({ type: 'Icrement' })}>Ascending</button>
                        <button className='btn btn-success btn-sm m-2' onClick={() => dispatch({ type: "Decrement" })}>Descending</button>

                    </div>
                    <div className="col-md-4 p-3 ">
                        <input type="number" placeholder='Number' className='form-control' onChange={(e) => state.values = e.target.value} />
                        <button className='btn btn-success btn-sm m-2' onClick={() => dispatch({ type: "Multiple", payload: state.values ? state.values : 1 })}>Multiply</button>

                    </div>
                    <div className="col-md-4 p-3">
                        <input type="number" placeholder='Number' className='form-control' onChange={(e) => state.values = e.target.value} />
                        <button className='btn btn-success btn-sm m-2' onClick={() => dispatch({ type: "Devide", payload: state.values ? state.values : 1 })}>Devide</button>

                    </div>
                </div>
            </div>
        </div>
    )
}
