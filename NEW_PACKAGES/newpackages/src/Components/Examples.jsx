import React from 'react';
import { Button } from "@mui/material"

const ChildComponent = ({ index }) => {
    
    const handleClick = () => {
        alert(`Clicked ${index}`);
    };

    return (
        <Button onClick={handleClick}>Child {index}</Button>
    );
};

const Examples = () => {
    return (
        <div>
            <ChildComponent index={1} />
            <ChildComponent index={2} />
            <ChildComponent index={3} />
        </div>
    );
};

export default Examples;