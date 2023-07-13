import React, { Component } from 'react'
import StatesProps from '../States&Props'

export default class Props extends Component {
    constructor() {
        super()
        this.state = {
            middleName: "Vinod",
            lastName: 'Doifode'
        }
    }
    render() {
        return (
            <div><StatesProps middleName={this.state.middleName} lastName={this.state.lastName} /></div>
        )
    }
}
