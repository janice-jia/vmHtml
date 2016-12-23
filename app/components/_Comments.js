import React from 'react'
import {List, Grid, Col} from 'amazeui-touch'
import publicFn from '../publicFn'

//公用评论组件
class _Comments extends React.Component {
    render() {
        return <List className="comments">
            {this.props.commentList.map((item, i) => {
                return(
                    <List.Item
                        media = {<img className="comments-avatar" width="44" height="44" src={item.avatar}/>}
                        title = {item.userName}
                        subTitle = {item.content}
                        desc={<Grid align="between">
                            <Col cols={2} className="text-left padding-0">{publicFn.getFromNow(item.createTime)}</Col>
                            <Col cols={2} className="text-right">
                                <span className="icon comments-likesCount margin-right-xs"></span>
                                {item.likesCount ? item.likesCount : '0'}
                            </Col>
                          </Grid>}
                        key={i}
                        href={'/user/'+item.uid}
                    />
                )
            })}
        </List>;
    }
}

export default _Comments;

