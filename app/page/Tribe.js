import React from 'react';
import _Header from './../components/_Header'
import _Tribe from './../components/_Tribe'
import {Container, Group, List, View, Badge} from 'amazeui-touch';
import TribeActions from './../actions/TribeActions'
import TribeStore from './../stores/TribeStore'
import ReactIScroll from 'react-iscroll'
import iscroll from 'iscroll'
import $  from 'jquery'

class Tribe extends React.Component{
    constructor(props){
        super(props);
        this.state = TribeStore.getState();
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
        TribeStore.listen(this.onChange);
        TribeActions.getTribe({
            currentPage:this.state.currentPage,
            itemsPerPage:10
        });
        //console.info('tribeList',this.state.tribeList);
    }

    componentWillUnmount() {
        TribeStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    _handleScrollEnd (iScrollInstance) {
        if((iScrollInstance.y - iScrollInstance.maxScrollY) < 25){
            if(!this.state.lastPage){
                this.state.currentPage = this.state.currentPage + 1;
                TribeActions.getTribe({
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
                    <_Tribe tribeList={this.state.tribeList}></_Tribe>
                </ReactIScroll>
            </Container>
        </View>
    }
}

export default Tribe

