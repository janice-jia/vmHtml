import React from 'react'
import {Button, View, Container, Tabs, Group, List, Grid, Col} from 'amazeui-touch';
import _Header from './../components/_Header'
import _Server from '../components/_Server'
import _DownLoadApp from '../components/_DownLoadApp'
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
        this.setState({type :key+1});
        //ServerActions.getServerList({
        //    type:this.state.type,
        //    currentPage:this.state.currentPage,
        //    itemsPerPage:this.state.itemsPerPage
        //});
        //this.onChange(this);
    }


    _handleScrollEnd (iScrollInstance) {
        console.info('iScrollInstance.y ',iScrollInstance.y );
        console.info('iScrollInstance.maxScrollY',iScrollInstance.maxScrollY);
        //console.info('iScrollInstance',iScrollInstance);
        if((iScrollInstance.y - iScrollInstance.maxScrollY) < 25){
            if(!this.state.lastPage){
                this.state.currentPage = this.state.currentPage + 1;
                ServerActions.getServerList({
                    type:this.state.type,
                    currentPage:this.state.currentPage,
                    itemsPerPage:this.state.itemsPerPage
                });
            }
        }
    }

    render() {
        return <View>
            <_Header></_Header>
            <Container scrollable>
                <div className="server-tabs-list">
                    <Tabs onAction={this.handleAction.bind(this)} className="margin-0">
                        <Tabs.Item title='个人' key='1' className="padding-0">
                        </Tabs.Item>
                        <Tabs.Item title='工作室' key='2' className="padding-0">
                        </Tabs.Item>
                        <Tabs.Item title='企业' key='3' className="padding-0">
                        </Tabs.Item>
                    </Tabs>
                </div>


                    <ReactIScroll iScroll={iscroll}
                                  options={this.state.iScrollOptions}
                                  onScrollEnd={this._handleScrollEnd.bind(this)}
                                  className={this.state.type == 1 ? '' : 'hidden'}
                    >
                        <div style={{paddingBottom:'60px'}}>
                            <_Server serverList={this.state.personalServerList}></_Server>
                        </div>
                    </ReactIScroll>

                    <ReactIScroll iScroll={iscroll}
                              options={this.state.iScrollOptions}
                              onScrollEnd={this._handleScrollEnd.bind(this)}
                                  className={this.state.type == 2 ? '' : 'hidden'}
                    >
                        <div style={{paddingBottom:'60px'}}>
                            <_Server serverList={this.state.studioServerList}></_Server>
                        </div>
                    </ReactIScroll>

                    <ReactIScroll iScroll={iscroll}
                                  options={this.state.iScrollOptions}
                                  onScrollEnd={this._handleScrollEnd.bind(this)}
                                  className={this.state.type == 3 ? '' : 'hidden'}
                    >
                        <div style={{paddingBottom:'60px'}}>
                            <_Server serverList={this.state.companyServerList}></_Server>
                        </div>
                    </ReactIScroll>

            </Container>
            <_DownLoadApp></_DownLoadApp>
        </View>;
    }
}
export default Server;
