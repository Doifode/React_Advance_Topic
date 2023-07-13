import React, { Component } from 'react'

export default class Increment extends Component {
    constructor() {
        super()
        this.state = {
            num: 0
        }
    }   
    Increment() {
        this.setState(
            {
                num: this.state.num + 1
            }
        )
    }
    Decrement() {
        this.setState(
            {
                num: this.state.num - 1
            }
        )
    }
    render() {
        return (
            <>
                <h1>{this.state.num}</h1>
                <button onClick={() => this.Increment()}> Click</button>
                <button onClick={() => this.Decrement()}> Click</button>
            </>
        )
    }
}
