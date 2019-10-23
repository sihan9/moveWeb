import React, { Component } from 'react'
import Todoinput from './Todoinput'
import Todoing from './Todoing'

export default class Todolist extends Component {
    constructor(){
        super();
        this.state = {
            // todo : [1,2,3],
            // over:[]
            tode:[{"title":"1","done":false},{"title":"2","done":true},]
        }
    }
    addItem = (msg)=>{
        this.setState({
            todo : [...this.state.todo,msg]
        })
    }
    delet = (num)=>{
        var todo =[...this.state.todo];
        todo.splice(num,1);
        this.setState({
            todo:todo
        })
    }
    boxclick = (num)=>{
        var over =[...this.state.over,this.state.todo[num]]
        this.setState({
            over :over
        });
        this.delet(num);
    }
    unboxclick = (num)=>{
        var todo =[...this.state.todo,this.state.over[num]]
        this.setState({
            todo :todo
        });

        var over =[...this.state.over];
        over.splice(num,1);
        this.setState({
            over :over
        })
    }
    chage = ()=>{
        
    }
    render() {
        return (
            <div>
                <Todoinput addTodo = {this.addItem}/>
                <Todoing todo = {this.state.todo} click = {this.delet} chage = {this.chage} boxclick = {this.boxclick} over = {this.state.over} unboxclick = {this.unboxclick}/>
            </div>
        )
    }
}
