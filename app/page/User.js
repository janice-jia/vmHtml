import React from 'react'
import {browserHistory}  from 'react-router'
import {View, Container, Group, List, Grid, Col} from 'amazeui-touch';
import _Header from './../components/_Header'
import UserActions from './../actions/UserActions'
import UserStore from './../stores/UserStore'
import $ from 'jquery'

class User extends  React.Component{
    constructor(props) {
        super(props);
        this.state = UserStore.getState();
        this.onChange = this.onChange.bind(this);
        this.state.uid = sessionStorage.uid;
        this.state.userType = '他的';
    }

    componentDidMount(){
        UserStore.listen(this.onChange);
        var uid = this.props.params.uid;
        if(uid == sessionStorage.uid){
            UserActions.getUser({uid:uid,password:''});
            this.state.userType = '我的';
            this.refs.btnAttention.remove();
        }else{
            UserActions.getLookUser(uid);
            if(this.state.gender == 'F'){
                this.state.userType = '他的';
            }else if(this.state.gender == 'M'){
                this.state.userType = '她的';
            }else{
                this.state.userType = '他的';
            }
        }
        if(this.state.gender == 'F'){
            this.state.genderF = 'user-man';
            this.state.genderM = 'hidden';
        }else if(this.state.gender == 'M'){
            this.state.genderF = 'hidden';
            this.state.genderM = 'user-woman';
        }else{
            this.state.genderF = 'hidden';
            this.state.genderM = 'hidden';
        }
    }

    componentWillUnmount() {
        UserStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
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
                                    <div className="user-avatar">
                                        <a href={'/user/info/'+this.state.userInfo.uid}><img width="65" height="65" src={this.state.userInfo.avatar}/></a>
                                        <span className={this.state.genderF}></span>
                                        <span className={this.state.genderM}></span>
                                    </div>
                                }
                                after={<button ref="btnAttention" className="btn-yellow">关注</button>}
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
                            <List.Item href="#" title={this.state.userType+'部落'} media={<span className="userNav-bl"></span>}/>
                            <List.Item href="#" title={this.state.userType+'话题'} media={<span className="userNav-ht"></span>}/>
                        </List>
                    </Group>
                    <Group noPadded className="margin-0 userNav">
                        <List>
                            <List.Item href="/user/require/01" title={this.state.userType+'需求'} media={<span className="userNav-xq"></span>}/>
                            <List.Item href="/user/server/01" title={this.state.userType+'服务'} media={<span className="userNav-fw"></span>}/>
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
    user:React.PropTypes.string
}

User.defaultProps = {
    color:'test'
}

export default User;