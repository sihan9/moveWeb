import React, { Component } from 'react'
import ReactDOM from 'react-dom'

export default class Portals extends Component {
    cli = ()=>{
        console.log('Portals click');
    }
    render() {
        console.log(this);
        return (
            //可以将内容放在页面中任意结构下
            //不局限于被引入时的位置
            // <div> out Portals</div>
            ReactDOM.createPortal(
                <div onClick={this.cli}>{this.props.children}</div>,
                document.body
            )  
        )
    }
}
