import React from 'react';
import _Header from './../components/_Header'
import _DownLoadApp from './../components/_DownLoadApp'
import {Container, Group, List, View, Badge, Notification} from 'amazeui-touch';
import ReactIScroll from 'react-iscroll'
import iscroll from 'iscroll'

class Notice extends React.Component{

    backPage(){
        history.back();
    }

    render() {
        return <View>
            <Container>
                <div className="notice-tit">
                    <span className="icon icon-notice-close" onClick={this.backPage}></span>
                    通知
                </div>
                <List className="margin-0 notice-nav">
                    <List.Item href={'/notice/attention'}  title="关注" />
                    <List.Item href={'/notice/require'}  title="需求" />
                    <List.Item href={'/notice/comment'}  title="评论" />
                    <List.Item href={'/notice/system'}  title="系统" />
                </List>
            </Container>
            <_DownLoadApp></_DownLoadApp>
        </View>
    }
}

export default Notice

