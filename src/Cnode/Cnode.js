import React, { Component } from 'react'
import Cnodetop from './Cnodetop'

export default class Cnode extends Component {
    // constructor(){

    // }
    
    // 容器组件 / UI组件（展示组件）
    // 智能组件 / 木偶组件
    // 容器组件(pages/container)：写逻辑
    // UI组件(components)：展示，写函数组件，直接return react元素 结构
    render() {
        return (
        <div>
            <Cnodetop/>
        </div>   
        )
    }
}
