import React from "react";
          
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
      <div>
        <form>
          <label for="input1">Input1:</label><br/>
          <input type="text" id="input1" name="input1" value="input1"/><br/>
        </form>
      </div> 
    );
};

export default Content;

