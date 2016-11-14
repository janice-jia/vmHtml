import React from 'react'
import {View, Container, Tabs, List, Grid, Col} from 'amazeui-touch'
import Header from './_Header'


class Search extends React.Component{
    constructor(props) {
        super(props);
        this.state={
            visible: true,
            searchVal:this.props.location.state.searchVal
        };
        console.info('this.props.location',this.props.location);
        console.info('this.props.location.state.searchVal',this.props.location.state.searchVal);
    }

    render() {
        return <View className="header">
            <Container>
                <Header isSearch={true} searchVal={this.state.searchVal}></Header>
                <div className="require-tabs-list">
                    <Tabs  onAction={this.handleAction} className="margin-0">
                        <Tabs.Item title='部落' key='1' className="padding-0">
                            <List className="margin-top-0">
                                {this.state.searchVal}
                            </List>
                        </Tabs.Item>
                        <Tabs.Item title='话题' key='2' className="padding-0">
                            <List className="margin-top-0">
                                s
                            </List>
                        </Tabs.Item>
                        <Tabs.Item title='需求' key='3' className="padding-0">
                            <List className="margin-top-0">
                                s
                            </List>
                        </Tabs.Item>
                        <Tabs.Item title='服务' key='3' className="padding-0">
                            <List className="margin-top-0">
                                s
                            </List>
                        </Tabs.Item>
                    </Tabs>
                </div>
            </Container>
        </View>;
    }
}

export default Search;

