import React from 'react';
import _Header from './../components/_Header'
import TribeComicActions from '../actions/TribeComicActions'
import TribeComicStore from '../stores/TribeComicStore'
import {Container, Group, List, View, Badge,Grid,Col} from 'amazeui-touch';


class TribeComic extends React.Component{
    constructor(props){
        super(props);
        this.state = TribeComicStore.getState();
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
        TribeComicStore.listen(this.onChange);
        TribeComicActions.getTribeComic({
            tabId:this.props.params.tabId,
            tribeId:this.props.params.tribeId,
            currentPage:this.state.currentPage,
            itemsPerPage:10
        });
    }

    componentWillUnmount() {
        TribeComicStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    _lookNovelInfo(item){
        this.context.router.push({
            pathname:'/tribe/comic/info/'+item.id,
            query: {
                comic:item.comic,
                title:item.title
            }
        })
    }

    render() {
        return <View>
            <_Header></_Header>
            <Container scrollable className="tribe-novel">
                <Group className="margin-0" noPadded>
                    <List className="margin-h margin-v-0">
                        {
                            this.state.tribeComicList.map((item, i) => {
                                return (
                                    <List.Item  key={i} className="border-v-dashed text-size-14 text-color-3" onClick={this._lookNovelInfo.bind(this,item)}>{item.title}</List.Item>
                                );
                            })
                        }
                    </List>
                </Group>
            </Container>
        </View>

    }
}

TribeComic.contextTypes = {
    router: React.PropTypes.object
}

export default TribeComic;