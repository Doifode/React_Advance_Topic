import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { ADD, SUB } from './Actions'
import axios from 'axios'
import { CallApi, GetById } from '../ReduxSagaApi/SagaAction'

export const Main = () => {
    const dispatch = useDispatch()
    const [data, setdata] = useState()
 
    const {ReduxReducer ,ReduxSagaReducer}  = useSelector((state) => {
        return state
    })
    const {value1 }=ReduxReducer
    return (
        <>
            <div>{ value1} <button onClick={() => {dispatch(ADD(1))  } }> +</button><button onClick={() => dispatch(SUB(1))}>-</button></div>
            {
                ReduxSagaReducer?.state?.map((i) => {
                    return <h1 key={i.id}>{i.name}{i.id}</h1>
                })
            }
            { 
            ReduxSagaReducer?.id?.name && ReduxSagaReducer.id.name
            }
<input type="number"  max={10} onChange={(e)=>setdata(e.target.value)} />
            <button onClick={() => { dispatch(GetById(data)) ;console.log('ReduxSagaReducer',ReduxSagaReducer.id ) }}> saga by id</button>
            <button onClick={() => { dispatch(CallApi()) }}> saga api</button>
        </>

    )
}
