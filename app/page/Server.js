import React from 'react'
import {
    Button,
    View,
    Container,
    Tabs,
    Group,
    List,
    Grid,
    Col
} from 'amazeui-touch';
import _Header from './../components/_Header'
import _Server from '../components/_Server'



//个人服务数据
const personalList = [
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

//工作室服务数据
const studioList = [
    {
        title: "女爵",
        subTitle: "发行公司：环球唱片",
        href: "/server/info/01",
        desc: "111",
        target: "_blank",
        bottomLeft:'交易成功',
        bottomRight:'北京'
    }
];

//企业服务数据
const companyList = [
    {
        title: "女爵",
        subTitle: "发行公司：环球唱片",
        href: "/server/info/01",
        desc: "111",
        target: "_blank",
        bottomLeft:'交易成功',
        bottomRight:'北京'
    }
];

export default React.createClass({
    contextTypes: {
        router: React.PropTypes.object
    },

    getInitialState: function(){
        return {}
    },
    render() {
        return <View>
            <Container>
                <_Header></_Header>
                <div className="server-tabs-list">
                    <Tabs activeKey={this.state.activeTab} onAction={this.handleAction} className="margin-0">
                        <Tabs.Item title='个人' key='1' className="padding-0">
                            <_Server serverList={personalList}></_Server>
                        </Tabs.Item>
                        <Tabs.Item title='工作室' key='2' className="padding-0">
                            <_Server serverList={studioList}></_Server>
                        </Tabs.Item>
                        <Tabs.Item title='企业' key='3' className="padding-0">
                            <_Server serverList={companyList}></_Server>
                        </Tabs.Item>
                    </Tabs>
                </div>
            </Container>
            {this.props.children}
        </View>;
    }
})
