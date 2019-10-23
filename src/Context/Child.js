import React, { Component } from 'react'
// import {Consumer } from './Context'
import {con} from './Context'

export default class Child extends Component {
    render() {
        return (
            <div>
                <h1>consumer</h1>
                {this.context}
                {/* <Consumer>
                    {(data) =><div>{data}</div>}
                </Consumer>    */}
            </div>
        )
    }
}
Child.contextType = con;