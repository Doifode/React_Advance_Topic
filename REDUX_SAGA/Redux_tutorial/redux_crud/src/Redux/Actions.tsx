import { ITodos } from "../Constant/Interfaces"
import { ADD_TODOS, CALL_FOR_TODO, DELETE_TODOS, STORE_TODO, UPDATE_TODOS } from "./Types"

export const callForTodos = () => {
    return { type: CALL_FOR_TODO }
}
export const storeTodoData = (payload: ITodos) => {
    return { type: STORE_TODO, payload }

}
export const addTodos = (payload: any) => {
    return { type: ADD_TODOS, payload }
}
export const deleteTodoItem = (payload: any) => {
    return { type: DELETE_TODOS, payload }
}
export const updateTodos = (payload: any) => {
    return { type: UPDATE_TODOS, payload }
}