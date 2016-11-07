import React from 'react';
import Header from './Header'
import {
    Container, Group, List, View, Badge
} from 'amazeui-touch';

const albums = {
        title: '原画部落',
        media: 'http://lorempixel.com/160/160/people/',
        subTitle: '123456',
        desc: '一句话简介一句话简介一句话简介一句话简介一句话简介一句话简介一句话简介一句话简介一句话简介一句话简介'
    };

export default React.createClass({
    render() {
        return <View>
            <Container className="tribe">
                <Header></Header>
                <div className="bgF tribe-info-user">
                    <List.Item
                        {...albums}
                        subTitle={'族员：'+ albums.subTitle}
                        media={<img src={ albums.media }/>}
                        after={<button className="tribe-user-btn">加入部落</button>}
                        //title={tit}
                    />
                </div>
            </Container>
        </View>

    }
})

