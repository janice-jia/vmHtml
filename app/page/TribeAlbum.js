import React from 'react';
import _Header from './../components/_Header'
import {
    Container, Group, List, View, Badge,Grid,Col
} from 'amazeui-touch';

const albumList=[
    {
        img:"http://lorempixel.com/160/160/people/",
        name:"相册名称",
        href:"/tribe/album/info/01"
    },
    {
        img: "http://s.amazeui.org/media/i/demos/bing-1.jpg",
        name:"相册2",
        href:"/tribe/album/info/01"

    },
    {
        img:"http://lorempixel.com/128/128/people/",
        name:"相册3",
        href:"/tribe/album/info/01"
    },
    {
        img:"http://lorempixel.com/160/160/people/",
        name:"相册4",
        href:"/tribe/album/info/01"
    },
    {
        img: "http://s.amazeui.org/media/i/demos/bing-1.jpg",
        name:"相册5",
        href:"/tribe/album/info/01"
    },
    {
        img:"http://lorempixel.com/128/128/people/",
        name:"相册6",
        href:"/tribe/album/info/01"
    },
    {
        img:"http://lorempixel.com/160/160/people/",
        name:"相册7",
        href:"/tribe/album/info/01"
    },
    {
        img: "http://s.amazeui.org/media/i/demos/bing-1.jpg",
        name:"相册8",
        href:"/tribe/album/info/01"
    },
    {
        img:"http://lorempixel.com/128/128/people/",
        name:"相册9",
        href:"/tribe/album/info/01"
    }
];

export default React.createClass({
    render() {
        return <View>
            <_Header></_Header>
            <Container scrollable className="tribe">
                <Grid avg={3} className="text-center tribe-album">
                    {
                        albumList.map((album, i) => {
                            return (
                                <Col key={i}>
                                    <a href={album.href}>
                                        <div className="albumImg">
                                            <img src={album.img} alt=""/>
                                        </div>
                                        <div className="tribe-albumName">
                                            {album.name}
                                        </div>
                                    </a>

                                </Col>
                            );
                        })
                    }
                </Grid>
            </Container>
        </View>

    }
})
