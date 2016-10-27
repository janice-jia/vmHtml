import React from 'react'
import {Slider ,Group} from 'amazeui-touch'
import HomeStore from '../stores/HomeStore'
import HomeActions from '../actions/HomeActions'

const sliderIntance = (
    <Slider>
        <Slider.Item>
            <img src="http://s.amazeui.org/media/i/demos/bing-1.jpg" />
        </Slider.Item>
        <Slider.Item>
            <img src="http://s.amazeui.org/media/i/demos/bing-2.jpg" />
        </Slider.Item>
    </Slider>
);

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }
    return (
        <div className="warning">
            Warning!1{props.name}
        </div>
    );
}

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = HomeStore.getState();
        this.onChange = this.onChange.bind(this);
        this.state = {showWarning: true,name:'test',home:[]};
        console.info('this.state',this.state);
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    componentDidMount() {
        console.info('componentDidMount')
        HomeStore.listen(this.onChange);
        HomeActions.updateHome();
    }

    componentWillUnmount() {
        HomeStore.unlisten(this.onChange);
    }


    onChange(state) {
        console.info('onChange this.state:',this.state);
        this.setState(state)
        console.info('onChange:',state.home);
        console.info('onChange this.state:',this.state);
    }

    handleToggleClick() {
        this.setState(prevState => ({
            showWarning: !prevState.showWarning
        }));
    }

    render() {
        return <Group>
            {
                this.state.home.map(function(item){
                    return <div key={item.userId}>{item.dispName}</div>
                })
            }

            <WarningBanner warn={this.state.showWarning} name={this.state.name}/>
            <button onClick={this.handleToggleClick}>
                {this.state.showWarning ? 'Hide' : 'Show'}
            </button>{this.state.todos} {sliderIntance} </Group>;
    }
}

export default Home;
