import React, { Component } from 'react'
import Todoinput from './Todoinput'
import Todoing from './Todoing'

export default class Todolist extends Component {
    constructor(){
        super();
        var isTodo;
        var todo=[];
        var over=[];
        //如果本地存在key值，读取其值，如果没有，读取默认key值，并保存在本地
        if(JSON.parse(window.localStorage.getItem("todo"))){
            isTodo = JSON.parse(window.localStorage.getItem("todo"));
        }else{
            isTodo = [{"title":"1","done":true},{"title":"2","done":false},{"title":"3","done":true}];
            localStorage.setItem("todo", JSON.stringify(isTodo));
        }
        //分开已完成与未完成
        for(var i = 0 ;i<isTodo.length;i++){
            if(isTodo[i].done){
                over = [...over,isTodo[i]];
            }else{
                todo = [...todo,isTodo[i]];
            }
        }
        //将key赋给todo
        this.state = {
            todo : todo,
            over : over
        }
        // console.log(todo);
        // console.log(over);
    }
    addItem = (msg)=>{
        //添加行
        var todo =[...this.state.todo,{"title":""+msg,"done":false}];
        this.setState({
            //更新值
            todo : todo
        },()=>{
            //连接两个数组
            var isTodo = this.state.todo.concat(this.state.over);
            //同步到本地
            localStorage.todo = JSON.stringify(isTodo);
        })
    }
    tododelet = (num)=>{
        //删除行
        var todo =[...this.state.todo];
        todo.splice(num,1);
        this.setState({
            //更新变化
            todo : todo
        },()=>{
            //连接两个数组
            var isTodo = this.state.todo.concat(this.state.over);
            //在本地记录变化
            localStorage.todo = JSON.stringify(isTodo);
        })
    }
    overdelet = (num)=>{
        //删除行
        var over =[...this.state.over];
        over.splice(num,1);
        this.setState({
            //更新变化
            over : over
        },()=>{
            //连接两个数组
            var isTodo = this.state.todo.concat(this.state.over);
            //在本地记录变化
            localStorage.todo = JSON.stringify(isTodo);
        })
    }
    boxclick = (num)=>{
        this.state.todo[num].done = true;
        var over =[...this.state.over,this.state.todo[num]]
        this.setState({
            over :over
        },()=>{
            var isTodo = this.state.todo.concat(this.state.over);
            localStorage.todo = JSON.stringify(isTodo);
        })
        this.tododelet(num);
    }
    unboxclick = (num)=>{
        this.state.over[num].done = false;
        var todo =[...this.state.todo,this.state.over[num]]
        this.setState({
            todo :todo
        },()=>{
            var isTodo = this.state.todo.concat(this.state.over);
            localStorage.todo = JSON.stringify(isTodo);
        })
        this.overdelet(num);
    }
    chage = ()=>{
        
    }
    render() {
        return (
            <div>
                <Todoinput addTodo = {this.addItem}/>
                <Todoing todo = {this.state.todo} over = {this.state.over}
                    tododelet = {this.tododelet} overdelet = {this.overdelet}
                    chage = {this.chage}
                    boxclick = {this.boxclick} unboxclick = {this.unboxclick}
                />
            </div>
        )
    }
}
