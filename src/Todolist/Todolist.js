import React, { Component } from 'react'
import Todoinput from './Todoinput'
import Todoing from './Todoing'

export default class Todolist extends Component {
    constructor(){
        super();
        this.state = {
            todo : [1,2,3]
        }

        //对象如何进行拷贝
        var a = {a:100};
        var b = {b:200};
        // var o = Object.assign(a,b);//将b加入a，并返回a
        var o = Object.assign({},a,b);//新对象
        // console.log(o === a);

        //遍历数组，尽量不用 for in
        //Object.keys返回由属性名组成的一个数组
        Object.keys(o).forEach((item)=>{
            console.log(item);
            console.log(o[item]);
            
        })
    }
    addItem = (msg)=>{
        // this.state.todo.push(msg);
        // console.log(this.state.todo);
        this.setState({
            todo : [...this.state.todo,msg]
        })
        console.log(msg);
        
    }
    delet = (num)=>{
        //this.state.todo.splice(num,1);不要写
        //深拷贝、浅拷贝
        //状态（state）：
        //1、不要直接改变、处理状态
        var todo =[...this.state.todo];
        todo.splice(num,1);
        //2、setState是异步的
        //(state:上一个状态,props)
        //this.setState((state,props)=>{todo:state.todo+1});
        this.setState({
            todo:todo
        })
        console.log(num);
    }
    render() {
        return (
            <div>
                <Todoinput addTodo = {this.addItem}/>
                <Todoing todo = {this.state.todo} click = {this.delet}/>
            </div>
        )
    }
}
