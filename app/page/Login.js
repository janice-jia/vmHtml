import React from 'react'
import {View, Container, Group, Button, Field, List, Icon} from 'amazeui-touch';
import _Header from './../components/_Header'

export default React.createClass({
    render() {
        return (
            <View>
                <Container>
                    <_Header/>
                    <Group className="regLog-logo">
                        <div className="regLog-logo-img"></div>
                    </Group>
                    <Group className="bgNone">
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
                        </form>
                    </Group>
                </Container>
            </View>
        )
    }
})
