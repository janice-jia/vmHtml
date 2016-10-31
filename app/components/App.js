import React from 'react'
import {
    Link,
} from 'react-router';
import NavLink from './NavLink'
import {
    Container,
    Group,
    NavBar,
    OffCanvas,
    OffCanvasTrigger,
    List
} from 'amazeui-touch';

export default React.createClass({
    onDismiss(e) {
        // 从 OffCanvas 内部元素关闭 OffCanvas
        // 紧耦合，需要重构 OffCanvas
        this.refs.oct.close();
    },
    render() {
        return (
            <Container>
                <Container>{this.props.children}</Container>
                <NavBar
                    title="vmaking"
                    leftNav={[{title: '',
                icon:'bars',
                component: OffCanvasTrigger,
                offCanvas:<OffCanvas>
                        <List>
                        <List.Item
                          linkComponent={Link}
                          linkProps={{
                            to: `/`,
                            onClick: this.onDismiss,
                          }}
                          title="Home"
                        />
                        <List.Item
                          linkComponent={Link}
                          linkProps={{
                            to: '/test',
                            onClick: this.onDismiss,
                          }}
                          title="Test"
                        />
                      </List>
                    </OffCanvas>,
                isClone:true}]}
                    rightNav={[{title:'right'}]}
                    amStyle="dark"/>
            </Container>
        )
    }
})
