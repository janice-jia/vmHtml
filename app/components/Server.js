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
import Header from './Header'

export default React.createClass({
    getInitialState: function(){
        return {}
    },
    render() {
        //var value = this.state.value;
        return <View>
            <Container>
                <Header></Header>
                <div className="server-tabs-list">
                    <Tabs activeKey={this.state.activeTab} onAction={this.handleAction} className="margin-0">
                        <Tabs.Item title='个人' key='1' className="padding-0">
                            <List className="margin-top-0">
                                <List.Item
                                    title = "女爵"
                                    subTitle = "发行公司：环球唱片"
                                    href = "http://www.vmaking.com/"
                                    desc = "服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述服务描述"
                                    target = "_blank"
                                >

                                    <Grid align="between">
                                        <Col cols={2} className="padding-0">
                                            <span className="text-size-12 text-color-4">交易成功</span>
                                        </Col>
                                        <Col cols={2} className=" text-right">
                                            <span className="text-size-12 text-color-4">北京</span>
                                        </Col>
                                    </Grid>
                                </List.Item>
                                <List.Item
                                    title = "女爵"
                                    subTitle = "发行公司：环球唱片"
                                    href = "http://www.vmaking.com/"
                                    desc = "111"
                                    target = "_blank"
                                >
                                    <Grid align="between">
                                        <Col cols={2} className="padding-0">
                                            <span className="text-size-xs text-color-4">交易成功</span>
                                        </Col>
                                        <Col cols={2} className=" text-right">
                                            <span className="text-size-xs text-color-4">北京</span>
                                        </Col>
                                    </Grid>
                                </List.Item>
                            </List>
                        </Tabs.Item>
                        <Tabs.Item title='工作室' key='2' className="padding-0">
                            <List className="margin-top-0">
                                <List.Item
                                    title = "女爵"
                                    subTitle = "发行公司：环球唱片"
                                    href = "http://www.vmaking.com/"
                                    desc = "111"
                                    target = "_blank"
                                >
                                    <Grid align="between">
                                        <Col cols={2} className="padding-0">
                                            <span className="text-size-xs text-color-4">交易成功</span>
                                        </Col>
                                        <Col cols={2} className=" text-right">
                                            <span className="text-size-xs text-color-4">北京</span>
                                        </Col>
                                    </Grid>
                                </List.Item>
                            </List>
                        </Tabs.Item>
                        <Tabs.Item title='企业' key='3' className="padding-0">
                            <List className="margin-top-0">
                                <List.Item
                                    title = "女爵"
                                    subTitle = "发行公司：环球唱片"
                                    href = "http://www.vmaking.com/"
                                    desc = "111"
                                    target = "_blank"
                                >
                                    <Grid align="between">
                                        <Col cols={2} className="padding-0">
                                            <span className="text-size-12 text-color-4">交易成功</span>
                                        </Col>
                                        <Col cols={2} className=" text-right">
                                            <span className="text-size-12 text-color-4">北京</span>
                                        </Col>
                                    </Grid>
                                </List.Item>
                            </List>
                        </Tabs.Item>
                    </Tabs>
                </div>
            </Container>
        </View>;
    }
})
