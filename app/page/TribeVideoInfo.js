import React from 'react';
import _Header from './../components/_Header'
import {
    Container, Group, List, View, Badge, Grid, Col,TabBar
} from 'amazeui-touch';
import _CommentsActions from '../actions/_CommentsActions'
import _CommentsStore from '../stores/_CommentsStore'
import ReactIScroll from 'react-iscroll'
import iscroll from 'iscroll'
import publicFn from '../publicFn'
import _Comments from '../components/_Comments'

class TribeVideoInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = _CommentsStore.getState();
        this.onChange = this.onChange.bind(this);
        this.state.currentPage = 1;
        this.state.iScrollOptions={
            mouseWheel: true,
            scrollbars: true,
            scrollX: true,
            scrollY: true,
            click:true
        }
    }

    componentDidMount(){
        _CommentsStore.listen(this.onChange);
        _CommentsActions.getComment({
            url:'/app/video/'+this.props.params.videoId+'/comment/list',
            uid:publicFn.getUser(),
            currentPage:this.state.currentPage,
            itemsPerPage:10
        });
    }

    componentWillUnmount() {
        _CommentsStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }
    _handleScrollEnd (iScrollInstance) {
        if((iScrollInstance.y - iScrollInstance.maxScrollY) < 25){
            if(!this.state.lastPage){
                this.state.currentPage = this.state.currentPage + 1;
                _CommentsActions.getComment({
                    url:'/app/video/'+this.props.params.videoId+'/comment/list',
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
            <Container scrollable className="tribe">
                <ReactIScroll iScroll={iscroll}
                              options={this.state.iScrollOptions}
                              onScrollEnd={this._handleScrollEnd.bind(this)}
                >
                    <div>
                        <div>
                            <iframe height="240" width="100%" src={this.props.location.query.addr} frameBorder="0" allowFullScreen></iframe>
                        </div>
                        <Group className="margin-0">{this.props.location.query.title}</Group>
                        <Group noPadded className="margin-v margin-top-0">
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
                                <_Comments commentList={this.state.commentList}></_Comments>
                            </div>
                        </Group>
                    </div>
                </ReactIScroll>
            </Container>
        </View>

    }
}
export  default TribeVideoInfo;
