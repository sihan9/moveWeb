import React,{Component,Fragment} from 'react';

//类定义组件
export default class ShowTime extends Component{
    constructor(props){
        super(props);
        this.state = {
            time:new Date().toLocaleTimeString()
        }
        //自己写的函数需要用this进行绑定
        // this.handleClick = this.handleClick.bind(this);
        console.log('constructor',this.props.word);
    }
    componentDidMount(){
        console.log('componentDidMount');
        setTimeout(()=>{
            console.log('1');
            this.setState({
                time:new Date().toLocaleTimeString()
            })
        },1000)
    }
    shouldComponentUpdate(){
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log('getsnapshot');
        return ''
    }
    componentDidUpdate(){
        console.log('didupdate');
    }
    handleClick = (num,e)=>{//自己声明的方法
        console.log(num,e);
        console.log('点击成功');
    }
    divClick(num,e){
        console.log(num,e);
        console.log('点击成功');
    }
    render(){
        console.log('render');
        return (
            <Fragment>
                {/* <div onClick = {this.handleClick(1,this)}>{this.state.time}</div> */}
                <div onClick = {(ev) => this.handleClick(1,ev)}>{this.state.time}</div>
                <div onClick ={this.divClick.bind(this,333)}>hello{this.props.word}</div>
            </Fragment>
        )

    }
}
//默认导出，只能导出一次 
// export default ShowTime;
//命名导出，可写多个，{可以多个，..，}
// export {ShowTime}; //引入import {ShowTime} from './class1';