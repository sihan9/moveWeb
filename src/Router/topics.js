import React, { Component } from 'react'

export default class topics extends Component {
    constructor(props){
        super(props);
        this.state={
            data:[]
        }
    }
    componentDidMount() {
        //只在开始是执行一次
        let page = this.props.match.params.page;
        fetch('https://cnodejs.org/api/v1/topics?page='+page)
        .then((res)=>res.json())
        .then((res)=>{
            // console.log(res.data);
            this.setState({
                data:res.data
            })
        });
    }
    // shouldComponentUpdate(nextprops,thisprops){
    //     if(next)
    // }
    componentDidUpdate(prevProps,prevState) {//在更新时进行
        // console.log(prevProps,this.props);
        if(prevProps.match.params.page!==this.props.match.params.page){
            let page = this.props.match.params.page;
            fetch('https://cnodejs.org/api/v1/topics?page='+page)
            .then((res)=>res.json())
            .then((res)=>{
                // console.log(res.data);
                this.setState({
                    data:res.data
                })
            });
        };
    }
    render() {
        return (
            <div>
                {
                    // topics{this.props.match.params.page}
                    this.state.data.map((item)=>(
                        <div style={{width:800,overflow:'left'}} dangerouslySetInnerHTML={{__html:item.content}}></div>
                    ))
                }
            </div>
        )
    }
}
