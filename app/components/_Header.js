import React from 'react'
import { browserHistory, Link } from 'react-router'
import NavLink from './../page/NavLink'
import {NavBar, OffCanvasTrigger, OffCanvas, List, TabBar, Notification, Field, Group, Grid, Col, Button, Icon} from 'amazeui-touch'

//公用头部组件
class _Header extends React.Component {
    constructor(props) {
        super(props);
        //判断当前是否在搜索页，如果是搜索页则默认显示搜索导航条
        if (this.props.isSearch) {
            this.state = {
                visible: true,
                searchVal: this.props.searchVal
            };
        } else {
            this.state = {
                visible: false,
                searchVal: ''
            };
        }
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {

    }

    //打开搜索
    openNotification(item) {
        if (item.className == 'right') {
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

    handleChange(event) {
        this.setState({
            searchVal: event.target.value
        })
    }

    onChange(state) {
        this.setState(state)
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
                <Grid className="bgNone">
                    <Col cols={5} className="padding-0">
                        <form action="/search">
                            <Field name="search" onChange={this.handleChange.bind(this)} value={this.state.searchVal}
                                   className="margin-0 padding-v-xs text-size-14" placeholder="众创"/>
                        </form>
                    </Col>
                    <Col cols={1} className="padding-0 bgNone text-right" onClick={this.closeNotification.bind(this)}>
                        <p className="text-size-14 padding-v-xs">取消</p>
                    </Col>
                </Grid>

            </Notification>

            <NavBar
                className="Header"
                title={<div className="home-logo text-size-12">logo</div>}
                leftNav={[{title: '',
                icon:'bars',
                component: OffCanvasTrigger,
                offCanvas:<OffCanvas>
                        <Group className="header-login bgNone margin-0 padding-v">
                            <Link to="/register" className="btn-yellow margin-bottom">注册</Link>
                            <Link to="/login" className="btn-white-noBorder">登陆</Link>
                        </Group>
                        <Group className="header-login bgNone margin-0 hidden">
                            <div className="header-user-avatar margin-v"><img src="http://s.amazeui.org/media/i/demos/bing-2.jpg" height="50" width="50" alt=""/></div>
                            <div className="header-user-name text-color-7 text-size-16">用户名用户名</div>
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
                                to: '/tribe',
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
                    </OffCanvas>,
                isClone:true}]}
                rightNav={[{
                title:'right',
                className:'right'
            }]}
                onAction={this.openNotification.bind(this)}
                amStyle="dark"/>
        </div>;
    }
}

export default _Header;

