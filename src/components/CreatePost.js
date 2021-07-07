import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

const CreatePost = (props) => {

    return(
        <div>
            <form method="POST">
                <textarea id="textContent" name="textContentArea" rows="8" cols="50">
                    Postaus
                </textarea> <br/>
                <input type="submit" value="Submit"/> 
            </form>

       
        </div>
    );
};

export default CreatePost;

