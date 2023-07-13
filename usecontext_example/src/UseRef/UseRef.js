import React, { useState } from 'react'
import { useRef } from 'react'

export const UseRef = () => {
    const devRef = useRef(null);
    const date = new Date()


    const Handleclick = (task) => {
        if (task === "Square") {
            devRef.current.style.width = "200px"
            devRef.current.style.height = "200px"
            devRef.current.style.borderRadius = "50%"
            devRef.current.style.borderRadius = "0%"
            devRef.current.style.backgroundColor = "red"
            devRef.current.style.border = "1px solid red"

        }
        if (task === "Circle") {
            devRef.current.style.width = "200px"
            devRef.current.style.height = "200px"
            devRef.current.style.borderRadius = "50%"
            devRef.current.style.backgroundColor = "red"
            devRef.current.style.border = "1px solid red"

        }
        if (task === "Reactangle") {
            devRef.current.style.width = "350px"
            devRef.current.style.height = "200px"
            devRef.current.style.borderRadius = "50%"
            devRef.current.style.borderRadius = "0%"
            devRef.current.style.backgroundColor = "red"
            devRef.current.style.border = "1px solid red"
        }

        if (task === "Show") {
            devRef.current.style.display = "block"
            devRef.current.class = "centerGrid"
        }
        if (task === "Hide") {
            devRef.current.style.display = "none"
        }

    }

    return (
        <div className='h-100 m-5 text-center'>
            <div className="centerGrid"><div ref={devRef} className='centerGrid mb-3'> <h1>useRef</h1></div></div>
            <div className="d-flex">
                <button className='btn btn-success m-1' onClick={() => Handleclick("Square")}>Square</button>
                <button className='btn btn-success m-1' onClick={() => Handleclick("Circle")}>Circle</button>
                <button className='btn btn-success m-1' onClick={() => Handleclick("Reactangle")}>Reactangle</button>
                <button className='btn btn-success m-1' onClick={() => Handleclick("Hide")}>Hide</button>
                <button className='btn btn-success m-1' onClick={() => Handleclick("Show")}>Show</button>
            </div>
            {<h1 className='text-center'>{date.toLocaleTimeString()}</h1>}
        </div>
    )
}
