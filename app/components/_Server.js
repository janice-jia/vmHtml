import React from 'react'
import {List, Grid, Col} from 'amazeui-touch'


//公用服务列表组件
class _Server extends React.Component {
    render() {
        return <div className="serverList">
            <List className="margin-top-0">
                {this.props.serverList.map((item,i)=>{
                    return(
                        <div key={i} className="bgF mt-1">
                            <div className="server-user padding-h padding-top-sm">
                                <a href={'/user/'+item.id} className="text-color-3">
                                    <Grid className="server-user-con padding-bottom-sm">
                                        <Col shrink className="server-user-img padding-0"><img src={item.avatar} alt="" width="44" height="44"/></Col>
                                        <Col className="server-user-p text-size-14">{item.username}</Col>
                                    </Grid>
                                </a>
                            </div>
                            <List.Item
                                title = {item.name}
                                subTitle = {item.rewardDesc}
                                href = {'/server/info/'+item.id}
                                desc = {item.desc}
                                target = {item.target}
                                after={item.after}
                            >
                                <Grid align="between" className="margin-top-xs">
                                    <Col cols={2} className="padding-0">
                                        <span className="text-size-12 text-color-6">交易成功：{item.acceptInvites}次</span>
                                    </Col>
                                    <Col cols={2} className="text-right padding-right-0">
                                        <span className="text-size-12 text-color-4">{item.city}</span>
                                    </Col>
                                </Grid>
                            </List.Item>
                        </div>
                    )
                })}
        </List>
        </div>;
    }
}

export default _Server;

