import React, { Component } from 'react';
import {List,InputItem,Button,WhiteSpace, Flex, Checkbox,} from 'antd-mobile';
import { Link } from 'react-router-dom';
const AgreeItem = Checkbox.AgreeItem;
export default class Reg extends Component {
    render() {
        return (
            <div className="reg" style={{background:"white",height:"100%"}}>
                <List style={{marginLeft:"20px",marginRight:"20px",paddingTop:"30px",borderTop:"none"}}>
                    <InputItem type="phone" placeholder="请输入手机"></InputItem>
                    <InputItem type="password" placeholder="请输入密码"></InputItem>
                    <InputItem type="number" placeholder="请输入验证码"></InputItem>
                    <WhiteSpace />
                    <Flex>
                        <Flex.Item>
                            <AgreeItem data-seed="logId">

                                <span style={{color:"#888",fontSize:"12px"}}>我已同意</span>
                                <span style={{color:"#1AAF49",fontSize:"12px"}}>《用户服务协议》及《隐私权政策》</span>
                            </AgreeItem>
                        </Flex.Item>
                    </Flex><WhiteSpace />
                    <Button style={{backgroundColor:"#1AAF49",color:"white"}}>注册</Button>
                    <WhiteSpace />
                    <p>
                        <Link to="/login" style={{color:"#1AAF49"}}>已有账号</Link>
                    </p>

                </List>

            </div>
        )
    }
}
