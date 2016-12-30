import React from 'react'
import {Container, List, Grid, Col, Group} from 'amazeui-touch'
import publicFn from '../publicFn'


//公用需求列表组件
class _Require extends React.Component {
    render() {
        return <div className={this.props.requireList.length>0 ? 'requireList' : 'requireList height-100'}>
            <Group className={this.props.requireList.length>0 ? 'hidden' : 'null-con bgF margin-0'}>需求为空！</Group>
            <List className="margin-top-0">
                {this.props.requireList.map((item,i)=>{
                    return(
                        <List.Item
                            title = {"酬金: "+(item.reward== 0 ? '面议' :item.reward+'元')}
                            subTitle = {item.name}
                            href = {'/require/info/'+item.id}
                            desc = {item.details}
                            after={'保证金: '+item.margin}
                            key={i}
                        >
                            <Grid align="between" className="margin-top-sm">
                                <Col cols={2} className="padding-0">
                                    <span className="text-size-12 text-color-6">{item.status==1 ? '招募创作人' : '征集作品'}</span>
                                </Col>
                                <Col cols={2} className=" text-right">
                                    <span className="text-size-12 text-color-4">剩余: {publicFn.getCountDown(item.deadline)}天</span>
                                </Col>
                            </Grid>
                        </List.Item>
                    )
                })}
        </List>
        </div>;
    }
}

export default _Require;

