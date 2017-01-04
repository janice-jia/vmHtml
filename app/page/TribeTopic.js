import React from 'react';
import _Header from './../components/_Header'
import _Comments from './../components/_Comments'
import _DownLoadApp from './../components/_DownLoadApp'
import {Container, Group, List, View, Badge, Grid, Col} from 'amazeui-touch';
import _CommentsStore from '../stores/_CommentsStore'
import _CommentsActions from '../actions/_CommentsActions'
import publicFn from '../publicFn'
import ReactIScroll from 'react-iscroll'
import iscroll from 'iscroll'

class TribeTopic extends React.Component{
    constructor(pops){
        super(pops);
        this.state = _CommentsStore.getState();
        this.state.topicId = this.props.params.topicId;
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
        _CommentsStore.listen(this.onChange);
        _CommentsActions.getComment({
            url:'/app/topic/'+this.state.topicId+'/comment/list',
            uid:publicFn.getUser(),
            currentPage:this.state.currentPage,
            itemsPerPage:10
        });
    }

    componentWillUnmount(){
        _CommentsStore.unlisten(this.onChange);
    }
    onChange(state){
        this.setState(state);
    }

    _handleScrollEnd (iScrollInstance) {
        if((iScrollInstance.y - iScrollInstance.maxScrollY) < 25){
            if(!this.state.lastPage){
                this.state.currentPage = this.state.currentPage + 1;
                _CommentsActions.getComment({
                    url:'/app/topic/'+this.state.topicId+'/comment/list',
                    uid:publicFn.getUser(),
                    currentPage:this.state.currentPage,
                    itemsPerPage:10
                });
            }
        }
    }

    render() {
        return <View>
            <_Header></_Header>
            <Container scrollable className="tribe tribe-topic">

                    <div>
                        <div className="tribe-info-user bgF">
                                    <List.Item
                                        title={
                                                <div className="tribe-user-name">
                                                    <a href={'/user/'+this.props.location.query.uid} className="text-color-3">
                                                        <div className="item-title">{this.props.location.query.userName}</div>
                                                        <div className="item-subtitle">{publicFn.getFromNow(this.props.location.query.createTime)}</div>
                                                    </a>
                                                </div>
                                                    }
                                        target="_blank"
                                        media={
                                        <img src={ this.props.location.query.userAvatar}/>
                                        }
                                        after={<a href={'/tribe/item/'+this.props.location.query.tribesId} className="tribe-tribe-btn">{this.props.location.query.tribeName}</a>}
                                    />
                        </div>
                        <div>
                            <iframe src={'http://www.vmaking.com/tribe/theme/'+this.props.params.topicId} frameBorder="0" width="100%" height="auto" ></iframe>
                        </div>
                        <Group noPadded className="margin-v">
                            <div className="padding-top require-badge">
                                <p className="text-size-14">
                                    <Badge></Badge>
                                    <span className="padding-left-sm">热门评论</span>
                                </p>
                                <_Comments commentList={this.state.hotsCommentList}></_Comments>
                            </div>
                            <div className="padding-top require-badge border-none">
                                <p className="text-size-14 margin-0 padding-bottom">
                                    <Badge></Badge>
                                    <span className="padding-left-sm">全部评论（{this.state.totalItems}条）</span>
                                </p>
                                <ReactIScroll iScroll={iscroll}
                                              options={this.state.iScrollOptions}
                                              onScrollEnd={this._handleScrollEnd.bind(this)}
                                >
                                    <_Comments commentList={this.state.commentList}></_Comments>
                                </ReactIScroll>
                            </div>
                        </Group>
                    </div>

                <_DownLoadApp></_DownLoadApp>
            </Container>
        </View>

    }
}
export default TribeTopic;

