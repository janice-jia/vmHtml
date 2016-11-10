import React from 'react'
//import {
//    Link,
//} from 'react-router';
import NavLink from './NavLink'
import {NavBar, OffCanvasTrigger, OffCanvas, List, TabBar, Notification, Field, Group, Grid, Col} from 'amazeui-touch'
import $ from 'jquery'


class Header extends React.Component{
    constructor(props) {
        super(props);

        //判断当前是否在搜索页，如果是搜索页则默认显示搜索导航条
        if(this.props.isSearch){
            this.state={
                visible: true
            };
        }else{
            this.state={
                visible: false
            };
        }
    }

    //打开搜索
    openNotification(item) {
        if(item.className == 'right'){
            this.setState({
                visible: true
            });
        }else{
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

    searchSubmit(event) {
        event.preventDefault()
        console.info('searchSubmit');
        const search = event.target.elements[0].value
        const path = `/repos/${search}`
        console.log(path)
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
                        <form onSubmit={this.searchSubmit}>
                            <Field name="search"  className="margin-0 padding-v-xs text-size-14" placeholder="众创" />
                        </form>
                    </Col>
                    <Col cols={1} className="padding-0 bgNone text-right" onClick={this.closeNotification.bind(this)}>
                        <p className="text-size-14 padding-v-xs">取消</p>
                    </Col>
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
                className:'right'
            }]}
            onAction={this.openNotification.bind(this)}
            amStyle="dark"/>
        </div>;
    }
}

export default Header;

