import React from 'react'
import {
    View,
    Container,
    Grid,
    Col,
    Group,
    List,
    Badge
} from 'amazeui-touch';
import _Header from './../components/_Header'
import _Comments from './../components/_Comments'

class RequireInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = {};
        this.state.hotCommentList =[
            {
            media:'http://s.amazeui.org/media/i/demos/bing-2.jpg',//头像地址
            title:'女爵',                                         //标题
            subTitle:'内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内',//描述
            time:'10分钟前',                                      //时间
            like:'2'                                              //点赞人数
            }
        ]

        this.state.commentList = [
            {
                media:'http://s.amazeui.org/media/i/demos/bing-2.jpg',//头像地址
                title:'女爵',                                         //标题
                subTitle:'内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内',//描述
                time:'10分钟前',                                      //时间
                like:'2'                                              //点赞人数
            },
            {
                media:'http://s.amazeui.org/media/i/demos/bing-1.jpg',
                title:'女爵',
                subTitle:'内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内',
                time:'10分钟前',
                like:'2'
            }
        ];
    }


    render() {
        return <View>
            <Container scrollable>
                <_Header></_Header>
                <div className="bgF require-info-user">
                    <List.Item
                        media={<img className="require-user-avatar" width="44" height="44" src="http://s.amazeui.org/media/i/demos/bing-2.jpg" />}
                        after={<div className="require-user-tag">关注</div>}
                        title={<div className="require-user-name">
                                <p className="text-color-3 text-size-14">白发魔女</p>
                                <p className="text-color-4 text-size-13">北京</p>
                            </div>}
                    />
                </div>
                <Group noPadded className="margin-0">
                    <div className="require-info text-size-14">
                        <Grid className="padding-v margin-left">
                            <Col shrink className="padding-left-0 require-info-tit-l text-color-4">需求名称</Col>
                            <Col className="padding-left-0 text-color-3">名称名称名称名称</Col>
                        </Grid>
                        <Grid className="padding-v margin-left">
                            <Col shrink className="padding-left-0 require-info-tit-l text-color-4">所需技能</Col>
                            <Col className="padding-left-0 text-color-3">技能名称，技能名称，</Col>
                        </Grid>
                        <Grid className="padding-v margin-left">
                            <Col shrink className="padding-left-0 require-info-tit-l text-color-4">酬金</Col>
                            <Col className="padding-left-0 text-color-5">100元每小时</Col>
                        </Grid>
                        <Grid className="padding-v margin-left">
                            <Col shrink className="padding-left-0 require-info-tit-l text-color-4">保证金</Col>
                            <Col className="padding-left-0 text-color-5">100元每小时</Col>
                        </Grid>
                        <Grid className="padding-v margin-left">
                            <Col shrink className="padding-left-0 require-info-tit-l text-color-4">需求地点</Col>
                            <Col className="padding-left-0 text-color-3">北京</Col>
                        </Grid>
                        <Grid className="padding-v margin-left">
                            <Col shrink className="padding-left-0 require-info-tit-l text-color-4">发布日期</Col>
                            <Col className="padding-left-0 text-color-3">2016.1.11</Col>
                        </Grid>
                        <Grid className="padding-v margin-left">
                            <Col shrink className="padding-left-0 require-info-tit-l text-color-4">截止日期</Col>
                            <Col className="padding-left-0 text-color-3">2016.12.11</Col>
                        </Grid>
                    </div>
                </Group>

                <Group noPadded className="margin-v">
                    <div className="padding-v require-badge">
                        <p className="text-size-14">
                            <Badge></Badge>
                            <span className="padding-left-sm">报名列表（20人）</span></p>
                    </div>
                    <Group noPadded className="margin-0 require-apply-list">
                        <Grid className="padding-v-xs">
                            <Col className="padding-xs text-center" ><img  width="44" height="44" src="http://s.amazeui.org/media/i/demos/bing-2.jpg" /></Col>
                            <Col className="padding-xs text-center" ><img  width="44" height="44" src="http://s.amazeui.org/media/i/demos/bing-2.jpg" /></Col>
                            <Col className="padding-xs text-center" ><img  width="44" height="44" src="http://s.amazeui.org/media/i/demos/bing-2.jpg" /></Col>
                            <Col className="padding-xs text-center" ><img  width="44" height="44" src="http://s.amazeui.org/media/i/demos/bing-2.jpg" /></Col>
                            <Col className="padding-xs text-center" ><img  width="44" height="44" src="http://s.amazeui.org/media/i/demos/bing-2.jpg" /></Col>
                            <Col className="padding-xs text-center" ><img  width="44" height="44" src="http://s.amazeui.org/media/i/demos/bing-2.jpg" /></Col>
                            <Col className="padding-xs text-center" ><img  width="44" height="44" src="http://s.amazeui.org/media/i/demos/bing-2.jpg" /></Col>
                        </Grid>
                    </Group>
                </Group>

                <Group noPadded className="margin-v">
                    <div className="padding-top require-badge">
                        <p className="text-size-14">
                            <Badge></Badge>
                            <span className="padding-left-sm">热门评论</span>
                        </p>
                        <_Comments commentList={this.state.hotCommentList}></_Comments>
                    </div>
                    <div className="padding-top require-badge border-none">
                        <p className="text-size-14">
                            <Badge></Badge>
                            <span className="padding-left-sm">全部评论（30条）</span>
                        </p>
                        <_Comments commentList={this.state.commentList}></_Comments>
                    </div>
                </Group>
            </Container>
        </View>;
    }
}

export default RequireInfo;
