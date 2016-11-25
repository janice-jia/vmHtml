import React from 'react'
import {View, Container, Group, Field, List, Icon, Grid, Col, Button} from 'amazeui-touch';
import _Header from './../components/_Header'

export default React.createClass({
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
                                    <Field type="password" placeholder="请设置6-16位密码" btnAfter={<Icon className="icon-pwdHid" name=""/>} onClick={this.showPassword.bind(this)}/>
                                </List.Item>
                            </List>

                            <List>
                                <List.Item key="3" className="margin-bottom" media={<Icon className="icon-nickname" name=""/>} nested="input" >
                                    <Field type="text" placeholder="请设置您的用户昵称" />
                                </List.Item>
                            </List>

                            <List>
                                <Grid>
                                    <Col  className="padding-0">
                                        <Field className="auth-code" type="number" placeholder="请输入验证码" />
                                    </Col>
                                    <Col  className="padding-0"><Button className="btn-white margin-0 margin-left-xs text-size-13">点击获取验证码</Button></Col>
                                </Grid>
                                <Grid>
                                    <Col shrink className="padding-h-0"><input type="checkbox" className="input-terms"/></Col>
                                    <Col>我已阅读并接受众创部落的 <a className="text-color-6">用户协议</a></Col>
                                </Grid>
                            </List>
                            <Button className="btn-yellow margin-top-xl padding-v">注册</Button>
                        </form>
                    </Group>
                </Container>
            </View>
        )
    }
})
