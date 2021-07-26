import React from "react";

import CreatePost from "./CreatePost";
import Posts from "./Posts";

import '../styles/Content.css';

const Content = (props) => {
//Axios here
/*
// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    // handle success
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
  */

/*
function postContent() {

}
*/
    return(
      <div className="Content">
        <Posts/>
        {/*<CreatePost/>*/}
 
      </div> 
    );
};

export default Content;

