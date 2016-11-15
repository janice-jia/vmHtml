import React from 'react'
import {View, Container, Group, Field, List, Icon, Grid, Col, Button} from 'amazeui-touch';
import Header from './_Header'

export default React.createClass({
    render() {
        return (
            <View>
                <Container>
                    <Header></Header>
                    <Group className="regLog-logo">
                        <div className="regLog-logo-img"></div>
                    </Group>
                    <Group className="bgNone">
                        <form action="">
                            <List>
                                <List.Item key="1" media={<Icon name="person"/>} nested="input" >
                                    <Field type="text" placeholder="请输入您的手机号" />
                                </List.Item>
                                <List.Item key="2" media={<Icon name="person"/>} nested="input" >
                                    <Field type="text" placeholder="请设置6-16位密码" />
                                </List.Item>
                                <List.Item key="3" media={<Icon name="person"/>} nested="input" >
                                    <Field type="text" placeholder="请设置您的用户昵称" />
                                </List.Item>
                                <Grid>
                                    <Col cols={4}>
                                        <Field type="text" placeholder="请设置您的用户昵称" />
                                    </Col>
                                    <Col cols={2}><Button>点击获取验证码</Button></Col>
                                </Grid>
                                <Grid>
                                    <Col shrink className="padding-right-0"><input type="checkbox"/></Col>
                                    <Col>我已阅读并接受众创部落的用户协议</Col>
                                </Grid>
                            </List>
                            <Button className="btn-yellow">注册</Button>
                        </form>
                    </Group>
                </Container>
            </View>
        )
    }
})
