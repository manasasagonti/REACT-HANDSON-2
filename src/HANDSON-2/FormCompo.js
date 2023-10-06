import React , {Component} from "react";
// import './style.css';
 import './style1.css';

class FormCompo extends Component{
    constructor(){
        super();
        this.state = {
            name : '',
            dept : '',
            rating : '',
            StuData : []
        }
    }
    handleChange = (event) => {
        console.log(event);
        this.setState({[event.target.name] : event.target.value})
    }
    handleSubmit = () => {
        console.log(this.state);
        const tempObj = {
            name : this.state.name,
            dept : this.state.dept,
            rating : this.state.rating 
        }
            this.state.StuData.push(tempObj)
            this.setState({StuData : this.state.StuData})
            // console.log(this.state.stuData);
        }
    render(){
        return(
            <>
            {/* <h1>{this.state.name}</h1>
            <h1>{this.state.dept}</h1>
            <h1>{this.state.rating}</h1> */}
            <label>Name :</label>
            <input type="text" name="name"  onChange={this.handleChange}></input> 
            <br></br>
            <label>Department :</label>
            <input type="text" name="dept"  onChange={this.handleChange}></input>
            <br></br>
            <label>Rating :</label>
            <input type="number" name="rating"  onChange={this.handleChange}></input>
            <br></br>
            <button type="button" onClick={this.handleSubmit}>submit</button>
            
            <div style={{border:'2px solid black',borderRadius:'20px', backgroundColor: 'deepskyblue',display:'flex',gap:'20px',flexWrap:'wrap',margin:'100px 100px'}}>
                {this.state.StuData.map((item, index) => {
                    console.log(item);
                    return(
                        <div key={index} >
                            
                            
                            <p style={{width:'450px', borderRadius:'20px', padding:'30px',margin:'50px',border:'2px solid black',backgroundColor:'plum',textAlign:'center'}}>Name: {item.name} | Department: {item.dept} | Rating: {item.rating}</p>
                            
                            
                           
                        </div>
                    )
                })}
            </div>
            </>
        )
    }
}
export default FormCompo