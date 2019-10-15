import React, { Component } from 'react'
import { directive } from '@babel/types'

/**
 * 父子组件交互
 * 子组件 --> 父组件，调用子组件时往子组件传递一个函数，通过props调用该函数即可传递该内容
 * 父组件 --> 子组件，传属性
 */

// 受控组件和非受控组件

//非受控组件：
//代码简单、比较适用于一次性获取表单的值
// export default class Todoinput extends Component{
//     componentDidMount(){//在render后执行
//         console.log(this.inp);
//         console.log(this.refs);
//     }
//     search =() =>{
//         console.log(this.inp.value);
//     }
//     render(){
//         return (
//             <div>
//                 {/* ref:箭头函数返回自身节点传给实例的属性*/}
//                 <input type = "text" ref={(inp)=>this.inp = inp}></input>
//                 <button onClick = {this.search}>
//                     查询
//                 </button>
//             </div>
//         )
//     }
// }

// 受控组件：value值被react的状态state控制---表单元素
// 实时获取或处理输入框的值
export default class Todoinput extends Component {
    constructor(){
        super();
        this.state =  {
            n1 : 0,
            n2 : 0
        }
    }
    handleInput = (e) =>{
        if(e.keyCode === 13){
            this.props.addTodo(e.target.value);
        }
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    render() {
        return (
            <div>
                <label htmlFor="inp" style={{color:'red',fontSize:24}}>输入：</label>
                <input id="inp" name="n1" onChange={(e)=>this.handleChange(e)} value={this.state.n1} onKeyDown = {(e)=>this.handleInput(e)} type = "text"/>
                +
                <input name="n2" onChange={(e)=>this.handleChange(e)} value={this.state.n2} onKeyDown = {(e)=>this.handleInput(e)} type = "text"/>
                <p>{parseInt(this.state.n1)+parseInt(this.state.n2)}</p>
                <button>查询</button>
            </div>
        )
    }
}
