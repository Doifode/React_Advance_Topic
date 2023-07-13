// import ReduxReducer from "./Reducers";
// import { createStore } from "redux";
// const store = createStore(ReduxReducer)
// export default store
import { configureStore  } from "@reduxjs/toolkit";
import ReduxReducer from "./Reducers";
import mySaga from "../ReduxSagaApi/reduxsaga";
import createSagaMiddleware   from 'redux-saga'
import { ReduxSagaReducer } from "../ReduxSagaApi/reduxReducer";
import { combineReducers } from "@reduxjs/toolkit";
const rootreducer= combineReducers({
    ReduxReducer ,
    ReduxSagaReducer
})
const sagaMiddleWare = createSagaMiddleware()
const store = configureStore({
    reducer:rootreducer ,
    middleware:()=> [sagaMiddleWare]
})
export  default store
sagaMiddleWare.run(mySaga)