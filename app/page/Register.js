import React from 'react'
import {View, Container, Group, Field, List, Icon, Grid, Col, Button} from 'amazeui-touch';
import _Header from './../components/_Header'
import $ from 'jquery'
import RegisterActions from '../actions/RegisterActions'
import RegisterStore from '../stores/RegisterStore'

export default React.createClass({
    getInitialState : function () {
        this.state = RegisterStore.getState();
        return {
            'passwordType':'password',
            'passwordIconClass':'icon-pwdHid'
        }
    },

    //密码隐藏显示
    showPassword : function () {
        if(this.state.passwordType == 'password'){
            this.setState({
                'passwordType':'text',
                'passwordIconClass':'icon-pwdShow'
            });
        }else{
            this.setState({
                'passwordType':'password',
                'passwordIconClass':'icon-pwdHid'
            });
        }

    },

    //提交注册表单验证
    subRegister : function(){
        console.info('this.refs.mobile',this.refs.mobile.getValue());
        var mobileReg = /^1\d{10}$/;
        if(!this.state.mobile){
            alert('请输入手机号！');
        }else if(!mobileReg.test(this.state.mobile)){
            alert('请输入正确的手机号码！');
        }else if(!this.state.password){
            alert('请输入密码！');
        }else if(this.state.password.length < 6 || this.state.password.length > 16){
            alert('请设置6-16位密码！');
        }else if(!this.state.nickName){
            alert('请输入昵称！');
        }else if(!this.state.code){
            alert('请输入验证码！');
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

    //监听昵称，更改state
    changeNickName : function(event){
        this.setState({nickName: event.target.value});
    },

    //监听验证码，更改state
    changeCode : function(){
        this.setState({code: event.target.value});
    },

    //获取验证码
    sendCode : function(){
        var mobileReg = /^1\d{10}$/;
        if(!this.state.mobile){
            alert('请输入手机号！');
        }else if(!mobileReg.test(this.state.mobile)){
            alert('请输入正确的手机号码！');
        }else{
            RegisterActions.getCode(this.state.mobile);
        }
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
                    <Group className="bgNone">
                        <div  className="form-register">
                            <List>
                                <List.Item key="1" className="margin-bottom" media={<Icon className="icon-phone" name=""></Icon>} nested="input" >
                                    <Field ref="mobile" type="number" placeholder="请输入您的手机号" onChange={this.changeMoile}/>
                                </List.Item>
                            </List>

                            <List>
                                <List.Item key="2" className="margin-bottom" media={<Icon className="icon-pwd" name=""/>} nested="input" >
                                    <Field ref="password" type={this.state.passwordType} className="password" placeholder="请设置6-16位密码" btnAfter={<Icon className={this.state.passwordIconClass}  name="" onClick={this.showPassword}/>} onChange={this.changePassword}/>
                                </List.Item>
                            </List>

                            <List>
                                <List.Item key="3" className="margin-bottom" media={<Icon className="icon-nickname" name=""/>} nested="input" >
                                    <Field ref="nickName" type="text" placeholder="请设置您的用户昵称" onChange={this.changeNickName}/>
                                </List.Item>
                            </List>

                            <List>
                                <Grid>
                                    <Col  className="padding-0">
                                        <Field ref="code" className="auth-code" type="number"  placeholder="请输入验证码" onChange={this.changeCode}/>
                                    </Col>
                                    <Col  className="padding-0"><Button className="btn-white margin-0 margin-left-xs text-size-13" onClick={this.sendCode}>点击获取验证码</Button></Col>
                                </Grid>
                                <Grid>
                                    <Col shrink className="padding-h-0"><input type="checkbox" className="input-terms"/></Col>
                                    <Col>我已阅读并接受众创部落的 <a className="text-color-6">用户协议</a></Col>
                                </Grid>
                            </List>
                            <Button className="btn-yellow margin-top-xl padding-v" onClick={this.subRegister}>注册</Button>
                        </div>
                    </Group>
                </Container>
            </View>
        )
    }
})
