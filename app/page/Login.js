import React from 'react'
import {View, Container, Group, Button, Field, List, Icon} from 'amazeui-touch';
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
                    <Group className="bgNone margin-bottom-0">
                        <form action="" className="form-login">
                            <List>
                                <List.Item key="1" className="margin-bottom" media={<Icon name="">手机号</Icon>} nested="input" >
                                    <Field type="number"/>
                                </List.Item>
                            </List>
                            <List>
                                <List.Item key="1" className="margin-bottom" media={<Icon name="">密码</Icon>} nested="input" >
                                    <Field type="password"/>
                                </List.Item>
                            </List>
                            <Button className="btn-yellow margin-top-xl padding-v">登录</Button>
                            <p className="forgetPwd text-size-13"><a href="/forgetpwd">忘记密码？</a></p>
                        </form>
                    </Group>
                    <Group className="registerNow bgNone margin-v-xs">
                        <p className="text-size-13 text-color-2">您还没有账号？现在<a href="/register"> 注册</a></p>
                    </Group>
                </Container>
            </View>
        )
    }
})
