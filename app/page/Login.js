import React from 'react'
import {View, Container, Group, Button, Field, List, Icon} from 'amazeui-touch';
import _Header from './../components/_Header'
import LoginStore from '../stores/LoginStore'
import LoginActions from '../actions/LoginActions'
import $ from 'jquery';

export default React.createClass({
    getInitialState : function () {
        return {}
    },
    subLogin(){
        var mobileReg =  /^[1][3-9][0-9]{9}$/;
        if(!this.state.mobile){
            alert('请输入手机号！');
        }else if(!mobileReg.test(this.state.mobile)){
            alert('请输入正确的手机号码！');
        }else if(!this.state.password){
            alert('请输入密码！');
        }else if(this.state.password.length < 6 || this.state.password.length > 16){
            alert('请输入6-16位密码！');

        //用户注册
        }else {
            LoginActions.login({
                mobile : this.state.mobile,
                password : this.state.password,
            });
        }
    },
    //监听手机号码，更改state
    changeMoile : function(event){
        this.setState({mobile: event.target.value});
    },

    //监听密码，更改state
    changePassword : function(event){
        this.setState({password: event.target.value});
    },

    render() {
        return (
            <View>
                <_Header/>
                <Container scrollable>
                    <Group className="regLog-logo">
                        <div className="regLog-logo-box">
                            <div className="regLog-logo-img"></div>
                        </div>
                    </Group>
                    <Group className="bgNone margin-bottom-0">
                        <div className="form-login">
                            <List>
                                <List.Item key="1" className="margin-bottom" media={<Icon name="">手机号</Icon>} nested="input" >
                                    <Field type="number" onChange={this.changeMoile}/>
                                </List.Item>
                            </List>
                            <List>
                                <List.Item key="1" className="margin-bottom" media={<Icon name="">密码</Icon>} nested="input" >
                                    <Field type="password" onChange={this.changePassword}/>
                                </List.Item>
                            </List>
                            <Button className="btn-yellow margin-top-xl padding-v" onClick={this.subLogin}>登录</Button>
                            <p className="forgetPwd text-size-13"><a href="/forgetpwd">忘记密码？</a></p>
                        </div>
                    </Group>
                    <Group className="registerNow bgNone margin-v-xs">
                        <p className="text-size-13 text-color-2">您还没有账号？现在<a href="/register"> 注册</a></p>
                    </Group>
                </Container>
            </View>
        )
    }
})
