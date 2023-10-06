import { Component } from "react";
import FunctionComp from "./Function";
import CompName from "./class";


class DisplayComponent extends Component{
    constructor(){
        super();
        this.state = {
            functionDisplay : false ,
            classDisplay : false

        }
    }
    render(){
        return(
            <>
            <button onClick={() => this.setState({functionDisplay : !this.state.functionDisplay}) } >To see styling in functional component</button>
             <button onClick={() => this.setState({classDisplay : !this.state.classDisplay}) } >To see styling in class component</button> 
             <div className="flex">
             {this.state.functionDisplay ? <FunctionComp /> : null}
            {this.state.classDisplay ? <CompName /> : null}
            </div>
            </>
        )
    }
}
export default DisplayComponent;