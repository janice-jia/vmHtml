import React from 'react'
import {View, Container} from 'amazeui-touch';
import _Header from './../components/_Header'
import _Server from './../components/_Server'


//服务数据
const serverList = [
    {
        title: '女爵',
        subTitle: '名称',
        href: '/server/info/01',
        desc: '服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述',
        target: '_blank',
        bottomLeft:'交易成功',
        bottomRight:'剩余50天'
    },
    {
        title: "女爵",
        subTitle: "发行公司：环球唱片",
        href: "/server/info/01",
        desc: "服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述",
        target: "_blank",
        bottomLeft:'征集作品',
        bottomRight:'剩余50天'
    }
];

export default React.createClass({
    render() {
        return (
            <View>
                <_Header/>
                <Container scrollable>
                    <_Server serverList={serverList}></_Server>
                </Container>
            </View>
        )
    }
})
