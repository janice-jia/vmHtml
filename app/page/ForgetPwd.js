import React from 'react'
import {View, Container, Group, Field, List, Icon, Grid, Col, Button} from 'amazeui-touch';
import _Header from './../components/_Header'
import $ from 'jquery'

export default React.createClass({
    getInitialState:function () {
        return {
            'passwordType':'password',
            'passwordIconClass':'icon-pwdHid'
        }
    },
    showPassword:function () {
        console.info('this.refspassword',this.refs.password);
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
                        <form action="" className="form-register">
                            <List>
                                <List.Item key="1" className="margin-bottom" media={<Icon className="icon-phone" name=""></Icon>} nested="input" >
                                    <Field type="number" placeholder="请输入您的手机号" />
                                </List.Item>
                            </List>

                            <List>
                                <List.Item key="2" className="margin-bottom" media={<Icon className="icon-pwd" name=""/>} nested="input" >
                                    <Field type={this.state.passwordType} className="password" placeholder="请设置6-16位密码" btnAfter={<Icon className={this.state.passwordIconClass}  name="" onClick={this.showPassword}/>} />
                                </List.Item>
                            </List>

                            <List>
                                <Grid>
                                    <Col  className="padding-0">
                                        <Field className="auth-code" type="number" placeholder="请输入验证码" />
                                    </Col>
                                    <Col  className="padding-0"><Button className="btn-white margin-0 margin-left-xs text-size-13">点击获取验证码</Button></Col>
                                </Grid>
                            </List>
                            <Button className="btn-yellow margin-top-xl padding-v">完成</Button>
                        </form>
                    </Group>
                </Container>
            </View>
        )
    }
})
