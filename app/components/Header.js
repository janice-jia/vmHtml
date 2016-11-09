import React from 'react'
import {
    Link,
} from 'react-router';
import NavLink from './NavLink'
import {NavBar, OffCanvasTrigger, OffCanvas, List, TabBar, Notification, Field, Group, Grid, Col} from 'amazeui-touch'
import $ from 'jquery'


class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            visible: false
        };
    }

    //打开搜索
    openNotification() {
        this.setState({
            visible: true
        });
    }

    //关闭搜索
    closeNotification() {
        this.setState({
            visible: false
        });
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
                        <form action="">
                            <Field className="margin-0 padding-v-xs text-size-14"
                                placeholder="众创"
                            />
                        </form>
                    </Col>
                    <Col cols={1} className="padding-0 bgNone text-right" onClick={this.closeNotification.bind(this)}><p className="text-size-14 padding-v-xs">取消</p></Col>
                </Grid>

            </Notification>

            <NavBar
            className="Header"
            title="vmaking"
            leftNav={[{title: '',
                icon:'bars',
                component: OffCanvasTrigger,
                offCanvas:<OffCanvas>
                        <List>
                        <List.Item
                          linkComponent={NavLink}
                          linkProps={{
                            to: `/`,
                            onClick: this.onDismiss,
                            onlyActiveOnIndex:true
                          }}
                          title="首页"
                        />
                        <List.Item
                          linkComponent={NavLink}
                          linkProps={{
                            to: '/tribe',
                            onClick: this.onDismiss,
                          }}
                          title="部落"
                        />
                        <List.Item
                          linkComponent={NavLink}
                          linkProps={{
                            to: '/require',
                            onClick: this.onDismiss,
                          }}
                          title="需求"
                        />
                        <List.Item
                          linkComponent={NavLink}
                          linkProps={{
                            to: '/server',
                            onClick: this.onDismiss,
                          }}
                          title="服务"
                        />
                      </List>
                    </OffCanvas>,
                isClone:true}]}
            rightNav={[{
                title:'right',
            }]}
            onAction={this.openNotification.bind(this)}
            amStyle="dark"/>
        </div>;
    }
}

export default Header;

