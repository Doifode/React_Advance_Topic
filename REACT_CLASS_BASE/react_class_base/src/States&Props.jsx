import React, { Component } from 'react'

export default class StatesProps extends Component {
    constructor(props) {
        super()
        this.state = {
            name: 'Yash',
            array: [3, 3, 4, 5, 5, 6, 6, 6, 6, 4, , 43, 3],
            array2: [5, 4, 5, 3, 3.3, 3, 4, 5],
            array3: []
        }
    }

    render() {
        return (
            <React.Fragment>
                <h1>States&Props {this.state.name} {this.props.middleName} {this.props.lastName}</h1>
                {
                    this.array3 = this.state.array.filter((i) =>
                        this.state.array2.some((d) => i === d 
                        )
                    )



                }
                {
                    this.array3.map(i => {
                        return <h1> {i}</h1>
                    })
                }

            </React.Fragment>
        )
    }
}
