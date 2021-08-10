import React from "react";

//import '../styles/PostContent.css';

const PostContent = ({post}) => {
 

    return(
      <div className="postContent">
        
        otsikko: {post.otsikko} 
        teksti: {post.teksti} 
        julkaisuaika: {post.julkaisuAika} 
      </div> 
    );
};

export default PostContent;