export const CALL_API = "CALL_API"
export const CallApi =  () => {  console.log('hi'); return { type: CALL_API   } }
export const SET_API = "SET_API"
export const SetApi = payload => { return { type: SET_API, payload } }
export const  GET_BY_ID="GET_BY_ID"
export const GetById =payload => {return {type:GET_BY_ID ,payload}}