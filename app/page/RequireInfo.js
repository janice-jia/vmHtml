import React from 'react'
import {View, Container, Grid, Col, Group, List, Badge} from 'amazeui-touch';
import { Swiper, Slide } from 'react-dynamic-swiper'
import _Header from './../components/_Header'
import _Comments from './../components/_Comments'
import RequireInfoActions from '../actions/RequireInfoActions'
import RequireInfoStore from '../stores/RequireInfoStore'
import _CommentsStore from '../stores/_CommentsStore'
import _CommentsActions from '../actions/_CommentsActions'
import publicFn from '../publicFn'
import ReactIScroll from 'react-iscroll'
import iscroll from 'iscroll'


class RequireInfo extends React.Component{
    constructor(props) {
        super(props);
        this.state = RequireInfoStore.getState();
        this.state.hotsCommentList=[];
        this.state.commentList=[];
        //console.info('this.state',this.state);
        this.state.requireId = this.props.params.requireId;
        this.state.currentPage = 1;
        this.state.iScrollOptions={
            mouseWheel: true,
            scrollbars: true,
            scrollX: true,
            scrollY: true,
            click:true
        }
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){
        RequireInfoStore.listen(this.onChange);
        RequireInfoActions.getRequireInfo(this.props.params.requireId);
        RequireInfoActions.getRequireApply({requireId:this.props.params.requireId,currentPage:1,itemsPerPage:10});
        _CommentsStore.listen(this.onChange);
        _CommentsActions.getCommentList({
            url:'/app/require/'+this.state.requireId+'/comment/list/',
            uid:publicFn.getUser(),
            currentPage:this.state.currentPage,
            itemsPerPage:10
        });
    }

