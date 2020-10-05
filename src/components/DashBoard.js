import React from "react"
import Postform from './Postform'
import Postlist from './Postlist'

function DashBoard(){
    return (
        <div>
            <h1 style={{textAlign: "center"}}>WELCOME TO POSTS BLOG</h1>
            <div>
            <div style={{width: "50%", float: "left"}}>
                <Postform />
            </div>
            <div style={{width: "50%", float: "right"}}>
                <Postlist />
            </div>
            </div>
        </div>
    )
}

export default DashBoard