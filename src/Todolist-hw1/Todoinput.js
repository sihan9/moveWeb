import React, { Component } from 'react'
import { directive } from '@babel/types'

export default class Todoinput extends Component {
    constructor(){
        super();
        this.state =  {
            todo:[]
        }
    }
    handleInput = (e) =>{
        if(e.keyCode === 13){
            this.props.addTodo(e.target.value);
        }
    }
    handleChange = (e) =>{
        this.setState({
            todo: e.target.value
        })
    }
    render() {
        return (
            <div>
                <label htmlFor="inp" style={{fontSize:24}}>ToDoList</label>
                <input id="inp" onChange={(e)=>this.handleChange(e)} value={this.state.n1} onKeyDown = {(e)=>this.handleInput(e)} type = "text"/>  
            </div>
        )
    }
}
