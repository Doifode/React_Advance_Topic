import { ADDDATA, SUBDATA } from "./Types"
export const ADD = (payload) => {
    return {
        type: ADDDATA,
        payload
    }

}
export const SUB = ( payload) => {
    return {
        type: SUBDATA,
        payload
    }

}
export const SETDATA = payload =>{
 return {   type:"set",
    payload}

}