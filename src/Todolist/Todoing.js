import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Todoing extends Component {
    render() {
        return (
            <div>
                <h1>正在进行{this.props.a}</h1>
                <ul className="">{ 
                    this.props.todo.map((item,idx) =><li key={idx+item}>{item}----<button onClick={(num)=>this.props.click(idx)}>删除</button></li>)
                }</ul>
            </div>
        )
    }
}

//类型检查
Todoing.propTypes = {
    todo : PropTypes.string
}
Todoing.defaultProps = {
    todo : [2,3,4],
    a:100
}