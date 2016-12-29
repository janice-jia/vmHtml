import React from 'react';
import _Header from './../components/_Header'
import {Container, Group, List, View, Badge, Notification, Grid, Col} from 'amazeui-touch';
import ReactIScroll from 'react-iscroll'
import iscroll from 'iscroll'
import NoticeStore from '../stores/NoticeStore'
import NoticeActions from '../actions/NoticeActions'
import publicFn from '../publicFn'

class NoticeAttention extends React.Component{
    constructor(props){
        super(props);
        this.state = NoticeStore.getState();
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
        NoticeStore.listen(this.onChange);
        NoticeActions.getNoticeAttention({
            uid:publicFn.getUser(),
            currentPage:this.state.currentPage,
            itemsPerPage:10
        });
    }

    componentWillUnmount() {
        NoticeStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    _handleScrollEnd (iScrollInstance) {
        if((iScrollInstance.y - iScrollInstance.maxScrollY) < 25){
            if(!this.state.lastPage){
                this.state.currentPage = this.state.currentPage + 1;
                NoticeActions.getNoticeAttention({
                    uid:publicFn.getUser(),
                    currentPage:this.state.currentPage,
                    itemsPerPage:10
                });
            }
        }
    }

    backPage(){
        history.back();
    }

    render() {
        return <View>
            <div className="notice-tit">
                <span className="icon icon-notice-close" onClick={this.backPage}></span>
                通知
            </div>
            <Group className={this.state.noticeAttention.length>0 ? 'hidden' : 'null-con bgF margin-0'}>需求通知为空！</Group>
            <Container scrollable>
                <ReactIScroll iScroll={iscroll}
                              options={this.state.iScrollOptions}
                              onScrollEnd={this._handleScrollEnd.bind(this)}
                >
                    <div style={{paddingBottom:'40px'}}>
                        <List className="comments margin-0">
                            {this.state.noticeAttention.map((item, i) => {
                                return(
                                    <List.Item
                                        media = {<img className="comments-avatar" width="44" height="44" src={item.avatar}/>}
                                        title = {<div>
                                                    <span>{item.nickName}</span>
                                                    <span className="text-color-5 padding-left">关注了你</span>
                                                </div>}
                                        subTitle = {publicFn.getFormat(item.createTime)}
                                        href={'/user/'+item.uid}
                                        key={i}
                                    />
                                )
                            })}
                        </List>
                    </div>
                </ReactIScroll>
            </Container>
        </View>
    }
}

export default NoticeAttention

