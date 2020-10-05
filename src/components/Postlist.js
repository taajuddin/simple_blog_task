
import React, { Component } from 'react';
import {connect} from 'react-redux'
import {BsX}from "react-icons/bs";
import {FaSearch} from 'react-icons/fa'
import './main.css'

import { setdata } from '../action/postaction';

class Postlist extends Component {
    constructor(props) {
        super(props);
         this.state={
             search:""
         }
    }
    handlechange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
        console.log("sort" ,e.target.value)
    }
    
    render() {
        console.log("post",this.props.post)
        return (
            <div style={{marginLeft:"0px", height: "200px"}}>
                <form className="form-group">
                    <span class="form-control-feedback" style={{paddingTop:"9px"}}><FaSearch/></span>
                    <input  type="search"  value ={this.state.search}
                        name="search" onChange={this.handlechange} placeholder=" Search By Title"
                        aria-label="Search" style={{width:"90%"}}  />    
                </form>
         
             <div className="scrolling">
             {
                  this.props.post.filter(art=>art.title.includes(this.state.search)).map(ele=>{
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
}

const mapStateToProps=(state)=>{
    return{
        post:state.posts
    }
    
}
export default connect(mapStateToProps) (Postlist);