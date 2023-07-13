import React from 'react'
type table ={
    list:{
        name:string
        email:string
    }[]
}
export const TableArray = (props:table) => {
  return (
    <div>{props.list.map((i)=>{return<> <h1> {i.name}</h1>  <h1> {i.email}</h1></>
    })}</div>

    
  )
}
