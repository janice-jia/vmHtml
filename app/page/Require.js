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
import _Header from './../components/_Header';
import _Require from '../components/_Require'


//个人需求数据
const personalList = [
    {
        title: '12345元',
        subTitle: '名称',
        href: '/require/info/01',
        desc: '需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述',
        target: '_blank',
        bottomLeft:'交易成功',
        bottomRight:'剩余50天'
    },
    {
        title: "女爵",
        subTitle: "发行公司：环球唱片",
        href: "/require/info/01",
        desc: "需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述",
        target: "_blank",
        bottomLeft:'征集作品',
        bottomRight:'剩余50天'
    }
];

//工作室需求数据
const studioList = [
    {
        title: "女爵",
        subTitle: "发行公司：环球唱片",
        href: "/require/info/01",
        desc: "111",
        target: "_blank",
        bottomLeft:'交易成功',
        bottomRight:'北京'
    }
];

//企业需求数据
const companyList = [
    {
        title: "女爵",
        subTitle: "发行公司：环球唱片",
        href: "/require/info/01",
        desc: "111",
        target: "_blank",
        bottomLeft:'交易成功',
        bottomRight:'北京'
    }
];
export default React.createClass({
    getInitialState: function(){
        return {}
    },
    render() {
        return <View>
            <Container>
                <_Header/>
                <div className="require-tabs-list">
                    <Tabs activeKey={this.state.activeTab} onAction={this.handleAction} className="margin-0">
                        <Tabs.Item title='个人' key='1' className="padding-0">
                            <_Require requireList={personalList}></_Require>
                        </Tabs.Item>
                        <Tabs.Item title='工作室' key='2' className="padding-0">
                            <_Require requireList={studioList}></_Require>

                        </Tabs.Item>
                        <Tabs.Item title='企业' key='3' className="padding-0">
                            <List className="margin-top-0">
                                <_Require requireList={companyList}></_Require>
                            </List>
                        </Tabs.Item>
                    </Tabs>
                </div>
            </Container>
        </View>;
    }
})


