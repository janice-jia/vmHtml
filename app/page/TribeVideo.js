import React from 'react';
import _Header from './../components/_Header'
import TribeVideoActions from '../actions/TribeVideoActions'
import TribeVideoStore from '../stores/TribeVideoStore'
import {
    Container, Group, List, View, Badge,Grid,Col
} from 'amazeui-touch';


class TribeVideo extends React.Component{
    constructor(props){
        super(props);
        this.state = TribeVideoStore.getState();
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
        TribeVideoStore.listen(this.onChange);
        TribeVideoActions.getTribeVideo({
            tribeId:this.props.params.tribeId,
            currentPage:this.state.currentPage,
            itemsPerPage:10
        });
    }

    componentWillUnmount() {
        TribeVideoStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    render() {
        return <View>
            <_Header></_Header>
            <Container scrollable className="tribe">
                <Grid avg={3} className="text-center tribe-album">
                    {
                        this.state.tribeVideoList.map((item, i) => {
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
export default TribeVideo;