import React from 'react'
import {Container, Group, Slider, Grid, Col, List, View} from 'amazeui-touch'
import HomeStore from '../stores/HomeStore'
import HomeActions from '../actions/HomeActions'
import _Header from '../components/_Header'
import { Swiper, Slide } from 'react-dynamic-swiper'
import _Topic from '../components/_Topic'
import _DownLoadApp from '../components/_DownLoadApp'

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = HomeStore.getState();
        this.onChange = this.onChange.bind(this);
        //console.info('this.sate',this.state);
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
                                    <a href={'/tribe/item/'+item.id}><img src={item.img}/></a>
                                </Slider.Item>;
                            })
                        }
                    </Slider>
                </div>

                <div className="home-tribe border-d7d7d7 bgF">
                    <Group noPadded className="margin-0">
                        <h5 className="home-group-header margin">部落</h5>
                        <Group noPadded className="margin-v-0">
                            <Swiper
                                swiperOptions={{slidesPerView:'auto'}}
                                navigation={false}
                                pagination={false}
                            >
                                {
                                    this.state.tribeList.map((item, i) => {
                                        return <Slide key={i} className="margin-left">
                                            <div className="swiper-slide">
                                                <a href={'/tribe/item/'+item.id}><img src={item.logo}/></a>
                                                <a href={'/tribe/item/'+item.id}><p className="home-tribe-name">{item.title}</p></a>
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
                        <h5 className="home-group-header margin">广场</h5>
                        <Grid align="between" className="padding-v-sm home-square-borderT">
                            <Col cols={3}>
                                <a href="/require" className="text-color-3">
                                <Grid>
                                    <Col className="home-square-img home-square-require" shrink>
                                    </Col>
                                    <Col className="home-square-btn">
                                        <span className="btn-gray" >需求</span>
                                        <p>为专业团队提供对接服务</p>
                                    </Col>
                                </Grid>
                                </a>
                            </Col>
                            <Col cols={3} className="home-square-borderL">
                                <a href="/server" className="text-color-3">
                                <Grid>
                                    <Col className="home-square-img home-square-server" shrink>
                                    </Col>
                                    <Col className="home-square-btn">
                                        <span className="btn-gray">服务</span>
                                        <p>原创人网上个性化空间</p>
                                    </Col>
                                </Grid>
                                </a>
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

                <div className="margin-top-sm comp-topic-list">
                    <_Topic topicList={this.state.topicList} showTribe={true}></_Topic>
                </div>

                <div className="margin-h margin-v">
                    <Group noPadded className="margin-0">
                        <a className="btn-white" href="javascript:;" onClick={this.loadTopic.bind(this)}>查看更多</a>
                    </Group>
                </div>

                <div className="margin-h margin-v bgNone">
                    <p className="text-center text-size-12 text-color-2">
                        <a href="/feedback" className="text-size-12 text-color-2">意见反馈</a>
                        <span className="padding-h-xs text-size-12 text-color-2">|</span>
                        <a href="" className="text-size-12 text-color-2">关于我们</a>
                    </p>
                    <p className="text-center text-size-14 text-color-2">京ICP备14057447号-3</p>
                </div>
            </Container>
            <_DownLoadApp></_DownLoadApp>
        </View>;
    }
}

export default Home;
