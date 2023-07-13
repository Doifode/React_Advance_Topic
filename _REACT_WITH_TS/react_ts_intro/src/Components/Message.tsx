import React from 'react'
type welcome = {
    name: string
    isLoagedIn: boolean
}
export const Message = (props: welcome) => {
    return (
        <>
            {props.isLoagedIn ? <h1>hi {props.name}</h1> : 'Wel-come'}
        </>
    )
}
