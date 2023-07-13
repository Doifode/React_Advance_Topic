import React, { useCallback } from 'react'
import { useState } from "react";
import Child from "./Child";
export const UseCallBack = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((c) => c + 1);
    };
    const addTodo = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
    }, [])
    console.log("parent component")
    return (
        <>
            <div className="flex">
                <Child todos={todos} addTodo={addTodo} />
                <hr />
                <h1>Parent Component</h1>
                <div>
                    <h1> Count: {count}</h1>
                    <button className='btn btn-warning' onClick={increment}>+</button>
                </div>
            </div>
        </>
    );
};
