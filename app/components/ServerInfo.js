import React from 'react'
import {
    View,
    Container,
    Grid,
    Col,
    Group,
    List
} from 'amazeui-touch';
import Header from './Header'

export default React.createClass({
    render() {
        const { serverId } = this.props.params
        const img = <img className="server-user-avatar" width="44" height="44" src="http://s.amazeui.org/media/i/demos/bing-1.jpg" />
        const tit = (
            <div className="server-user-name">
                <p className="text-color-3 text-size-14">嗨粉嗨粉嗨粉嗨粉嗨粉嗨粉嗨粉嗨粉嗨粉嗨粉</p>
                <p className="text-color-4 text-size-13">北京</p>
            </div>
        )
        const btn = <div className="server-user-tag">关注</div>
        return <View>
            <Container>
                <Header></Header>
                    <div  className="border-d7d7d7 bgF server-info-user">
                        <List.Item
                            media={img}
                            after={btn}
                            title={tit}
                        />
                    </div>
                    <Group noPadded className="margin-0">
                        <div className="server-info text-size-14">
                            <Grid className="padding-v margin-left">
                                <Col shrink className="padding-left-0 server-info-tit-l text-color-4">服务名称</Col>
                                <Col className="padding-left-0 text-color-3">名称名称名称名称</Col>
                            </Grid>
                            <Grid className="padding-v margin-left">
                                <Col shrink className="padding-left-0 server-info-tit-l text-color-4">擅长技能</Col>
                                <Col className="padding-left-0 text-color-3">技能名称，技能名称，技能名称，技能名称，技能名称，技能名称</Col>
                            </Grid>
                            <Grid className="padding-v margin-left">
                                <Col shrink className="padding-left-0 server-info-tit-l text-color-4">酬劳模式</Col>
                                <Col className="padding-left-0 text-color-5">100元每小时</Col>
                            </Grid>
                            <Grid className="padding-v margin-left">
                                <Col shrink className="padding-left-0 server-info-tit-l text-color-4">服务类型</Col>
                                <Col className="padding-left-0 text-color-3">个人服务</Col>
                            </Grid>
                            <Grid className="padding-v margin-left">
                                <Col shrink className="padding-left-0 server-info-tit-l text-color-4">服务详情</Col>
                                <Col className="padding-left-0 text-color-3">服务描述服务描述服务描述服务描述</Col>
                            </Grid>
                            <Grid className="padding-v margin-left">
                                <Col shrink className="padding-left-0 server-info-tit-l text-color-4">代表作品</Col>
                                <Col className="padding-left-0 text-color-3">
                                    <Grid className="border-none">
                                        <Col>
                                            <img src="http://s.amazeui.org/media/i/demos/bing-1.jpg"/>
                                        </Col>
                                        <Col>
                                            <img src="http://s.amazeui.org/media/i/demos/bing-2.jpg"/>
                                        </Col>
                                        <Col>
                                            <img src="http://s.amazeui.org/media/i/demos/bing-3.jpg"/>
                                        </Col>
                                    </Grid>
                                </Col>
                            </Grid>
                        </div>
                    </Group>


            </Container>
        </View>;
    }
})
