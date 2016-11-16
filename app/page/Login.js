import React from 'react'
import {View, Container, Group} from 'amazeui-touch';
import _Header from './../components/_Header'

export default React.createClass({
    render() {
        return (
            <View>
                <Container>
                    <_Header/>
                    <Group className="regLog-logo">
                        <div className="regLog-logo-img"></div>
                    </Group>
                </Container>
            </View>
        )
    }
})
