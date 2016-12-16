import React from 'react'
import {
    Button,
    View,
    Container,
    Tabs,
    Group,
    List,
    Grid,
    Col
} from 'amazeui-touch';
import _Header from './../components/_Header'
import _Server from '../components/_Server'
import ServerStore from '../stores/ServerStore'
import ServerActions from '../actions/ServerActions'
import ReactIScroll from 'react-iscroll'
import iscroll from 'iscroll'


class Server extends React.Component{
    constructor(props){
        super(props);
        this.state = ServerStore.getState();
        this.onChange = this.onChange.bind(this);
        this.state.type = 1;
        this.state.currentPage = 1;
        this.state.itemsPerPage = 10;


        this.state.y = 0;
        this.state.iScrollOptions={
            mouseWheel: true,
            scrollbars: true,
            scrollX: true,
            scrollY: true,
            click:true,
            invertWheelDirection: true,
            momentum: false,
        }
    }

    componentDidMount(){
        ServerStore.listen(this.onChange);
        ServerActions.getServerList({
            type:1,
            currentPage:this.state.currentPage,
            itemsPerPage:this.state.itemsPerPage
        });
        ServerActions.getServerList({
            type:2,
            currentPage:this.state.currentPage,
            itemsPerPage:this.state.itemsPerPage
        });
        ServerActions.getServerList({
            type:3,
            currentPage:this.state.currentPage,
            itemsPerPage:this.state.itemsPerPage
        });
    }

    componentWillUnmount() {
        ServerStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleAction(key){
        this.state.type = key+1;
        //ServerActions.getServerList({
        //    type:this.state.type,
        //    currentPage:this.state.currentPage,
        //    itemsPerPage:this.state.itemsPerPage
        //});
        this.onChange(this);
    }

    _handleScrollEnd (iScrollInstance) {
        console.info('iScrollInstance.y ',iScrollInstance.y );
        console.info('iScrollInstance.maxScrollY',iScrollInstance.maxScrollY);
        console.info('iScrollInstance',iScrollInstance);
        if((iScrollInstance.y - iScrollInstance.maxScrollY) < 25){
            //if(!this.state.lastPage){
            //    this.state.currentPage = this.state.currentPage + 1;
            //    TribeActions.getTribe({
            //        currentPage:this.state.currentPage,
            //        itemsPerPage:10
            //    });
            //}
        }
    }

    _handleScrollRefresh (iScrollInstance) {
        console.info('===============_handleScrollRefresh===========');
        const hasVerticalScroll = iScrollInstance.hasVerticalScroll
        iScrollInstance.hasVerticalScroll = true;

        if(this.state.canVerticallyScroll !== hasVerticalScroll) {
            this.setState({canVerticallyScroll: hasVerticalScroll})
        }
    };

    _handleScrollStart () {
        console.info('===============_handleScrollStart===========');
        this.setState({isScrolling: true})
    };

    render() {
        return <View>
            <_Header></_Header>
            <Container scrollable>
                <div className="server-tabs-list">
                    <Tabs onAction={this.handleAction.bind(this)} className="margin-0">
                        <Tabs.Item title='个人' key='1' className="padding-0">
                            <ReactIScroll iScroll={iscroll}
                                          options={this.state.iScrollOptions}
                                          onRefresh={this._handleScrollRefresh.bind(this)}
                                          onScrollStart={this._handleScrollStart.bind(this)}
                                          onScrollEnd={this._handleScrollEnd.bind(this)}
                            >
                                <_Server serverList={this.state.personalServerList}></_Server>
                            </ReactIScroll>
                        </Tabs.Item>
                        <Tabs.Item title='工作室' key='2' className="padding-0">
                            <_Server serverList={this.state.studioServerList}></_Server>
                        </Tabs.Item>
                        <Tabs.Item title='企业' key='3' className="padding-0">
                            <_Server serverList={this.state.companyServerList}></_Server>
                        </Tabs.Item>
                    </Tabs>
                </div>
            </Container>
            {this.props.children}
        </View>;
    }
}
export default Server;
