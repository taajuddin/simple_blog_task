
import React, { useState } from 'react';
import {connect} from 'react-redux'
import {FaSearch} from 'react-icons/fa'
import './main.css'

function Postlist(props) {
    const initialInputState = {search: ""}

    const [value, setValue] = useState(initialInputState)

    const {search} = value;
    

  const handlechange=(e)=>{
        setValue({...value, [e.target.name]:e.target.value})
        console.log("sort" ,e.target.value)
    }
    
    
        return (
            <div style={{marginLeft:"0px", height: "200px"}}>
                <form className="form-group">
                    <span class="form-control-feedback" style={{paddingTop:"9px"}}><FaSearch/></span>
                    <input  type="search"  value ={search}
                        name="search" onChange={handlechange} placeholder=" Search By Title"
                        aria-label="Search" style={{width:"90%"}}  />    
                </form>
         
             <div className="scrolling">
             {
                  props.post.filter(art=>art.title.includes(search)).map(ele=>{
                     return(
                        <div className="card" style={{width: "88%" }} >
                            <div className="container"  >
                            <h2>{ele.title} </h2>
                            <p >{ele.body}</p>
                            </div>
                        </div>
                     )
                 })
             }
             </div>
            </div>
        );
    
}

const mapStateToProps=(state)=>{
    return{
        post:state.posts
    }
    
}
export default connect(mapStateToProps) (Postlist);