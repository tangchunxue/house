import React, { Component } from 'react'

export default class Error404 extends Component {
    render() {
        return (
            <div>
                <img style={{width:"100%"}} src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1589641044686&di=67daed0c3d028ea5fbb8beddf3195ba5&imgtype=0&src=http%3A%2F%2Fimg.tukexw.com%2Fimg%2F52fe2db390bdf305.jpg"></img>
                <p style={{fontSize:22}}>
                    <span style={{color:'red'}}>网址有错误></span>请检查地址是否完整或存在多余字符
                </p>
                <p style={{fontSize:22}}>
                    <span style={{color:'red'}}>网址已失效></span>
                    可能页面已删除，活动已下线等
                </p>
            </div>
        )
    }
}
