import { ADD_TODOS, CALL_FOR_TODO, DELETE_TODOS, STORE_TODO, UPDATE_TODOS } from "./Types";
import { takeEvery, put } from "redux-saga/effects"

function* callTodoList(): any {

    const data = yield fetch('http://localhost:2000/todos');
    const payload = yield data.json();
    yield put({ type: STORE_TODO, payload });

}

function* addTodoList(data: any): any {
    yield fetch('http://localhost:2000/todos', {
        headers: {
            "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(data.payload),
    }
    )
    callTodoList()

}

function* deleteItem(id: any) {
    yield fetch(`http://localhost:2000/todos/${id.payload}`, {
        method: "DELETE"
    })
    callTodoList()

}

function* updateItem(item: any) {

    yield fetch(`http://localhost:2000/todos/${item.payload.id}`, {
        method: "PUT",
        body: JSON.stringify(item.payload),
        headers: {
            "Content-Type": "application/json"
        }
    })
    callTodoList()

}

export function* Sagas(): any {
    yield takeEvery(CALL_FOR_TODO, callTodoList);
    yield takeEvery(ADD_TODOS, addTodoList);    
    yield takeEvery(DELETE_TODOS, deleteItem);
    yield takeEvery(UPDATE_TODOS, updateItem)
}