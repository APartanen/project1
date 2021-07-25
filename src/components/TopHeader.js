import React from "react";

import '../styles/TopHeader.css';

const TopHeader = (props) => {

    return(
        <div className="topHeaderContainer">
            <nav className="navbar navbar-default bg-white navbar-light navBar">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default TopHeader;

