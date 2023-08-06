import React from 'react'

export const Welcome = ({ name }) => {
    return (
        <div>Welcome {name ? name : "Guest"} </div>
    )
}