    componentWillUnmount() {
        RequireStore.unlisten(this.onChange);
        _CommentsStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    _handleScrollEnd (iScrollInstance) {
        if((iScrollInstance.y - iScrollInstance.maxScrollY) < 25){
            if(!this.state.lastPage){
                this.state.currentPage = this.state.currentPage + 1;
                _CommentsActions.getCommentList({
                    url:'/app/require/'+this.state.requireId+'/comment/list/',
                    uid:publicFn.getUser(),
                    currentPage:this.state.currentPage,
                    itemsPerPage:10
                });
            }
        }
    }

    //关注
    attentionUser(event){
        event.preventDefault();
        if(publicFn.isUser()){
            RequireInfoActions.attentionUser(this.state.requireInfo.userInfo.uid);
        }else{
            alert('您还没有登录');
        }
    }

    //取消关注
    attentionCancel(event){
        event.preventDefault();
        if(publicFn.isUser()){
            RequireInfoActions.attentionCancel(this.state.requireInfo.userInfo.uid);
        }else{
            alert('您还没有登录');
        }
    }

    render() {
        return <View>
            <_Header></_Header>
            <Container scrollable>
                <ReactIScroll iScroll={iscroll}
                              options={this.state.iScrollOptions}
                              onScrollEnd={this._handleScrollEnd.bind(this)}
                >
                    <div>
                        <div className="bgF require-info-user">
                            <List.Item
                                media={<img className="require-user-avatar" width="44" height="44" src={this.state.requireInfo.userInfo.avatar} />}
                                after={this.state.requireInfo.isAttention ? <div className="attentionCancel" onClick={this.attentionCancel.bind(this)}>已关注</div> :<div className="attentionUser" onClick={this.attentionUser.bind(this)}>关注</div>}
                                title={<div className="require-user-name">
                                        <p className="text-color-3 text-size-14">{this.state.requireInfo.userInfo.nickName}</p>
                                        <p className="text-color-4 text-size-13">{this.state.requireInfo.userInfo.city}</p>
                                    </div>}
                                href={'/user/'+this.state.requireInfo.userInfo.uid}
                            />
                        </div>
                        <Group noPadded className="margin-0">
                            <div className="require-info text-size-14">
                                <Grid className="padding-v margin-left">
                                    <Col shrink className="padding-left-0 require-info-tit-l text-color-4">需求名称</Col>
                                    <Col className="padding-left-0 text-color-3">{this.state.requireInfo.name}</Col>
                                </Grid>
                                <Grid className={this.state.requireInfo.type == 1 ? 'padding-v margin-left' : 'hidden'}>
                                    <Col shrink className="padding-left-0 require-info-tit-l text-color-4">所需技能</Col>
                                    <Col className="padding-left-0 text-color-3"> {this.state.requireInfo.skills.map((item,i)=>{
                                                return <span key={i} className="margin-right-xs">{item}</span>;
                                            })}
                                    </Col>
                                </Grid>
                                <Grid className={this.state.requireInfo.type == 2 ? 'padding-v margin-left' : 'hidden'}>
                                    <Col shrink className="padding-left-0 require-info-tit-l text-color-4">作品类型</Col>
                                    <Col className="padding-left-0 text-color-3"> {this.state.requireInfo.skills.map((item,i)=>{
                                        return <span key={i} className="margin-right-xs">{item}</span>;
                                    })}
                                    </Col>
                                </Grid>
                                <Grid className="padding-v margin-left">
                                    <Col shrink className="padding-left-0 require-info-tit-l text-color-4">酬金</Col>
                                    <Col className="padding-left-0 text-color-5">{this.state.requireInfo.reward} 元</Col>
                                </Grid>
                                <Grid className="padding-v margin-left">
                                    <Col shrink className="padding-left-0 require-info-tit-l text-color-4">保证金</Col>
                                    <Col className="padding-left-0 text-color-5">{this.state.requireInfo.margin} 元</Col>
                                </Grid>
                                <Grid className="padding-v margin-left">
                                    <Col shrink className="padding-left-0 require-info-tit-l text-color-4">需求地点</Col>
                                    <Col className="padding-left-0 text-color-3">{this.state.requireInfo.city}</Col>
                                </Grid>
                                <Grid className="padding-v margin-left">
                                    <Col shrink className="padding-left-0 require-info-tit-l text-color-4">发布日期</Col>
                                    <Col className="padding-left-0 text-color-3">{publicFn.getFormat(this.state.requireInfo.createTime)}</Col>
                                </Grid>
                                <Grid className="padding-v margin-left">
                                    <Col shrink className="padding-left-0 require-info-tit-l text-color-4">截止日期</Col>
                                    <Col className="padding-left-0 text-color-3">{publicFn.getFormat(this.state.requireInfo.deadline)}</Col>
                                </Grid>
                                <Grid className="padding-v margin-left">
                                    <Col shrink className="padding-left-0 require-info-tit-l text-color-4">需求详细</Col>
                                    <Col className="padding-left-0 text-color-3">{this.state.requireInfo.details}</Col>
                                </Grid>
                            </div>
                        </Group>

                        <Group noPadded className="margin-v">
                            <div className="padding-v require-badge">
                                <p className="text-size-14">
                                    <Badge></Badge>
                                    <span className="padding-left-sm">报名列表（{this.state.requireApplyItems}人）</span></p>
                            </div>
                            <Group noPadded className="margin-0 padding require-apply-list">
                                <Swiper
                                    swiperOptions={{slidesPerView:'auto'}}
                                    navigation={false}
                                    pagination={false}
                                >
                                    {
                                        this.state.requireApplyList.map((item, i) => {
                                            return <Slide key={i}>
                                                <div className="swiper-slide">
                                                    <a href={'/user/'+item.uid}><img src={item.avatar}/></a>
                                                </div>
                                            </Slide>
                                        })
                                    }
                                </Swiper>
                            </Group>
                        </Group>

                        <Group noPadded className="margin-v">
                            <div className="padding-top require-badge border-none">
                                <p className="text-size-14 margin-0 padding-bottom">
                                    <Badge></Badge>
                                    <span className="padding-left-sm">全部评论（{this.state.totalItems}条）</span>
                                </p>
                                <_Comments commentList={this.state.commentList}></_Comments>
                            </div>
                        </Group>
                    </div>
                </ReactIScroll>
            </Container>
        </View>;
    }
}

export default RequireInfo;
