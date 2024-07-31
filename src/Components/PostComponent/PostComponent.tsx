import PostComponentProps from "./PostComponentProps";

import "./PostComponent.css";
import React from "react";

const PostComponent:React.FC<PostComponentProps>=({post})=>{

    console.log(`post id:${post.id} is rendered`);


    return (


        <div className="post-container">

            <h1>{post.title}</h1>

            <h1>{post.body}</h1>
        </div>
    )





}

export default React.memo(PostComponent);