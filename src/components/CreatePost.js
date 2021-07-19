import React from "react";
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const CreatePost = (props) => {
    let defaultPost = {value: "Postaus", category: "undecided"}
    const [post, setPost] = useState(defaultPost);

    function handleSubmit(e) {
        e.preventDefault();    

        const sendObject = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        }

        fetch('http://localhost:3001/postpost',sendObject, {
        }).then(function (response){
            return response.text();
        }).then(function(text){
            console.log(text);
        }).catch(function(error) {
            console.error(error);
        })
    }

    return(
        <div>
            <form className="postForm" onSubmit={handleSubmit}>
                <textarea 
                    id="textContent" 
                    name="textContentArea" 
                    rows="8" cols="50"
                    defaultValue={defaultPost.content} 
                    onChange={e => setPost({ ...post, value: e.target.value })}>
                    
                </textarea> <br/>
                <button type="submit" value="Submit">Submit</button>
            </form>
        </div>
    );
};

export default CreatePost;

