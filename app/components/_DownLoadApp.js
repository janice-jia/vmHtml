import React from 'react'
import { browserHistory, Link } from 'react-router'
import NavLink from './../page/NavLink'
import {NavBar, OffCanvasTrigger, OffCanvas, List, TabBar, Notification, Field, Group, Grid, Col, Button, Icon} from 'amazeui-touch'
import publicFn from '../publicFn'
import UserStore from '../stores/UserStore'
import UserActions from '../actions/UserActions'
import cookie from 'react-cookie'

//公用下载app组件
class _DownLoadApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.state.hiddenDownLoad = false;
    }

    //关闭app下载
    hiddenDownLoad(){
        this.setState({hiddenDownLoad:true});
    }

    render() {
        return <div className={this.state.hiddenDownLoad ? 'hidden' : 'appDownLoad'}>
            <Grid>
                <Col className="text-center"><span className="close" onClick={this.hiddenDownLoad.bind(this)}></span></Col>
                <Col className="text-color-5 text-size-16">众创部落-IP垂直孵化平台</Col>
                <Col><a href="http://a.app.qq.com/o/simple.jsp?pkgname=com.ibanyi" target="_blank"><button className="btn-yellow">下载App</button></a></Col>
            </Grid>
        </div>;
    }
}

export default _DownLoadApp;

