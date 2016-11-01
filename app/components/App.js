import React from 'react'
import {Container} from 'amazeui-touch';

export default React.createClass({
    render() {
        return (
            <Container>{this.props.children}</Container>
        )
    }
})
