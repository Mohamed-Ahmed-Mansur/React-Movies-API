import { Component } from "react";

class Action extends Component {
    constructor(props){
        super(props);
        this.state = {name: "action movies"}
    }
    render(){
        return (<div style={{textAlign: "center"}}><b>Category:</b> {this.state.name}, <b>year:</b> {this.props.year}</div>)
    }
}
export default Action;