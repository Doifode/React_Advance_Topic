import { takeEvery, put, call, } from "redux-saga/effects"
import { CALL_API, GET_BY_ID, SET_API } from "./SagaAction"
 export const SET_BY_ID ="SET_BY_ID"
function* getData() {
 let data =yield fetch('https://jsonplaceholder.typicode.com/users')
 data= yield data.json()
 
 yield put({type:SET_API ,data})
} 
function * getById(id){
console.log('data',id)
    console.log("saga id called ")
    let data = yield fetch(`https://jsonplaceholder.typicode.com/users/${id.payload}`)
    data = yield data.json()
    console.log( "data1",id.payload)
    yield put({type:SET_BY_ID ,data})

}

function* mySaga() {
    yield takeEvery(CALL_API, getData)
    yield takeEvery(GET_BY_ID  ,getById)
    console.log('hi')

}
export default mySaga