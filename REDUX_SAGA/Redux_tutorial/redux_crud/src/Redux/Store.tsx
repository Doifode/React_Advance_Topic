import { configureStore } from "@reduxjs/toolkit";
import { ReducerFunc } from "./Reducers";
import { Sagas } from "./Sagas";
import createSagaMiddleware from "redux-saga";
const sagaMiddleWare = createSagaMiddleware();

export const store = configureStore({
    reducer: ReducerFunc,
    middleware: () => [sagaMiddleWare]
})
sagaMiddleWare.run(Sagas)   