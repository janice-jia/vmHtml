import React from 'react'
import {Container, Group, Slider, Grid, Col, List, View} from 'amazeui-touch'
import HomeStore from '../stores/HomeStore'
import HomeActions from '../actions/HomeActions'
import _Header from '../components/_Header'
import { Swiper, Slide } from 'react-dynamic-swiper'
import _Moment from '../components/_Moment'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = HomeStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        HomeStore.listen(this.onChange);
        HomeActions.getSlide();
        HomeActions.getTribe();
        HomeActions.getTopic(1);
    }


    componentWillUnmount() {
        HomeStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    //查看更多话题
    loadTopic() {
        if(!this.state.lastPage){
            HomeActions.getTopic(this.state.topicPage+1);
        }
    }

    render() {
        return <View>
            <_Header/>
            <Container scrollable className="home">
                <div className="home-slide">
                    <Slider>
                        {
                            this.state.slideList.map((item,i) =>{
                                return  <Slider.Item key={i}>
                                    <a href="#"><img src="http://s.amazeui.org/media/i/demos/bing-1.jpg"/></a>
                                </Slider.Item>;
                            })
                        }
                    </Slider>
                </div>

                <div className="home-tribe border-d7d7d7 bgF">
                    <Group noPadded className="margin-0">
                        <h5 className="home-group-header margin-sm">部落</h5>
                        <Group noPadded className="margin-h-xs margin-v-0">
                            <Swiper
                                swiperOptions={{slidesPerView:'auto'}}
                                navigation={false}
                                pagination={false}
                            >
                                {
                                    this.state.tribeList.map((item, i) => {
                                        return <Slide key={i}>
                                            <div className="swiper-slide">
                                                <a href={'/tribe/info/'+item.id}><img src={item.logo}/></a>
                                                <a href={'/tribe/info/'+item.id}><p className="home-tribe-name">{item.title}</p></a>
                                            </div>
                                        </Slide>
                                    })
                                }
                            </Swiper>
                        </Group>
                    </Group>
                </div>

                <div className="home-square border-d7d7d7 bgF margin-top-sm">
                    <Group noPadded className="margin-v-0">
                        <h5 className="home-group-header margin-sm">广场</h5>
                        <Grid align="between" className="padding-v-sm home-square-borderT">
                            <Col cols={3}>
                                <Grid>
                                    <Col className="home-square-img home-square-require" shrink>
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

                <div className="margin-top-sm home-topic-list">

                        <List className="margin-0">
                            {
                                this.state.topicList.map((item, i) => {
                                    return <Group noPadded className="margin-v bgF border-d7d7d7" key={i}>
                                        <List.Item
                                            media={<a href={'/user/'+item.uid}><img className="home-topic-media" width="44" height="44" src={item.userAvatar} /></a>}
                                            after={<div className="home-topic-tag"><a href={'/tribe/info/'+item.tribesId}></a>{item.tribeName}</div>}
                                            title={<div className="home-topic-item">
                                                <p className="text-color-3 text-size-14"><a href={'/user/'+item.uid}>{item.userName}</a></p>
                                                <p className="text-color-4 text-size-13"><_Moment momentTime={item.createTime}></_Moment></p>
                                            </div>}
                                        />
                                        <div className="padding-h margin-v-xs">
                                            <div className="text-size-15 text-color-3 margin-bottom-xs home-topic-tit">
                                                <a href={'/tribe/topic/'+item.id}>{item.title}</a>
                                            </div>
                                            <div className="text-size-13 text-color-2 home-topic-desc">
                                                <a href={'/tribe/topic/'+item.id}>{item.description}</a>
                                            </div>
                                        </div>
                                        <Grid avg={3}>
                                            {
                                                item.topicPic.map( (topicPic, topicPicI) => {
                                                    return <Col key={topicPicI} className="padding-h padding-top-xs padding-bottom-0">
                                                        <a href={'/tribe/topic/'+item.id}><img src={topicPic}/></a>
                                                    </Col>
                                                })
                                            }

                                        </Grid>
                                        <Grid align="between" className="margin-v-xs">
                                            <Col cols={2} className="padding-h text-size-12 text-color-4">
                                                <span className="icon home-icon-view margin-right-xs"></span>
                                                {item.lookNum}
                                            </Col>
                                            <Col cols={2} className="padding-h text-size-12 text-color-4 text-right">
                                                <Grid>
                                                    <Col>
                                                        <span
                                                            className="icon home-icon-fabulous margin-right-xs"></span>
                                                        {item.like}
                                                    </Col>
                                                    <Col>
                                                        <span className="icon home-icon-comment margin-right-xs"></span>
                                                        {item.commentAmount}
                                                    </Col>
                                                </Grid>
                                            </Col>
                                        </Grid>
                                    </Group>
                                })
                            }

                        </List>


                </div>

                <div className="margin-h margin-v">
                    <Group noPadded className="margin-0">
                        <a className="btn-white" href="javascript:;" onClick={this.loadTopic.bind(this)}>查看更多</a>
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
