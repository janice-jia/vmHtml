import React from 'react';
import _Header from './../components/_Header'
import TribeNovelActions from '../actions/TribeNovelActions'
import TribeNovelStore from '../stores/TribeNovelStore'
import {Container, Group, List, View, Badge,Grid,Col} from 'amazeui-touch';


class TribeNovel extends React.Component{
    constructor(props){
        super(props);
        this.state = TribeNovelStore.getState();
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
        TribeNovelStore.listen(this.onChange);
        TribeNovelActions.getTribeNovel({
            tabId:this.props.params.tabId,
            tribeId:this.props.params.tribeId,
            currentPage:this.state.currentPage,
            itemsPerPage:10
        });
    }

    componentWillUnmount() {
        TribeNovelStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    _lookNovelInfo(item){
        this.context.router.push({
            pathname:'/tribe/novel/info/'+item.id,
            query: {
                content:item.content,
                title:item.title
            }
        })
    }

    render() {
        return <View>
            <_Header></_Header>
            <Group className={this.state.tribeNovelList.length>0 ? 'hidden' : 'null-con bgF margin-0'}>没有内容！</Group>
            <Container scrollable className={this.state.tribeNovelList.length>0 ? 'tribe-novel' : 'hidden'}>
                <Group className="margin-0" noPadded>
                    <List className="margin-h margin-v-0">
                        {
                            this.state.tribeNovelList.map((item, i) => {
                                return (
                                    <List.Item  key={i} className="border-v-dashed" onClick={this._lookNovelInfo.bind(this,item)}>{item.title}</List.Item>
                                );
                            })
                        }
                    </List>
                </Group>
            </Container>
        </View>

    }
}

TribeNovel.contextTypes = {
    router: React.PropTypes.object
}

export default TribeNovel;