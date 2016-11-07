import React from 'react';
import Header from './Header'
import {
    Container, Group, List, View, Badge,Grid,Col
} from 'amazeui-touch';

const albumList=[
    {
        img:"http://lorempixel.com/160/160/people/",
        name:"相册名称"
    },
    {
        img: "http://s.amazeui.org/media/i/demos/bing-1.jpg",
        name:"相册2"
    },
    {
        img:"http://lorempixel.com/128/128/people/",
        name:"相册3"
    },
    {
        img:"http://lorempixel.com/160/160/people/",
        name:"相册4"
    },
    {
        img: "http://s.amazeui.org/media/i/demos/bing-1.jpg",
        name:"相册5"
    },
    {
        img:"http://lorempixel.com/128/128/people/",
        name:"相册6"
    },
    {
        img:"http://lorempixel.com/160/160/people/",
        name:"相册7"
    },
    {
        img: "http://s.amazeui.org/media/i/demos/bing-1.jpg",
        name:"相册8"
    },
    {
        img:"http://lorempixel.com/128/128/people/",
        name:"相册9"
    }
];

export default React.createClass({
    render() {
        return <View>
            <Container scrollable className="tribe">
                <Header></Header>
                
            </Container>
        </View>

    }
})
