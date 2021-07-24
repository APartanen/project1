import React from "react";
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

const CreatePost = (props) => {
    let defaultPost = {teksti: "Postaus", otsikko: "undecided", kuva: "placeholder", käyttäjäID:"1", tag:"1"}
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

                <div class="form-group">
                    <label for="formControlSelect">Post tags</label>
                    <select class="form-control" id="formControlSelect">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="formControlFile">Example file input</label> 
                    <br/>
                    <input type="file" class="form-control-file" id="formControlFile"/>
                </div>

                <textarea 
                    id="textContent" 
                    name="textContentArea" 
                    rows="8" cols="50"
                    defaultValue={defaultPost.content} 
                    onChange={e => setPost({ ...post, teksti: e.target.teksti})}>
                    
                </textarea> <br/>
                <button type="submit" value="Submit">Submit</button>
            </form>
        </div>
    );
};

export default CreatePost;

