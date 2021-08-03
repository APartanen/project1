import React, { useState, useEffect } from 'react';
import CreatePost from "./CreatePost";
import Posts from "./Posts";

import '../styles/Content.css';

const Content = () => {

  const [ posts, setPosts] = useState([]) 
  const [ currentPage, setCurrentPage] = useState([]) 

  const ID = {
    method: 'GET',
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(currentPage),
    };

  useEffect(() => {
    console.log('effect')
    fetch
      .get('http://localhost:3001/getPostsByTagID', ID)
      .then(response => {
        //console.log('promise fulfilled')
        setPosts(response.data)
      })
  }, [])


    return(
      <div className="Content">
        <Posts posts = {posts}/>
        {/*<CreatePost/>*/}
 
      </div> 
    );
};

export default Content;

