import React from 'react';
import Header from './Header'
import {
    Container, Group, List, View, Badge, Grid, Col,TabBar
} from 'amazeui-touch';

const albumList = {
    "msg": "23",
    "imgarr" : [
        {
            img:"http://lorempixel.com/160/160/people/",
            href:"/tribe/album/info/01"
        },
        {
            img: "http://s.amazeui.org/media/i/demos/bing-1.jpg",
            href:"/tribe/album/info/01"

        },
        {
            img:"http://lorempixel.com/128/128/people/",
            href:"/tribe/album/info/01"
        },
        {
            img:"http://lorempixel.com/160/160/people/",
            href:"/tribe/album/info/01"
        },
        {
            img: "http://s.amazeui.org/media/i/demos/bing-1.jpg",
            href:"/tribe/album/info/01"
        },
        {
            img:"http://lorempixel.com/128/128/people/",
            href:"/tribe/album/info/01"
        },
        {
            img:"http://lorempixel.com/160/160/people/",
            href:"/tribe/album/info/01"
        },
        {
            img: "http://s.amazeui.org/media/i/demos/bing-1.jpg",
            href:"/tribe/album/info/01"
        },
        {
            img:"http://lorempixel.com/128/128/people/",
            href:"/tribe/album/info/01"
        }
    ]
};



export default React.createClass({
    render() {
        return <View>
            <Container scrollable fill className="tribe">
                <Header></Header>
               
            </Container>
        </View>

    }
})
