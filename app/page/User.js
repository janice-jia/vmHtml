import React from 'react'
import {browserHistory}  from 'react-router'
import {View, Container, Group, List, Grid, Col} from 'amazeui-touch';
import _Header from './../components/_Header'
import UserActions from './../actions/UserActions'
import UserStore from './../stores/UserStore'
import publicFn from '../publicFn'
import $ from 'jquery'

class User extends  React.Component{
    constructor(props) {
        super(props);
        this.state = UserStore.getState();
        this.onChange = this.onChange.bind(this);
        this.state.uid = publicFn.getUser();
        this.state.userType = '';
        this.state.uid = this.props.params.uid;
    }

    componentDidMount(){
        UserStore.listen(this.onChange);

        if(this.state.uid == publicFn.getUser()){
            //查看自己
            UserActions.getUser({uid:this.state.uid,password:''});
            //当前用户为自己移除关注按钮
            this.refs.btnAttention.remove();
        }else{
            //查看他人
            UserActions.getLookUser(this.state.uid);
        }
    }

    componentWillUnmount() {
        UserStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    _lookUserInfo(){
        //console.info('this',this);
        this.context.router.push({
            pathname: '/user/info/' + this.state.uid,
            query: {
                nickName: this.state.userInfo.nickName,
                birthday: this.state.userInfo.birthday,
                city: this.state.userInfo.city,
                desc: this.state.userInfo.desc
            }
        })
    }

    //关注
    _attentionUser(event){
        event.preventDefault();
        if(publicFn.isUser()){
            UserActions.attentionUser(this.state.userInfo.uid);
        }else{
            alert('您还没有登录');
        }
    }

    //取消关注
    _attentionCancel(event){
        event.preventDefault();
        if(publicFn.isUser()){
            UserActions.attentionCancel(this.state.userInfo.uid);
        }else{
            alert('您还没有登录');
        }
    }

    render() {
        return (
            <View>
                <_Header/>
                <Container scrollable className={$.isEmptyObject(this.state.userInfo) ? 'hidden' : '' }>
                    <Group noPadded className="margin-0 userDesc">
                        <List>
                            <List.Item
                                className="padding-v"
                                media={
                                    <a href="javascript:;" onClick={this._lookUserInfo.bind(this)}><div className="user-avatar">
                                        <img width="65" height="65" src={this.state.userInfo.avatar}/>
                                        <span className={this.state.userInfo.gender == 'F' ? 'user-woman' : ''}></span>
                                        <span className={this.state.userInfo.gender == 'M' ? 'user-man' : ''}></span>
                                    </div>
                                    </a>
                                }
                                after={this.state.userInfo.isAttention ? <button ref="btnAttention" className="btn-white" onClick={this._attentionCancel.bind(this)}>已关注</button> : <button ref="btnAttention" className="btn-yellow" onClick={this._attentionUser.bind(this)}>关注</button>}
                                title={this.state.userInfo.nickName}
                            />
                        </List>
                    </Group>
                    <Group noPadded className="margin-0 userTag">
                        <Grid className="padding-v-xs">
                            <Col>
                                <p className="userTagTit">关注</p>
                                <p className="userTagNum">{this.state.userInfo.attention}</p>
                            </Col>
                            <Col className="user-fans">
                                <p className="userTagTit">粉丝</p>
                                <p className="userTagNum">{this.state.userInfo.fans}</p>
                            </Col>
                            <Col>
                                <p className="userTagTit">赞</p>
                                <p className="userTagNum">{this.state.userInfo.portfolios}</p>
                            </Col>
                        </Grid>
                    </Group>
                    <Group noPadded className="margin-v userNav">
                        <List>
                            <List.Item href="#" title= {this.state.uid == publicFn.getUser() ? '我的部落' : (this.state.userInfo.gender == 'F' ? '她的部落': '他的部落')} media={<span className="userNav-bl"></span>}/>
                            <List.Item href="#" title={this.state.uid == publicFn.getUser() ? '我的话题' : (this.state.userInfo.gender == 'F' ? '她的话题': '他的话题')} media={<span className="userNav-ht"></span>}/>
                        </List>
                    </Group>
                    <Group noPadded className="margin-0 userNav">
                        <List>
                            <List.Item href="/user/require/01" title={this.state.uid == publicFn.getUser() ? '我的需求' : (this.state.userInfo.gender == 'F' ? '她的需求': '他的需求')} media={<span className="userNav-xq"></span>}/>
                            <List.Item href="/user/server/01" title={this.state.uid == publicFn.getUser() ? '我的服务' : (this.state.userInfo.gender == 'F' ? '她的服务': '他的服务')} media={<span className="userNav-fw"></span>}/>
                        </List>
                    </Group>
                </Container>
                <Group className={$.isEmptyObject(this.state.userInfo) ? 'text-center bgNone' : 'hidden'}>
                    改用户不存在
                </Group>
            </View>
        )
    }
}

User.contextTypes = {
    router: React.PropTypes.object
}

export default User;