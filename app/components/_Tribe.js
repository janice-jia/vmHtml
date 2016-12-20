import React from 'react'
import {List, Grid, Col} from 'amazeui-touch'


//公用部落列表组件
class _Tribe extends React.Component {
    componentDidMount(){
        console.info('this.props',this.props);
    }
    render() {
        return <div className="tribe">
            <List className="t-index-list" >
                {this.props.tribeList.map((item, i) => {
                    return (
                        <List.Item
                            title={item.title}
                            subTitle = {'族员：'+item.memberAmount}
                            desc = {item.descript}
                            target="_blank"
                            media={<img src={ item.logo }/> }
                            key={i}
                            href={"/tribe/info/"+item.id}
                        />
                    );
                })}
            </List>
        </div>;
    }
}

export default _Tribe;

