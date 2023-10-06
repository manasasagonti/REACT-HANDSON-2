import { Component } from "react";
import './style.css';

class CompName extends Component{
    render(){
        return(
            <div className="classFunc">
            <h1>This is created using functional component</h1>
        <h3>This is done using external CSS</h3>
        <h4 className="blue">This is done using inline CSS</h4>
        </div>
        )
    }
}
export default CompName;

