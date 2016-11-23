import React from 'react'
import {View, Container, Tabs} from 'amazeui-touch';
import _Header from './../components/_Header'
import _Require from './../components/_Require'

//需求数据
const requireList = [
    {
        title: '12345元',
        subTitle: '名称',
        href: '/require/info/01',
        desc: '需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述需求描述',
        target: '_blank',
        after:'保证金300元',
        bottomLeft:'招募创作人',
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

export default React.createClass({
    getInitialState: function(){
        return {}
    },
    render() {
        return (
            <View>
                <_Header/>
                <Container scrollable>
                    <div className="require-tabs-list">
                    <Tabs activeKey={this.state.activeTab} onAction={this.handleAction} className="margin-0">
                        <Tabs.Item title='发布的需求' key='1' className="padding-0">
                            <_Require requireList={requireList}></_Require>
                        </Tabs.Item>
                        <Tabs.Item title='参与的需求' key='2' className="padding-0">
                            <_Require requireList={requireList}></_Require>
                        </Tabs.Item>
                    </Tabs>
                    </div>
                </Container>
            </View>
        )
    }
})
