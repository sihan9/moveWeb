import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Portals from './Portals'

export default class ParentPortal extends Component {
    cli = ()=>{
        console.log('ParentPortal click');
    }
    render() {
        return (
            <div onClick={this.cli}>
                {/* <Portals/> */}
                {/* 双标签中的子元素在子组件中可以通过props.children找到*/}
                <Portals><h1>音乐</h1></Portals>
                <Portals><li>列表</li></Portals>
            </div>
        )
    }
}
