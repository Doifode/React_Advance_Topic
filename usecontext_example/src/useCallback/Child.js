import React from 'react'
import { memo } from "react";

const Child = ({ todos, addTodo }) => {
    console.log('Child Component called')

    return (
        <>
            <h2>Child component</h2>
            {todos.map((todo, index) => {
                return <h1 key={index}>{todo + "" + index}</h1>;
            })}
            <button className='btn btn-warning' onClick={addTodo}>Add Todo</button>
        </>
    );
};

export default memo(Child);