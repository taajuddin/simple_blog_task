import React, { useState } from 'react';
//import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {setdata} from '../action/postaction'
//import './main.css'

function Postform(props) {
    
    const initialInputState = {title: "", body:""}

    const [value, setValue] = useState(initialInputState)

    const {title, body} = value;

    const handleChange=(e)=>
    {
        setValue({...value, [e.target.name]: e.target.value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
       const  formdata={
            title: title,
             body: body
        }
        console.log("form data",formdata)
        props.dispatch(setdata(formdata))
        
        setValue({...value, title: "", body: ""})
    }
    
    
        
        return (
            <div>
            <div style={{marginTop:"10px"}}>
              
                    <h5 className="post_heading">Add Posts</h5>
                    <form className="form" onSubmit={handleSubmit}>
                        
                            <input type="text" style={{width: "80%"}} name="title" placeholder="Enter Post Title" value={title}  onChange={handleChange} className="form-control" required/><br/>
                        
                       
                            <textarea rows="5" cols="28" name="body" placeholder="Enter Body" value={body} onChange={handleChange}  required/><br/>
                    
                        <input type="submit" value="publish"/>
                    </form>
                    
                </div>
                
            </div>
        );
    
}

export default connect() (Postform);