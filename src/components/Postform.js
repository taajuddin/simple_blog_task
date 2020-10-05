import React, { Component } from 'react';
//import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {setdata} from '../action/postaction'

class Postform extends Component {
    constructor(props) {
        super(props);
        this.state={
            title:"",
            body:""
        }
    }
    handleChange=(e)=>
    {
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit=(e)=>{
        e.preventDefault()
       const  formdata={
            title:this.state.title,
             body:this.state.body
        }
        console.log("form data",formdata)
        this.props.dispatch(setdata(formdata))
        this.setState({
            body: "",
            title: ""
        })
    }
    
    render() {
        
        return (
            <div>
            <div className="post-container" style={{marginTop:"10px"}}>
              
                    <h5 className="post_heading">ADD POSTS</h5>
                    <form className="form" onSubmit={this.handleSubmit}>
                        
                            <label>title</label><br/>
                            <input type="text" style={{width: "80%"}} name="title" placeholder="Enter Post Title" value={this.state.value}  onChange={this.handleChange} className="form-control" required/><br/>
                        
                       
                            <label>body</label><br/>
                            <textarea rows="5" cols="28" name="body" placeholder="Enter Body" value={this.state.body} onChange={this.handleChange}  required/><br/>
                    
                        <input type="submit" value="publish"/>
                    </form>
                    
                </div>
                
            </div>
        );
    }
}

export default connect() (Postform);