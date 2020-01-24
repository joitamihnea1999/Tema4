import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class RobotForm extends Component {
    constructor(props) {
        super(props);
        this.onAdd = props.onAdd;
        this.state = {
            type:"",
            name:"",
            mass:""
        }
    }

    onChange = event=>{
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    render() {
        return <div>
            <input name="name" id="name" type="text" value={this.state.name} onChange={this.onChange}/>
            <input name="type" id="type" type="text" value={this.state.type} onChange={this.onChange}/>
            <input name="mass" id="mass" type="text" value={this.state.mass} onChange={this.onChange}/>
            <button type="button" value="add" onClick={() => this.onAdd(this.state)}>add</button>
        </div>
    }
}
export default RobotForm