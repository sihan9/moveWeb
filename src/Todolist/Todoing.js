import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Todoing extends Component {
    render() {
        return (
            <div>
                <h1>正在进行</h1><button>{this.props.todo.length}</button>
                <ul>{
                    this.props.todo.map((item,idx) =>
                        <li key={idx}>
                            <input onClick ={(num)=>this.props.boxclick(idx)} type="checkbox" name={idx} checked={false} onChange = {()=>this.props.chage()}/>
                            {item.title}----
                            <button onClick={(num)=>this.props.tododelet(idx)}>删除</button>
                        </li>
                    )
                }</ul>
                <h1>已经完成</h1><button>{this.props.over.length}</button>
                <ul>{
                    this.props.over.map((item,idx) =>
                        <li key={idx}>
                            <input type="checkbox" onClick ={(num)=>this.props.unboxclick(idx)} checked name={idx} onChange = {()=>this.props.chage()}/>
                            {item.title}----
                            <button onClick={(num)=>this.props.overdelet(idx)}>删除</button>
                        </li>
                    )
                }</ul>
            </div>
        )
    }
}