import React from 'react'
import {View, Container, Tabs, List, Grid, Col} from 'amazeui-touch'
import _Header from './../components/_Header'
import _Tribe from './../components/_Tribe'
import SearchActions from '../actions/SearchActions'
import SearchStore from '../stores/SearchStore'

class Search extends React.Component{
    constructor(props) {
        super(props);
        this.state = SearchStore.getState();
        this.state.visible = true;
        this.state.searchVal = this.props.location.query.search;
        this.state.tribeList = [];
        this.state.topicList = [];
        this.state.requireList = [];
        this.state.serverList = [];
        this.state.activeTab = parseInt(this.props.location.query.searchType) ? parseInt(this.props.location.query.searchType) : 0;
        console.info('this.state,',this.state);
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        SearchStore.listen(this.onChange);
        //
        ////部落搜索
        //SearchActions.searchTribes({
        //    searchValue : this.state.searchVal,
        //    currentPage : 1,
        //    itemsPerPage : 10,
        //});
        this.SearchAction(this.state.activeTab)
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
        if(key == 0){
            this.searchTribe();
        }else if(key == 1){
            this.searchTopic();
        }else if(key == 2){
            this.searchRequire();
        }else if(key == 3){
            this.searchServer();
        }
        this.setState({
            activeTab: key
        });
    }

    //部落搜索
    searchTribe(){
        //话题搜索
        SearchActions.searchTribes({
            searchValue : this.state.searchVal,
            currentPage : 1,
            itemsPerPage : 10,
        });
    }

    //话题搜索
    searchTopic(){
        //话题搜索
        SearchActions.searchTopic({
            searchValue : this.state.searchVal,
            currentPage : 1,
            itemsPerPage : 10,
        });
    }

    //需求搜索
    searchRequire(){
        //话题搜索
        SearchActions.searchRequire({
            searchValue : this.state.searchVal,
            currentPage : 1,
            itemsPerPage : 10,
        });
    }

    //服务搜索
    searchServer(){
        //话题搜索
        SearchActions.searchServer({
            searchValue : this.state.searchVal,
            currentPage : 1,
            itemsPerPage : 10,
        });
    }

    render() {
        return <View className="header">
            <_Header isSearch={true} onChange={this.handleChange.bind(this)} searchVal={this.state.searchVal} searchType={this.state.activeTab}></_Header>
            <Container scrollable>
                <div className="require-tabs-list">
                    <Tabs  activeKey={this.state.activeTab}
                           onAction={this.SearchAction.bind(this)}
                           className="margin-0">
                        <Tabs.Item title='部落' key='1' className="padding-0">
                            <List className="margin-top-0">
                                <_Tribe tribeList={this.state.tribeList}></_Tribe>
                            </List>
                        </Tabs.Item>
                        <Tabs.Item title='话题' key='2' className="padding-0">
                            <List className="margin-top-0">
                                {this.state.topicList.map((item, i) => {
                                    return <div key={i}>{item.title}11</div>
                                })}
                            </List>
                        </Tabs.Item>
                        <Tabs.Item title='需求' key='3' className="padding-0">
                            <List className="margin-top-0">
                                {this.state.requireList.map((item, i) => {
                                    return <div key={i}>{item.title}</div>
                                })}
                            </List>
                        </Tabs.Item>
                        <Tabs.Item title='服务' key='3' className="padding-0">
                            <List className="margin-top-0">
                                {this.state.serverList.map((item, i) => {
                                    return <div key={i}>{item.title}</div>
                                })}
                            </List>
                        </Tabs.Item>
                    </Tabs>
                </div>
            </Container>
        </View>;
    }
}

export default Search;

