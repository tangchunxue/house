import React, { Component } from 'react'
import { HashRouter, Route ,Switch} from 'react-router-dom'
// 引入页面
import Login from '../pages/login/Login'
import Nav from '../pages/nav/Nav'
import City from '../pages/city/City'
import Reg from '../pages/reg/Reg'
import Error404 from '../pages/error404/Error404'

export default class MainRouter extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" exact component={Nav}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/reg" component={Reg}></Route>
                    <Route path="/city" component={City}></Route>
                    {/* 链接错误时 方式一：跳转错误页面*/}
                    <Route component={Error404}></Route>
                    {/* 方式二：默认首页 */}
                    {/* <Route component={Nav}></Route> */}

                </Switch>
            </HashRouter>
        )
    }
}
