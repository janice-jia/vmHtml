import React from 'react'
import {View, Container, Group} from 'amazeui-touch';
import Header from './_Header'

export default React.createClass({
    render() {
        return (
            <View>
                <Container>
                    <Header></Header>
                    <Group className="regLog-logo">
                        <div className="regLog-logo-img"></div>
                    </Group>
                </Container>
            </View>
        )
    }
})
