import { GET_BY_ID, SET_API } from "./SagaAction";
import { SET_BY_ID } from "./reduxsaga";

export const ReduxSagaReducer = (state = {
    state: [],
    id:{}
}, action) => {
    switch (action.type) {
        case SET_API: {
            console.log('hi i am sagareducer', action.data);
            return {
                ...state, state: action.data
            }
        }
        case SET_BY_ID: {
            console.log(" hi i am get by id", action.data.address)
            return {
                ...state ,id:action.data
            }
        }
        default: return state
    }


}