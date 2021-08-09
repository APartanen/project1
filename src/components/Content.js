import React, { useState, useEffect } from 'react';
import CreatePost from "./CreatePost";
import Posts from "./Posts";

import '../styles/Content.css';

const Content = () => {

  const [ posts, setPosts] = useState([1]) 
  const [ currentPage, setCurrentPage] = useState(2) 

 

  useEffect(() => {
    const REQUEST_OPTIONS = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      }
    };
    const REQUEST_URL = `http://localhost:3001/getPostsByTagID/${currentPage}`

    console.log('effect')
    fetch(REQUEST_URL,REQUEST_OPTIONS)
      .then(response => response.json()
        ).then(res => {
        console.log(res);
        setPosts(res);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [])


    return(
      <div className="Content">
        <Posts posts = {posts}/>
        {/*<CreatePost/>*/}
 
      </div> 
    );
};

export default Content;

