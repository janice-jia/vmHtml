import React from 'react'
import {View, Container, Tabs, List, Grid, Col} from 'amazeui-touch'
import _Header from './../components/_Header'
import _Tribe from './../components/_Tribe'
import _TopicItem from './../components/_TopicItem'
import _Require from './../components/_Require'
import _Server from './../components/_Server'
import _DownLoadApp from './../components/_DownLoadApp'
import SearchActions from '../actions/SearchActions'
import SearchStore from '../stores/SearchStore'
import ReactIScroll from 'react-iscroll'
import iscroll from 'iscroll'

class Search extends React.Component{
    constructor(props) {
        super(props);
        this.state = SearchStore.getState();
        this.state.visible = true;
        this.state.searchVal = this.props.location.query.search;
        this.state.itemsPerPage = 10;
        this.state.currentPage_tribe = 1;
        this.state.currentPage_topic = 1;
        this.state.currentPage_require = 1;
        this.state.currentPage_server = 1;
        this.state.activeTab = parseInt(this.props.location.query.searchType) ? parseInt(this.props.location.query.searchType) : 0;
        //console.info('this.state,',this.state);
        this.state.iScrollOptions={
            mouseWheel: true,
            scrollbars: true,
            scrollX: true,
            scrollY: true,
            click:true,
            invertWheelDirection: true,
            momentum: false,
        }
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        SearchStore.listen(this.onChange);
        this.SearchAction(this.state.activeTab);
    }

    componentWillUnmount() {
        SearchStore.unlisten(this.onChange);
    }

    onChange(state) {
        this.setState(state);
    }

    handleChange(event) {
        this.setState({
            searchVal: event.target.value
        })

    }

    SearchAction(key){
        //话题搜索
        this.setState({
            activeTab: key,
            lastPage:false
        });
        console.info('this.state',this.state);
        if(key == 0){
            if(!this.state.lastPage_tribe){
                this.searchTribe(this.state.currentPage_tribe);
            }
        }else if(key == 1){
            if(!this.state.lastPage_topic){
                this.searchTopic(this.state.currentPage_topic);
            }
        }else if(key == 2){
            if(!this.state.lastPage_require) {
                this.searchRequire(this.state.currentPage_require);
            }
        }else if(key == 3){
            if(!this.state.lastPage_server){
                this.searchServer(this.state.currentPage_server);
            }
        }

    }

    //部落搜索
    searchTribe(currentPage){
        if(this.state.searchVal) {
            //部落搜索
            SearchActions.searchTribes({
                searchValue: this.state.searchVal,
                currentPage: currentPage ? currentPage : this.state.currentPage_tribe,
                itemsPerPage: this.state.itemsPerPage,
            });
        }
    }

    //话题搜索
    searchTopic(currentPage){
        if(this.state.searchVal) {
            //话题搜索
            SearchActions.searchTopic({
                searchValue: this.state.searchVal,
                currentPage: currentPage ? currentPage : this.state.currentPage_topic,
                itemsPerPage: this.state.itemsPerPage,
            });
        }
    }

    //需求搜索
    searchRequire(currentPage){
        if(this.state.searchVal) {
            //需求搜索
            SearchActions.searchRequire({
                searchValue: this.state.searchVal,
                currentPage: currentPage ? currentPage : this.state.currentPage_require,
                itemsPerPage: this.state.itemsPerPage,
            });
        }
    }

    //服务搜索
    searchServer(currentPage){
        if(this.state.searchVal) {
            //服务搜索
            SearchActions.searchServer({
                searchValue: this.state.searchVal,
                currentPage: currentPage ? currentPage : this.state.currentPage_server,
                itemsPerPage: this.state.itemsPerPage,
            });
        }
    }

    _handleScrollEnd (iScrollInstance) {
        if((iScrollInstance.y - iScrollInstance.maxScrollY) < 25) {
            if (this.state.activeTab == 0) {
                if(!this.state.lastPage_tribe) {
                    this.state.currentPage_tribe = this.state.currentPage_tribe + 1;
                    this.searchTribe(this.state.currentPage_tribe);
                }
            } else if (this.state.activeTab == 1) {
                if(!this.state.lastPage_topic) {
                    this.state.currentPage_topic = this.state.currentPage_topic + 1;
                    this.searchTopic(this.state.currentPage_topic);
                }
            } else if (this.state.activeTab == 2) {
                if(!this.state.lastPage_require) {
                    this.state.currentPage_require = this.state.currentPage_require + 1;
                    this.searchRequire(this.state.currentPage_require);
                }
            } else if (this.state.activeTab == 3) {
                if(!this.state.lastPage_server) {
                    this.state.currentPage_server = this.state.currentPage_server + 1;
                    this.searchServer(this.state.currentPage_server);
                }
            }
        }
    }

    render() {
        return <View className="header">
            <_Header isSearch={true} onChange={this.handleChange.bind(this)} searchVal={this.state.searchVal} searchType={this.state.activeTab}></_Header>
            <Container scrollable className="bgF">
                <div className="require-tabs-list">
                    <Tabs  activeKey={this.state.activeTab}
                           onAction={this.SearchAction.bind(this)}
                           className="margin-0">
                        <Tabs.Item title='部落' key='1' className="padding-0">
                        </Tabs.Item>
                        <Tabs.Item title='话题' key='2' className="padding-0">
                        </Tabs.Item>
                        <Tabs.Item title='需求' key='3' className="padding-0">
                        </Tabs.Item>
                        <Tabs.Item title='服务' key='3' className="padding-0">
                        </Tabs.Item>
                    </Tabs>
                </div>

                <ReactIScroll iScroll={iscroll}
                              options={this.state.iScrollOptions}
                              onScrollEnd={this._handleScrollEnd.bind(this)}
                              className={this.state.activeTab == 0 ? '' : 'hidden'}
                >
                    <_Tribe tribeList={this.state.tribeList}></_Tribe>
                </ReactIScroll>

                <ReactIScroll iScroll={iscroll}
                              options={this.state.iScrollOptions}
                              onScrollEnd={this._handleScrollEnd.bind(this)}
                              className={this.state.activeTab == 1 ? '' : 'hidden'}
                >
                    <_TopicItem topicList={this.state.topicList}></_TopicItem>
                </ReactIScroll>

                <ReactIScroll iScroll={iscroll}
                              options={this.state.iScrollOptions}
                              onScrollEnd={this._handleScrollEnd.bind(this)}
                              className={this.state.activeTab == 2 ? '' : 'hidden'}
                >
                    <_Require requireList={this.state.requireList}></_Require>
                </ReactIScroll>

                <ReactIScroll iScroll={iscroll}
                              options={this.state.iScrollOptions}
                              onScrollEnd={this._handleScrollEnd.bind(this)}
                              className={this.state.activeTab == 3 ? '' : 'hidden'}
                >
                    <_Server serverList={this.state.serverList}></_Server>
                </ReactIScroll>
                <_DownLoadApp></_DownLoadApp>
            </Container>
        </View>;
    }
}

export default Search;

