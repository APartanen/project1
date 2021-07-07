import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

const CreatePost = (props) => {

    return(
        <div>
            <form>
                <textarea id="textContent" name="textContentArea" rows="8" cols="50">
                    Postaus
                </textarea>
            </form>
        </div>
    );
};

export default CreatePost;

