import React from 'react'
import {View, Container, Group, List, Grid, Col} from 'amazeui-touch';
import _Header from './../components/_Header'

export default React.createClass({
    render() {
        return (
            <View>
                <_Header/>
                <Container scrollable>
                    <Group noPadded className="margin-0 userDesc">
                        <List>
                            <List.Item
                                className="padding-v"
                                media={
                                    <div className="user-avatar">
                                        <a href="/user/info/01"><img width="65" height="65" src="http://s.amazeui.org/media/i/demos/bing-1.jpg" /></a>
                                        <span className="user-woman"></span>
                                        <span className="user-man hidden"></span>
                                    </div>
                                }
                                after={<button className="btn-yellow">关注</button>}
                                title="用户名用户名用户名用户名"
                            />
                        </List>
                    </Group>
                    <Group noPadded className="margin-0 userTag">
                        <Grid className="padding-v-xs">
                            <Col>
                                <p className="userTagTit">关注</p>
                                <p className="userTagNum">123</p>
                            </Col>
                            <Col className="user-fans">
                                <p className="userTagTit">粉丝</p>
                                <p className="userTagNum">123</p>
                            </Col>
                            <Col>
                                <p className="userTagTit">赞</p>
                                <p className="userTagNum">123</p>
                            </Col>
                        </Grid>
                    </Group>
                    <Group noPadded className="margin-v userNav">
                        <List>
                            <List.Item href="#" title="部落" media={<span className="userNav-bl"></span>}/>
                            <List.Item href="#" title="话题" media={<span className="userNav-ht"></span>}/>
                        </List>
                    </Group>
                    <Group noPadded className="margin-0 userNav">
                        <List>
                            <List.Item href="/user/require/01" title="需求" media={<span className="userNav-xq"></span>}/>
                            <List.Item href="/user/server/01" title="服务" media={<span className="userNav-fw"></span>}/>
                        </List>
                    </Group>
                </Container>
            </View>
        )
    }
})
