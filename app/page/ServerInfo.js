import React from 'react'
import {View, Container, Grid, Col, Group, List} from 'amazeui-touch';
import _Header from './../components/_Header'
import _DownLoadApp from './../components/_DownLoadApp'
import ServerInfoActions from '../actions/ServerInfoActions'
import ServerInfoStore from '../stores/ServerInfoStore'
import publicFn from '../publicFn'

class ServerInfo extends React.Component{
    constructor(props){
        super(props);
        this.state = ServerInfoStore.getState();
        this.state.currentPage = 1;
        this.state.itemsPerPage = 10;
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount(){
        ServerInfoStore.listen(this.onChange);
        ServerInfoActions.getServerInfo(this.props.params.serverId);
    }

    componentWillUnmount() {
        ServerInfoStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    //关注
    attentionUser(event){
        event.preventDefault();
        if(publicFn.isUser()){
            ServerInfoActions.attentionUser(this.state.serverInfo.uid);
        }else{
            alert('您还没有登录');
        }
    }

    //取消关注
    attentionCancel(event){
        event.preventDefault();
        if(publicFn.isUser()){
            ServerInfoActions.attentionCancel(this.state.serverInfo.uid);
        }else{
            alert('您还没有登录');
        }
    }

    render() {
        return <View>
            <_Header></_Header>
            <Container scrollable>
                <div className="border-d7d7d7 bgF server-info-user">
                    <List.Item
                        media={<a href={'/user/'+this.state.serverInfo.userId}><img className="server-user-avatar" width="44" height="44" src={this.state.serverInfo.avatar}/></a>}
                        after={this.state.serverInfo.isAttention ? <div className="attentionCancel" onClick={this.attentionCancel.bind(this)}>已关注</div> :<div className="attentionUser" onClick={this.attentionUser.bind(this)}>关注</div>}
                        title={<div className="server-user-name">
                                <a href={'/user/'+this.state.serverInfo.userId}>
                                <p className="text-color-3 text-size-14">{this.state.serverInfo.username}</p>
                                <p className="text-color-4 text-size-13">{this.state.serverInfo.city}</p>
                                </a>
                            </div>}
                    />
                </div>
                <Group noPadded className="margin-0">
                    <div className="server-info text-size-14">
                        <Grid className="padding-v margin-left">
                            <Col shrink className="padding-left-0 server-info-tit-l text-color-4">服务名称</Col>
                            <Col className="padding-left-0 text-color-3">{this.state.serverInfo.name}</Col>
                        </Grid>
                        <Grid className="padding-v margin-left">
                            <Col shrink className="padding-left-0 server-info-tit-l text-color-4">擅长技能</Col>
                            <Col className="padding-left-0 text-color-3">
                                {this.state.serverInfo.skills.length>0 ? '' : '无'}
                                {this.state.serverInfo.skills.map((item,i)=>{
                                    return <span key={i} className="margin-right-xs">{item}</span>;
                                })}
                            </Col>
                        </Grid>
                        <Grid className="padding-v margin-left">
                            <Col shrink className="padding-left-0 server-info-tit-l text-color-4">酬劳模式</Col>
                            <Col className="padding-left-0 text-color-5">{this.state.serverInfo.rewardDesc}</Col>
                        </Grid>
                        <Grid className="padding-v margin-left">
                            <Col shrink className="padding-left-0 server-info-tit-l text-color-4">服务类型</Col>
                            <Col className="padding-left-0 text-color-3">
                                <span>{this.state.serverInfo.type==1 ? '个人' : ''}</span>
                                <span>{this.state.serverInfo.type==2 ? '工作室' : ''}</span>
                                <span>{this.state.serverInfo.type==3 ? '企业' : ''}</span>
                            </Col>
                        </Grid>
                        <Grid className="padding-v margin-left">
                            <Col shrink className="padding-left-0 server-info-tit-l text-color-4">服务详情</Col>
                            <Col className="padding-left-0 text-color-3">{this.state.serverInfo.desc}</Col>
                        </Grid>
                        <Grid className="padding-v margin-left">
                            <Col shrink className="padding-left-0 server-info-tit-l text-color-4">代表作品</Col>
                            {this.state.serverInfo.artworkList.length>0 ? '' : <Col className="padding-left-0 text-color-3">无</Col>}
                            <Col className="padding-left-0 text-color-3">
                                <Grid className="border-none">
                                    {this.state.serverInfo.artworkList.map((item,i)=>{
                                        return <Col>
                                            <img src={item.url}/>
                                        </Col>
                                    })}
                                </Grid>
                            </Col>
                        </Grid>
                    </div>
                </Group>
                <_DownLoadApp></_DownLoadApp>
            </Container>
        </View>;
    }
}
export default ServerInfo;
