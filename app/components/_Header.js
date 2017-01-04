import React from 'react'
import { browserHistory, Link } from 'react-router'
import NavLink from './../page/NavLink'
import {NavBar, OffCanvasTrigger, OffCanvas, List, TabBar, Notification, Field, Group, Grid, Col, Button, Icon} from 'amazeui-touch'
import publicFn from '../publicFn'
import UserStore from '../stores/UserStore'
import UserActions from '../actions/UserActions'
import cookie from 'react-cookie'

//公用头部组件
class _Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = UserStore.getState();
        this.onChange = this.onChange.bind(this);
        //判断当前是否在搜索页，如果是搜索页则默认显示搜索导航条
        if (this.props.isSearch) {
            this.state.visible = true;
            this.state.searchVal = this.props.searchVal;
        } else {
            this.state.visible = false;
            this.state.searchVal = '';
        }
        if(publicFn.isUser()){
            this.state.uid = publicFn.getUser();
        }else{
            this.state.uid = '';
        }
    }

    componentDidMount() {
        UserStore.listen(this.onChange);
        if(publicFn.isUser() && this.state.uid){
            UserActions.getUser({uid:this.state.uid});
        }
    }

    componentWillUnmount() {
        UserStore.unlisten(this.onChange);
    }

    //打开搜索
    openNotification(item) {
        if (item.className == 'search') {
            this.setState({
                visible: true
            });
        } else {
            this.setState({
                visible: false
            });
        }
    }

    //关闭搜索
    closeNotification() {
        this.setState({
            visible: false
        });
    }

    changeSearch(event) {
        this.setState({
            searchVal: event.target.value
        })
    }

    cleanSearch() {
        this.setState({
            searchVal: ''
        })
    }

    onChange(state) {
        this.setState(state)
    }

    logOut(){
        //localStorage.clear();
        cookie.remove('uid', { path: '/' });
        alert('退出成功');
        this.setState({uid:''});
    }

    render() {
        return <div className="header">
            <Notification
                className="padding-v-xs"
                amStyle={this.state.amStyle}
                visible={this.state.visible}
                animated
                closeBtn={false}
                onDismiss={this.closeNotification.bind(this)}
            >
                <Grid className="bgNone header-search">
                    <Col cols={5} className="padding-0">
                        <form action="/search">
                            <input type="hidden" name="searchType" value={this.props.searchType}/>
                            <List className="margin-0">
                                <List.Item key="1"  media={<Icon className="header-icon-search" name=""></Icon>} nested="input" >
                                    <Field ref="search" name="search" onChange={this.changeSearch.bind(this)} value={this.state.searchVal} className="margin-0 padding-v-xs text-size-14" placeholder="" btnAfter={<Icon className="header-icon-close" name="" onClick={this.cleanSearch.bind(this)}></Icon>}/>
                                </List.Item>
                            </List>
                        </form>
                    </Col>
                    <Col cols={1} className="padding-0 bgNone text-right" onClick={this.closeNotification.bind(this)}>
                        <p className="text-size-14 padding-v-xs cancel"><a href="/">取消</a></p>
                    </Col>
                </Grid>

            </Notification>

            <NavBar
                className="Header"
                title={<div className="home-logo text-size-12"><a href="/"></a></div>}
                leftNav={[{title: '',
                component: OffCanvasTrigger,
                className:"leftNav",
                offCanvas:<OffCanvas>
                        <Group className={this.state.uid ? 'hidden' : 'header-login bgNone margin-0 padding-v '}>
                            <Link to="/register" className="btn-yellow margin-bottom">注册</Link>
                            <Link to="/login" className="btn-white-noBorder">登陆</Link>
                        </Group>
                        <Group className={this.state.uid ? 'header-login bgNone margin-0 ' : 'hidden'}>
                            <div className="header-user-avatar margin-v">
                                <a href={'/user/'+this.state.uid}><img src={this.state.userInfo.avatar} height="50" width="50" alt=""/></a>
                            </div>
                            <div className="header-user-name text-color-7 text-size-16"><a href={'/user/'+this.state.uid}>用户名用户名</a></div>
                        </Group>
                        <List className="header-nav">
                            <List.Item
                                linkComponent={NavLink}
                                media={<Icon name=""/>}
                                linkProps={{
                                    to: `/`,
                                    onClick: this.onDismiss,
                                    onlyActiveOnIndex:true
                                }}
                                title="首页"
                                className="header-nav-icon header-nav-index"
                            />
                            <List.Item
                                linkComponent={NavLink}
                                media={<Icon name=""/>}
                                linkProps={{
                                    to: '/tribe/list',
                                    onClick: this.onDismiss,
                                }}
                                title="部落"
                                className="header-nav-icon header-nav-tribe"
                            />
                            <List.Item
                                linkComponent={NavLink}
                                media={<Icon name=""/>}
                                linkProps={{
                                    to: '/require',
                                    onClick: this.onDismiss,
                                }}
                                title="需求"
                                className="header-nav-icon header-nav-require"
                            />
                            <List.Item
                                linkComponent={NavLink}
                                media={<Icon name=""/>}
                                linkProps={{
                                    to: '/server',
                                    onClick: this.onDismiss,
                                }}
                                title="服务"
                                className="header-nav-icon header-nav-server"
                            />
                        </List>
                        <div className={this.state.uid ? 'header-logout' : 'hidden'} onClick={this.logOut.bind(this)}>退出登录</div>
                    </OffCanvas>,
                isClone:true}]}
                rightNav={publicFn.isUser() ?
                        [{
                            title:'',
                            className:'msg left',
                            href:'/notice'
                        },{
                            title:'',
                            className:'search margin-left',
                            href:'/search'
                        }]
                        :
                        [{
                            title:'',
                            className:'search margin-left',
                            href:'/search'
                        }]}
                onAction={this.openNotification.bind(this)}
                amStyle="dark"/>
        </div>;
    }
}

export default _Header;

