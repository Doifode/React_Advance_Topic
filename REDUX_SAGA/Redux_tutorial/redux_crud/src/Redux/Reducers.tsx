import { ITodos } from "../Constant/Interfaces"
import { STORE_TODO } from "./Types"

const initialValues: ITodos = []
export const ReducerFunc = (state = initialValues, action: any) => {
    switch (action.type) {
        case STORE_TODO: {
            return action.payload
        }
        default: return state
    }
}