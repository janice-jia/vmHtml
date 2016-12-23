import React from 'react';
import _Header from './../components/_Header'
import TribeAlbumActions from '../actions/TribeAlbumActions'
import TribeAlbumStore from '../stores/TribeAlbumStore'
import {
    Container, Group, List, View, Badge,Grid,Col
} from 'amazeui-touch';


class TribeAlbum extends React.Component{
    constructor(props){
        super(props);
        this.state = TribeAlbumStore.getState();
        this.onChange = this.onChange.bind(this);
        this.state.currentPage = 1;
        this.state.iScrollOptions={
            mouseWheel: true,
            scrollbars: true,
            scrollX: true,
            scrollY: true,
            click:true
        }
    }

    componentDidMount(){
        TribeAlbumStore.listen(this.onChange);
        TribeAlbumActions.getTribeAlbum({
            tabId:this.props.params.tabId,
            tribeId:this.props.params.tribeId,
            currentPage:this.state.currentPage,
            itemsPerPage:10
        });
    }

    componentWillUnmount() {
        TribeAlbumStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return <View>
            <_Header></_Header>
            <Group className={this.state.tribeAlbumList.length>0 ? 'hidden' : 'null-con bgF margin-0'}>没有内容！</Group>
            <Container scrollable className={this.state.tribeAlbumList.length > 0 ? 'tribe' : 'hidden'}>
                <Grid avg={3} className="text-center tribe-album">
                    {
                        this.state.tribeAlbumList.map((item, i) => {
                            return (
                                <Col key={i}>
                                    <a href={'/tribe/'+item.tribesId+'/album/info/'+item.id}>
                                        <div className="albumImg">
                                            <img src={item.cover} alt=""/>
                                        </div>
                                        <div className="tribe-albumName">
                                            {item.name}
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
}
export default TribeAlbum;