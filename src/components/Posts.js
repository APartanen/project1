import React from "react";


import PostContent from "./PostContent";
import '../styles/Posts.css';

const Posts = ({posts}) => {


 
    return(
       
      <div className="postContainer">
       
        <ul> 
          {posts.map(post =>
          
            <li key={post.postausID}>{console.log(post.postausID,"post")} 
                <PostContent post={post}/>
            </li>
          )}      
        </ul>
      
      </div> 
    );
};

export default Posts;