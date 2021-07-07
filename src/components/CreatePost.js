import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

const CreatePost = (props) => {

    postForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(this); //(this) refers to form - creates form data object
        fetch('send to', { 
            method: 'POST',
            body: formData
        }).then(function (response){
            return response.text();
        }).then(function(text){
            console.log(text);
        }).catch(function(error) {
            console.error(error);
        })
    })

    return(
        <div>
            <form method="POST" id="postForm" class="postForm">
                <textarea id="textContent" name="textContentArea" rows="8" cols="50">
                    Postaus
                </textarea> <br/>
                <button type="submit" value="Submit">Submit</button>
               
            </form>

       
        </div>
    );
};

export default CreatePost;

