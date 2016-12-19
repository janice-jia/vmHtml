import React from 'react'
import {Link}  from 'react-router'
import {Group, List, Grid, Col} from 'amazeui-touch'
import publicFn from '../publicFn'


//公用话题列表组件
class _Topic extends React.Component {
    componentDidMount(){
        console.info('this.props',this.props);
    }
    render() {
        return <div className="comp-topicItem-list">
            <List className="margin-0">
                {
                    this.props.topicList.map((item, i) => {
                        return  <Link to={{ pathname: '/tribe/topic/'+item.id, query: { userAvatar: item.userAvatar,userName: item.userName,tribeName:item.tribeName,tribesId:item.tribesId,createTime:item.createTime,uid:item.uid} }} key={i}>
                            <List.Item
                                after={<img src={
                                    item.topicPic.map( (topicPic, topicPicI) => {
                                        return <Col key={topicPicI} className="padding-h padding-top-xs padding-bottom-0">
                                            <a href={'/tribe/topic/'+item.id}><img src={topicPic}/></a>
                                        </Col>
                                    })
                                } alt=""/>}
                                title={<div><p className="tit">{item.title}</p><p className="subTit">{item.description}</p></div>}
                            /></Link>
                    })
                }

            </List>
            </div>;
    }
}

export default _Topic;

