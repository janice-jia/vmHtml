import React from 'react'
import {View, Container, Group, Field, List, Icon, Grid, Col, Button} from 'amazeui-touch';
import _Header from './../components/_Header'
import _DownLoadApp from './../components/_DownLoadApp'
import RegisterActions from '../actions/RegisterActions'
import RegisterStore from '../stores/RegisterStore'

export default React.createClass({
    getInitialState : function () {
        this.state = RegisterStore.getState();
        return {
            'passwordType':'password',
            'passwordIconClass':'icon-pwdHid',
            'btnCode':'点击获取验证码',
            'btnDisabled':''
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
        var mobileReg =  /^[1][3-9][0-9]{9}$/;
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
        }else if(!this.state.agreement){
            alert('请阅读并接受众创部落的用户协议！');

        //校验验证码
        }else if(RegisterActions.checkCode({mobile:this.state.mobile,code:this.state.code})){
            alert('验证码不成功');

        //用户注册
        }else{
            RegisterActions.register({
                mobile : this.state.mobile,
                password : this.state.password,
                nickName : this.state.nickName,
                category : 1,
            })
            if(this.state.userInfo.uid){
                location.href = "/user/"+this.state.userInfo.uid
            }
        }
    }
    ,

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
    changeCode : function(event){
        this.setState({code: event.target.value});
    },

    //监听用户协议选中状态，更改state
    changeAgreement : function(event){
        this.setState({agreement: event.target.checked});
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
            RegisterActions.getCode(this.state.mobile);
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
                                    <Col  className="padding-0"><button disabled={this.state.btnDisabled} ref="codeBtn" className="btn-white margin-0 margin-left-xs text-size-13" onClick={this.sendCode}>{this.state.btnCode}</button></Col>
                                </Grid>
                                <Grid>
                                    <Col shrink className="padding-h-0">
                                        <input ref="agreement"  type="checkbox" className="input-terms" onChange={this.changeAgreement}/>
                                    </Col>
                                    <Col>我已阅读并接受众创部落的 <a className="text-color-6" href="/agreement" target="_blank">用户协议</a></Col>
                                </Grid>
                            </List>
                            <Button className="btn-yellow margin-top-xl padding-v" onClick={this.subRegister}>注册</Button>
                        </div>
                    </Group>
                    <_DownLoadApp></_DownLoadApp>
                </Container>
            </View>
        )
    }
})
