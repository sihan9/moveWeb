import React, { Component } from 'react'
// import { BrowserRouter as Router,Route,Link} from 'react-router-dom';
import { HashRouter as Router,Route,Link,Switch,Redirect,withRouter} from 'react-router-dom';
import {Button} from 'antd'

import Request from './Request'
import Hoc from './Hoc/Hoc';
import Todolist from './Todolist/Todolist'
import Sider from './Sider';
import NoMatch from './NoMatch'
import topics from './Router//topics'
import UserInfor from './Router/UserInfor'
import Hooks from './Router/Hooks';

//antd使用：
//1、下载安装antd框架：npm i antd
//2、在某个css里引入antd的css：@import '~antd/dist/antd.css';
//3、在需要的组件内import相应的组件，然后使用：import {Button} from 'antd'

function login(props){
    console.log(props);
    return <button>登陆</button>
}
//一个函数传入一个组件返回一个组件————高阶组件
let LoginWithRouter = withRouter(login);

export default class App extends Component {
    render() {
        return (        
            //所有路由的组件都得方在BrowserRouter
            //router里面只能有一个元素
            <Router basename='moveWeb'>     
                <div>
                    {/* <UserInfor name='zhangsan'/> */}
                    {/* <Button type="primary">Primary</Button> */}
                    <LoginWithRouter/>
                    <Hooks/>
                    <Sider/>
                    <div style ={{margLeft:50,float:'left',border: '2px solid red'}}>
                    {/*component={Todolist}/rander={()=><Todolist>}实现效果一样,写那个都行*/}
                        <Switch>
                            <Route exact path='/' component={Todolist}/>
                            <Route path='/hoc' component={Hoc}/>
                            <Route path='/request' component={Request}/>
                            <Route path='/userinfor/:id' component={UserInfor}/>
                            <Route path='/topic/:page' component={topics}/>
                            {/* <Route path='/hooks/:id' component={Hooks}/> */}
                            <Redirect from = '/old' to = 'hoc'/>
                            <Route component={NoMatch}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}
