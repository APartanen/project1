import React from "react";
import { useState } from 'react';

import '../styles/Posts.css';

const Posts = ({posts}) => {

    return(
      <div className="postContainer">
        <ul>
          {posts.map(post =>
            <li key={post.postausID}> 
                <PostContent post={post}/>
            </li>
          )}      
        </ul>
      </div> 
    );
};

export default Posts;