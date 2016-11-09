import React from 'react'
import {
    Link,
} from 'react-router';
import NavLink from './NavLink'
import {NavBar, OffCanvasTrigger, OffCanvas, List, TabBar, Notification, Field} from 'amazeui-touch'
import $ from 'jquery'


class Header extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            visible: false
        };
    }

    openNotification() {
        this.setState({
            visible: true
        });
    }

    closeNotification() {
        this.setState({
            visible: false
        });
    }

    render() {
        return <div className="header">
            <Notification
                amStyle={this.state.amStyle}
                visible={this.state.visible}
                animated
                onDismiss={this.closeNotification.bind(this)}
            >
                <div>
                    <Field
                        label="Your Name"
                        containerClassName="my-label"
                        placeholder="What's your name."
                    />
                </div>
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
                title:'right'
            }]}
            onAction={this.openNotification.bind(this)}
            amStyle="dark"/>
        </div>;
    }
}

export default Header;

