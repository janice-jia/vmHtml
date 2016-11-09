import React from 'react'
import {
    Link,
} from 'react-router';
import NavLink from './NavLink'
import {NavBar, OffCanvasTrigger, OffCanvas, List, TabBar} from 'amazeui-touch'

class Header extends React.Component{
    onDismiss(e) {
        // 从 OffCanvas 内部元素关闭 OffCanvas
        // 紧耦合，需要重构 OffCanvas
        this.refs.oct.close();
    }
    render() {
        return <NavBar
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
            rightNav={[{title:'right'}]}
            amStyle="dark"/>;
    }
}

export default Header;

