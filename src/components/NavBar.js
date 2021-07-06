import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = (props) => {

    return(
        <div>
            <nav class="navbar navbar-default bg-dark navbar-light">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;

