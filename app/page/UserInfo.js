import React from 'react'
import {View, Container, Group, List, Icon, Field, Button} from 'amazeui-touch';
import _Header from './../components/_Header'

export default React.createClass({
    render() {
        return (
            <View>
                <_Header/>
                <Container scrollable>
                    <Group noPadded className="bgNone  userInfo margin-0">
                        <List className="padding-0">
                            <List.Item key="1" media={<Icon name="">用户名</Icon>}>
                                <p>明明</p>
                            </List.Item>
                        </List>
                        <List>
                            <List.Item key="1" media={<Icon name="">年龄</Icon>}>
                                <p>22</p>
                            </List.Item>
                        </List>
                        <List>
                            <List.Item key="1" media={<Icon name="">所在地区</Icon>}>
                                <p>北京</p>
                            </List.Item>
                        </List>
                        <List>
                            <List.Item key="1" media={<Icon name="">个人简介</Icon>}>
                                <p>个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介个人简介</p>
                            </List.Item>
                        </List>
                    </Group>
                </Container>
            </View>
        )
    }
})
