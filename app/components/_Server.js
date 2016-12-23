import React from 'react'
import {List, Grid, Col, Group} from 'amazeui-touch'


//公用服务列表组件
class _Server extends React.Component {
    render() {
        return <div className={this.props.serverList.length>0 ? 'serverList' : 'serverList height-100'}>
            <Group className={this.props.serverList.length>0 ? 'hidden' : 'null-con bgF margin-0'}>服务为空！</Group>
            <List className="margin-top-0">
                {this.props.serverList.map((item,i)=>{
                    return(
                        <div key={i} className="bgF mt-1">
                            <div className="server-user padding-h padding-top-sm">
                                <a href={'/user/'+item.id} className="text-color-3">
                                    <Grid className="server-user-con padding-bottom-sm">
                                        <Col shrink className="server-user-img padding-0"><img src={item.avatar} alt="" width="44" height="44"/></Col>
                                        <Col className="server-user-p text-size-14">{item.userName}</Col>
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
                                        <p className="text-size-12 text-color-6">
                                            <span className="icon icon-successful-trade"></span>
                                            交易成功：{item.acceptInvites ? item.acceptInvites : '0'} 次
                                        </p>
                                    </Col>
                                    <Col cols={2} className="text-right padding-right-0">
                                        <span className="text-size-12 text-color-4">{item.city ? item.city : '暂无'}</span>
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

