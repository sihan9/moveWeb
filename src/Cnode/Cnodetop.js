import React, { Component } from 'react'
import { BrowserRouter as Router,Route,Link,NavLink} from 'react-router-dom'
import "./Cnodetop.css"

export default function Cnodetop () {
    return (
        <div id="topdiv">
            <img src="https://static2.cnodejs.org/public/images/cnodejs_light.svg" style={{height:"30px"}}/>
            <input  type = "text"/>
            <ul id="dhtop">
                {/*<Link to={'/'}></List> */}
                <li>首页</li>
                <li>新手入门</li>
                <li>API</li>
                <li>关于</li>
                <li>注册</li>
                <li>登陆</li>
            </ul>
        </div>
    )
}
