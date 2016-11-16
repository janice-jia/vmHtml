import React from 'react'
import {List, Grid, Col} from 'amazeui-touch'

//公用评论组件
class _Comments extends React.Component {
    render() {
        return <List className="comments">
            {this.props.commentList.map((item, i) => {
                return(
                    <List.Item
                        media = {<img className="comments-avatar" width="44" height="44" src={item.media}/>}
                        title = {item.title}
                        subTitle = {item.subTitle}
                        desc={<Grid align="between">
                            <Col cols={2} className="text-left padding-0">{item.time}</Col>
                            <Col cols={2} className="text-right">{item.like}</Col>
                          </Grid>}
                        key={i}
                    />
                )
            })}
        </List>;
    }
}

export default _Comments;

