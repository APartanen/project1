import React from "react";

import CreatePost from "./CreatePost";
import Posts from "./Posts";

import '../styles/Content.css';

const Content = () => {
/*fetch kutsu, jotta saadaan posts */
    return(
      <div className="Content">
        <Posts posts = {}/>
        {/*<CreatePost/>*/}
 
      </div> 
    );
};

export default Content;

