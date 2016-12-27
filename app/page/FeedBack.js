import React from 'react'
import {View, Container, Group} from 'amazeui-touch';
import _Header from './../components/_Header'

export default React.createClass({

    render() {
        return (
            <View>
                <_Header/>
                <Container scrollable>
                    <Group className="margin-0" noPadded>
                        <div className="feedBack margin-h-xs">
                            <textarea name="" id="" cols="30" rows="10" placeholder="请填写反馈内容"></textarea>
                            <input className="margin-bottom-0" type="number" placeholder="请填写联系手机（选填）"/>
                            <input type="number" placeholder="请填写联系QQ（选填）"/>
                        </div>
                    </Group>
                    <div className="feedBack-btn padding-h-xs">
                        <button className="btn-gray padding-0">提交</button>
                    </div>
                </Container>
            </View>
        )
    }
})
