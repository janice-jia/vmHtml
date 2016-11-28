import React from 'react'
import {Container, Group, Slider, Grid, Col, List, View} from 'amazeui-touch'
import HomeStore from '../stores/HomeStore'
import HomeActions from '../actions/HomeActions'
import _Header from '../components/_Header'
import Swiper from 'swiper'

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = HomeStore.getState();
        this.state.home = [];
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        HomeStore.listen(this.onChange);
        HomeActions.updateHome();
        this.swipe = Swiper(this.refs.swiperContainer,{
            pagination: '.swiper-pagination',
            slidesPerView: 'auto',
            paginationClickable: true,
            spaceBetween: 5
        });
    }

    componentWillUnmount() {
        HomeStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state)
    }
    handleLeftSwipe (e) {
        console.log(e);
    }

    render() {
        return <View>
                <_Header/>
                <Container scrollable className="home">

                    <div className="home-slide">
                        <Slider>
                            <Slider.Item>
                                <a href="#"><img src="http://s.amazeui.org/media/i/demos/bing-1.jpg" /></a>
                            </Slider.Item>
                            <Slider.Item>
                                <a href="#"><img src="http://s.amazeui.org/media/i/demos/bing-2.jpg" /></a>
                            </Slider.Item>
                        </Slider>
                    </div>

                    <div className="home-tribe border-d7d7d7 bgF">
                            <Group noPadded className="margin-0">
                                <h5 className="home-group-header margin-sm">部落</h5>
                                <Group noPadded className="margin-h-xs margin-v-0">
                                    <div ref="swiperContainer"  className="swiper-container">
                                        <div className="swiper-wrapper">
                                            <div className="swiper-slide">
                                                <img src="http://s.amazeui.org/media/i/demos/bing-1.jpg"/>
                                                <p className="home-tribe-name">剑灵部落</p>
                                            </div>
                                            <div className="swiper-slide">
                                                <img src="http://s.amazeui.org/media/i/demos/bing-2.jpg" />
                                                <p className="home-tribe-name">海贼王部落</p>
                                            </div>
                                            <div className="swiper-slide">
                                                <img src="http://s.amazeui.org/media/i/demos/bing-3.jpg" />
                                                <p className="home-tribe-name">魔兽部落</p>
                                            </div>
                                            <div className="swiper-slide">
                                                <img src="http://s.amazeui.org/media/i/demos/bing-4.jpg" />
                                                <p className="home-tribe-name">奇迹王座部落</p>
                                            </div>
                                            <div className="swiper-slide">
                                                <img src="http://s.amazeui.org/media/i/demos/bing-4.jpg" />
                                                <p className="home-tribe-name">奇迹王座部落</p>
                                            </div>
                                        </div>
                                    </div>
                                </Group>
                            </Group>
                    </div>

                    <div className="home-square border-d7d7d7 bgF margin-top-sm">
                        <Group noPadded className="margin-v-0">
                            <h5 className="home-group-header margin-sm">广场</h5>
                            <Grid align="between" className="padding-v-sm home-square-borderT">
                                <Col cols={3}>
                                    <Grid>
                                        <Col  className="home-square-img home-square-require" shrink>
                                        </Col>
                                        <Col className="home-square-btn">
                                            <a className="btn-gray" href="/require">需求</a>
                                            <p>为专业团队提供对接服务</p>
                                        </Col>
                                    </Grid>
                                </Col>
                                <Col cols={3} className="home-square-borderL">
                                    <Grid>
                                        <Col className="home-square-img home-square-server" shrink>
                                        </Col>
                                        <Col className="home-square-btn">
                                            <a className="btn-gray" href="server">服务</a>
                                            <p>原创人网上个性化空间</p>
                                        </Col>
                                    </Grid>
                                </Col>
                            </Grid>
                        </Group>
                    </div>

                    <div className="home-square border-d7d7d7 bgF margin-top-sm hidden">
                        <Group noPadded className="margin-v-0">
                            <h5 className="home-group-header margin-sm">广场</h5>

                            <Grid align="between" className="padding-v-sm">
                                <Col cols={3}>
                                    <button className="btn-yellow">需求</button>
                                </Col>
                                <Col cols={3}>
                                    <button className="btn-blue">服务</button>
                                </Col>
                            </Grid>
                        </Group>
                    </div>

                    <div className="border-d7d7d7 bgF margin-top-sm home-tribe-item">
                        <Group noPadded className="margin-v-0">
                            <List>
                                <List.Item
                                    media={<img className="home-tribe-media" width="44" height="44" src="http://s.amazeui.org/media/i/demos/bing-1.jpg" />}
                                    after={<div className="home-tribe-tag">海贼王部落</div>}
                                    title={<div className="home-tribe-item">
                                        <p className="text-color-3 text-size-14">嗨粉嗨粉嗨粉嗨粉嗨粉嗨粉嗨粉嗨粉嗨粉嗨粉</p>
                                        <p className="text-color-4 text-size-13">1小时前</p>
                                    </div>}
                                />
                                <div className="padding-h margin-v-xs">
                                    <div className="text-size-15 text-color-3">标题名称名称名称</div>
                                    <div className="text-size-13 text-color-2 home-tribe-desc">描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</div>
                                </div>
                                <Grid avg={3}>
                                    <Col className="padding-h padding-top-xs padding-bottom-0">
                                        <img src="http://s.amazeui.org/media/i/demos/bing-1.jpg" />
                                    </Col>
                                    <Col className="padding-h padding-top-xs padding-bottom-0">
                                        <img src="http://s.amazeui.org/media/i/demos/bing-2.jpg" />
                                    </Col>
                                    <Col className="padding-h padding-top-xs padding-bottom-0">
                                        <img src="http://s.amazeui.org/media/i/demos/bing-3.jpg" />
                                    </Col>
                                </Grid>
                                <Grid align="between">
                                    <Col cols={2} className="padding-h text-size-12 text-color-4">
                                        <span className="icon home-icon-view margin-right-xs"></span>
                                        123
                                    </Col>
                                    <Col cols={2} className="padding-h text-size-12 text-color-4 text-right">
                                        <Grid>
                                            <Col>
                                                <span className="icon home-icon-view margin-right-xs"></span>
                                                123
                                            </Col>
                                            <Col>
                                                <span className="icon home-icon-view margin-right-xs"></span>
                                                123
                                            </Col>
                                        </Grid>
                                    </Col>
                                </Grid>
                            </List>
                        </Group>

                    </div>

                    <div className="margin-h margin-v">
                        <Group noPadded className="margin-0">
                            <a className="btn-white" href="/tribe">查看更多</a>
                        </Group>
                    </div>

                    <div className="margin-h margin-v bgNone">
                        <p className="text-center text-size-12 text-color-2">
                            <a href="" className="text-size-12 text-color-2">意见反馈</a>
                            <span className="padding-h-xs text-size-12 text-color-2">|</span>
                            <a href="" className="text-size-12 text-color-2">关于我们</a>
                        </p>
                        <p className="text-center text-size-14 text-color-2">京ICP备14057447号-3</p>
                    </div>
            </Container>
        </View>;
    }
}

export default Home;
