import React from 'react'
import {
    Button,
} from 'amazeui-touch';

export default React.createClass({
    getInitialState: function(){
        return {value:"test"}
    },
    render() {
        var value = this.state.value;
        return <Button amStyle="primary">{value}</Button>
    }
})
