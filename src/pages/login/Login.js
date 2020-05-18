import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {List,InputItem,Button,WhiteSpace} from 'antd-mobile';
// import qs from 'qs';
// import axios from 'axios'
import {login} from '../../api/apis'
import lockUrl from '../../assets/imgs/lock.png'
import userUrl from '../../assets/imgs/username.png'
import './Login.scss'



    export default class Login extends Component {
        state={
            acc:"",
            pwd:"", 
            isClick: false,
        }
        accChange=(val)=>{
            this.setState({acc:val})
        }
        pwdChange=(val)=>{
            this.setState({pwd:val})
        }
        clickLogin = async () => {
            const { pwd, acc } = this.state
            if (this.state.isClick) {
              return
            }
            this.setState({ isClick: true })
            setTimeout(() => {
              this.setState({ isClick: false })
            }, 2 * 1000)
            if (!pwd || !acc) {
              Toast.fail('请输入密码或用户名', 2)
              return
            }
            const { data } = await login({ pwd, acc })
            if (data === 'ok') {
              Toast.success('登陆成功', 2)
              this.props.history.push({
                pathname: '/',
                query: { acc, pwd },
              })
            } else {
              Toast.fail('登陆失败', 2)
            }
        }
        componentDidMount() {
            if (!this.props.location.query) {
              return
            }
            this.setState({
              ...this.props.location.query,
            })
        }

       
        render() {
           let {acc,pwd}=this.state
            return (
                <div className="login">
                    <div className="logo">
                        <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589643670839&di=3b65f12bc997cfe7f4ae159d03973006&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201706%2F03%2F20170603124648_24Fus.thumb.700_0.jpeg"></img>
                    </div>
                    <div>
                        <List style={{marginLeft:"20px",marginRight:"20px",marginTop:"30px"}}>
                            <InputItem placeholder="请输入手机号" clear value={acc} onChange={this.accChange}>
                                <div style={{ backgroundImage: `url(${userUrl})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                            </InputItem>
                            <InputItem placeholder="请输入密码" clear value={pwd} onChange={this.pwdChange}>
                                <div style={{ backgroundImage:`url(${lockUrl})`, backgroundSize: 'cover', height: '22px', width: '22px' }} />
                            </InputItem><WhiteSpace />
                            <Button style={{backgroundColor:"#1AAF49",color:"white"}} onClick={this.clickLogin}>登陆</Button>
                        </List>
                    </div>
                    <div style={{color:"#1AAF49",fontSize:"16px"}} className="text">
                        <Link to="/reg" style={{color:"#1AAF49"}}>手机快速注册</Link>
                        <span>忘记密码</span>
                    </div>
                    <div className="footer">
                        登陆/注册即代表同意《源码房产用户协议》
                    </div>
                </div>
            )
        }
        
    }
