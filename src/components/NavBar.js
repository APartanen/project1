import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = (props) => {

    return(
        <div>
            <nav className="navbar navbar-default bg-dark navbar-light">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;

