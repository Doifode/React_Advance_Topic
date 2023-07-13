 import { ADDDATA, SUBDATA } from "./Types"



const initialValue = {
    value1: 0,
}

const ReduxReducer = (initialState = initialValue, action) => {
    switch (action.type) {
        case ADDDATA: return {
            ...initialState, value1:initialState.value1 + action.payload
        }
        case SUBDATA: return {
            ...initialState, value1:initialState.value1 - action.payload 
        }
     
       
        
        default: return initialState
    }

}

export default ReduxReducer 