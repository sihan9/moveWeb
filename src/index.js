import React,{Component,Fragment} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ShowTime from './ShowTime';
import Todolist from './Todolist/Todolist'
import Request from './Request'
import Parent from './Context/Parent'
import {con} from './Context/Context'
import Hoc from './Hoc/Hoc';
import ParentPortal from './Portal/ParentPortal';
import App from './App';
import Cnode from './Cnode/Cnode';
import Sider from './Sider';

ReactDOM.render(<Cnode/>,document.getElementById('root'));

//todolist
// ReactDOM.render(<Todolist/>,document.getElementById('root'));

// App
// ReactDOM.render(<App/>,document.getElementById('root'));

//Portals
// ReactDOM.render(<ParentPortal/>,document.getElementById('root'));

//HOC
// ReactDOM.render(<Hoc/>,document.getElementById('root'));

//Context
// let color = 'red';
// ReactDOM.render(
//     // <Provider value={color}>
//     //     <Parent/>
//     // </Provider>
//     <con.Provider value={color}>
//         <Parent/>
//     </con.Provider>
//     ,document.getElementById('root')
// );

//组件交互
//父组件 --> 子组件：调用时在子组件上添加属性
//在子组件中通过props获取数据
// ReactDOM.render(
//     <Request/>,document.getElementById('root')
// );

//ShowTime.js
// ReactDOM.render(
//     <ShowTime/>,document.getElementById('root')
// );

//函数定义组件及调用（无生命周期函数）
//当只是渲染结构时
// function Hello(props){
//     return (
//     <div>
//         {/*条件渲染*/}
//         {props.list.length>=6?<h1>todo</h1>:''}
//         {props.list.length>=5 && <h1>todo</h1>}
//         <ul>
//             {/*循环渲染*/}
//             {
//                 props.list.map((item,index) => index % 2 === 0 && <li key={item}>{item}</li>)
//             }
//         </ul>
//     </div>)
// }
// var item = [1,2,3,4,5];
// ReactDOM.render(
//     <Hello list={item}/>,document.getElementById('root')
// );

//react元素创建后不可改变
// function tick(){
//     const time = <div>{new Date().toLocaleTimeString()}</div>;
//     ReactDOM.render(time,document.getElementById('root'));
// }
// setInterval(tick,1000);

//以后使用
// var e = <h1>hello</h1>
// ReactDOM.render(e,document.getElementById('root'));

//jsx表达式会被react转换成一个对象
// var ele = React.createElement('div',{'id':'box'},'hello',React.createElement('h1',{'id':'h'},'react'));
// console.log(ele);
// var obj = {
//     type :'div',
//     props:{
//         id:'box',
//         children:['hello',{
//             type :'h1',
//             props:{
//                 id:'h',
//                 class:'h',
//                 children:['react']
//             }
//         }]
//     }
// }

//自己声明rander函数，实现页面渲染
// function rander(obj,root){
//     var {type,props} = obj;

//     //文档碎片 - 优化形式
//     var fr = document.createDocumentFragment();

//     var ele = document.createElement(type);
//     for(var item in obj.props){
//         if(item === 'class'){
//             ele.className = props[item];
//         }else if(item === 'children'){
//             for(var i = 0;i < props[item].length;i++){
//                 if(typeof props[item][i] === 'object'){
//                     rander(props[item][i],ele);
//                 }else{
//                     var txt = document.createTextNode(props[item][i]);
//                     ele.appendChild(txt);
//                 } 
//             }
//         }else{
//             ele[item] = props[item];
//         }
//     }
//     fr.appendChild(ele);//碎片
//     root.appendChild(fr);
// }
// rander(obj, document.getElementById('root'));



//注意以下性能问题及优化方法

// 加载html文件、浏览器解析html生成DOM树
// link加载CSS文件、解析CSS规则、和DOM树生成render tree（渲染树）、浏览器的渲染引擎渲染render tree

/**回流一定重绘，重绘不一定回流
 * 
 * 页面回流(重排):内容改变/大小改变/结构改变
 * 页面重绘：样式更改/字体颜色背景颜色等 
*/

//1、node.offsetLeft、node.offsetWidth等慎用
//   调用也会产生回流
// var rt = document.getElementById('root');
// var width = rt.offsetWidth;
// setInterval(function(){
//     width += 1;
//     rt.style.width = width +'px';
// },100);

//2、声明一个css的一个类 [声明类 减少回流次数]
// display、width、height、font-size等会引起页面回流
// document.body.style.width = '100px';
// document.body.style.height = '100px';
// 声明一个css的一个类
// .change{
//      width: 100px;
//      height: 100px;
//  }
// document.body.className = 'change';

// 3、对节点的操作先用变量代替
// console.time('a');
// var str = '';
// for(var i=0;i<1000;i++){
//     str += '<li>'+i+'</li>';
// }
// document.body.innerHTML = str;
// console.timeEnd('a');

// 4、文档碎片的概念