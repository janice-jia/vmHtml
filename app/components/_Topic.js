import React from 'react'
import {Group, List, Grid, Col} from 'amazeui-touch'
import _Moment from '../components/_Moment'


//公用话题列表组件
class _Topic extends React.Component {
    componentDidMount(){
        //console.info('this.props',this.props);
    }
    render() {
        return <div>
            <List className="margin-0">
                {
                    this.props.topicList.map((item, i) => {
                        return <Group noPadded className="margin-v bgF border-d7d7d7" key={i}>
                            <List.Item
                                media={<a href={'/user/'+item.uid}><img className="home-topic-media" width="44" height="44" src={item.userAvatar} /></a>}
                                after={<div className={this.props.showTribe ? 'home-topic-tag text-color-2' : 'hidden'}><a href={'/tribe/info/'+item.tribesId}>{item.tribeName}</a></div>}
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
            </div>;
    }
}

export default _Topic;

