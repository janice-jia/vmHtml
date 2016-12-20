import React from 'react'
import {View, Container, Group, Field, List, Icon, Grid, Col, Button} from 'amazeui-touch';
import _Header from './../components/_Header'
import ForgetPwdStore from './../stores/ForgetPwdStore'
import ForgetPwdActions from './../actions/ForgetPwdActions'
import $ from 'jquery'

export default React.createClass({
    getInitialState:function () {
        this.state = ForgetPwdStore.getState();
        return {
            'passwordType':'password',
            'passwordIconClass':'icon-pwdHid',
            'btnCode':'点击获取验证码',
            'btnDisabled':''
        }
    },

    showPassword:function () {
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
    //监听手机号码，更改state
    changeMoile : function(event){
        this.setState({mobile: event.target.value});
    },

    //监听密码，更改state
    changePassword : function(event){
        this.setState({password: event.target.value});
    },

    //监听验证码，更改state
    changeCode : function(event){
        this.setState({code: event.target.value});
    },

    //获取验证码
    sendCode : function(){
        var mobileReg =  /^[1][3-9][0-9]{9}$/;
        if(!this.state.mobile){
            alert('请输入手机号！');
        }else if(!mobileReg.test(this.state.mobile)){
            alert('请输入正确的手机号码！');
        }else{
            //发送验证码
            ForgetPwdActions.getCode(this.state.mobile);
            var timeer = 60;
            this.setState({btnCode:'重新发送' + timeer});
            this.setState({btnDisabled:'disabled'});
            if(timeer > 0){
                var _this = this;
                var codeTimeer = setInterval(function(){
                    //console.info(_this.state.btnCode);
                    timeer --;
                    if(timeer == 0 || timeer < 0){
                        _this.setState({btnCode:'点击获取验证码'});
                        _this.setState({btnDisabled:''});
                        clearInterval(codeTimeer);
                    }else{
                        _this.setState({btnCode:'重新发送' + timeer});
                    }
                },1000)
            }
        }
    },

    //提交忘记密码表单
    subForgetPwd: function(event){
        event.preventDefault();
        var mobileReg =  /^[1][3-9][0-9]{9}$/;
        if(!this.state.mobile){
            alert('请输入手机号！');
        }else if(!mobileReg.test(this.state.mobile)){
            alert('请输入正确的手机号码！');
        }else if(!this.state.password){
            alert('请输入密码！');
        }else if(this.state.password.length < 6 || this.state.password.length > 16){
            alert('请输入6-16位密码！');

        //忘记密码
        }else if(!this.state.code){
            alert('请输入验证码！');
        }else if(ForgetPwdActions.checkCode({mobile:this.state.mobile,code:this.state.code})){
            alert('验证码不成功');

            //用户注册
        }else {
            ForgetPwdActions.forgetPwd({
                mobile : this.state.mobile,
                password : this.state.password,
                verificationCode:this.state.code
            });
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
                        <div className="form-register">
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
                                <Grid>
                                    <Col  className="padding-0">
                                        <Field className="auth-code" type="number" placeholder="请输入验证码" onChange={this.changeCode}/>
                                    </Col>
                                    <Col  className="padding-0">
                                        <button disabled={this.state.btnDisabled} ref="codeBtn" className="btn-white margin-0 margin-left-xs text-size-13" onClick={this.sendCode}>{this.state.btnCode}</button>
                                    </Col>
                                </Grid>
                            </List>
                            <Button className="btn-yellow margin-top-xl padding-v" onClick={this.subForgetPwd}>完成</Button>
                        </div>
                    </Group>
                </Container>
            </View>
        )
    }
})
