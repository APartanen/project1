import React from "react";
import { useState } from 'react';

import '../styles/CreatePost.css';

import 'bootstrap/dist/css/bootstrap.min.css';

const CreatePost = (props) => {
    let defaultPost = {teksti: "Postaus", otsikko: "undecided", kuva: "placeholder", käyttäjäID:"1", tag:"1"}
    const [post, setPost] = useState(defaultPost);

    function handleSubmit(e) {
        e.preventDefault();    

        console.log(post);
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
        <div className="createPost">
            <form className="postForm" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="formTitle" className="formTitleLabel">Example post title</label> 
                    <br/>
                    <input 
                        className="formTitleClass"
                        id="formTitle"
                        onChange={e => setPost({ ...post, otsikko: e.target.value})}/>
                </div>
                <div>
                    <label htmlFor="formControlSelect" className="postTagLabel">Post tags</label>
                    <select 
                        className="form-control" 
                        id="formControlSelect" 
                        onChange={e => setPost({ ...post, tag: e.target.value})}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="formControlFile" className="fileLabel">Example file input</label> 
                    <br/>
                    <input 
                        type="file" 
                        className="form-control-file" 
                        id="formControlFile"
                        onChange={e => setPost({ ...post, kuva: e.target.value})}/>
                </div>


                <textarea 
                    id="textContent" 
                    name="textContentArea" 
                    rows="8" cols="50"
                    defaultValue={defaultPost.content} 
                    onChange={e => setPost({ ...post, teksti: e.target.value})}>
                    
                </textarea> <br/>
                
                <button className="submitButton" type="submit" value="Submit">Submit</button>
            </form>
        </div>
    );
};

export default CreatePost;

