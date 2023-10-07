import { Component } from "react";

class Display extends Component{
    constructor(props){
        super(props)
        console.log(props);
    }
    render(){
        return(
            <>
            <h1>EMPLOYEE FEEDBACK FORM</h1>
            <button type="button" onClick={this.props.toggleFunction}>Go Back</button>
            </>
        )
    }
}