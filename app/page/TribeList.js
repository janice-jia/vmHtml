import React from 'react';
import _Header from './../components/_Header'
import _Tribe from './../components/_Tribe'
import {Container, Group, List, View, Badge} from 'amazeui-touch';
import TribeListActions from './../actions/TribeListActions'
import TribeListStore from './../stores/TribeListStore'
import ReactIScroll from 'react-iscroll'
import iscroll from 'iscroll'
import _DownLoadApp from '../components/_DownLoadApp'

class TribeList extends React.Component{
    constructor(props){
        super(props);
        this.state = TribeListStore.getState();
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
        TribeListStore.listen(this.onChange);
        TribeListActions.getTribe({
            currentPage:this.state.currentPage,
            itemsPerPage:10
        });
        //console.info('tribeList',this.state.tribeList);
    }

    componentWillUnmount() {
        TribeListStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    _handleScrollEnd (iScrollInstance) {
        if((iScrollInstance.y - iScrollInstance.maxScrollY) < 25){
            if(!this.state.lastPage){
                this.state.currentPage = this.state.currentPage + 1;
                TribeListActions.getTribe({
                    currentPage:this.state.currentPage,
                    itemsPerPage:10
                });
            }
        }
    }

    render() {
        return <View>
            <_Header></_Header>
            <Container scrollable id="wrapper">
                <ReactIScroll iScroll={iscroll}
                              options={this.state.iScrollOptions}
                              onScrollEnd={this._handleScrollEnd.bind(this)}
                >
                    <div style={{paddingBottom:'40px'}}>
                        <_Tribe tribeList={this.state.tribeList}></_Tribe>
                    </div>
                </ReactIScroll>
                <_DownLoadApp></_DownLoadApp>
            </Container>
        </View>
    }
}

export default TribeList

