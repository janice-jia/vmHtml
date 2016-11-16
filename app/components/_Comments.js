import React from 'react'
import {List} from 'amazeui-touch'

class Comments extends React.Component {
    render() {
        return <List className="comments">
            <List.Item
                media={<img className="comments-avatar" width="44" height="44" src="http://s.amazeui.org/media/i/demos/bing-2.jpg" />}
                title="女爵"
                subTitle="内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内"
                desc={<Grid align="between">
                                        <Col cols={2} className="text-left padding-0">10分钟前</Col>
                                        <Col cols={2} className="text-right">2</Col>
                                      </Grid>}
            />
        </List>;
    }
}

export default Comments;

