import React from "react";

import '../styles/NavBar.css';



const NavBar = (props) => {

    return(
        <div className="navBarContainer" role="navigation">
            <nav className="navbar navbar-default bg-dark">
                <ul className="navbar-nav mr-auto">

                    <li className="nav-item">
                        <a className="nav-link">Shrimps </a>
                        <ul> 
                            <li className="nav-item">
                                <a className="nav-link" >Neocaridina </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Caridina </a>
                            </li>
                        </ul>
                    </li>
                  
                    <li className="nav-item">
                        <a className="nav-link" >Fish <span className="sr-only"></span></a>
                        <ul> 
                            <li className="nav-item">
                                <a className="nav-link" >Freshwater </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Saltwater </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Brackish </a>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" >Plants <span className="sr-only"></span></a>
                        <ul> 
                            <li className="nav-item">
                                <a className="nav-link" >Freshwater </a>
                            </li>
                        </ul>
                    </li>
                  
                    <li className="nav-item">
                        <a className="nav-link" >Aquarium <span className="sr-only"></span></a>
                        <ul> 
                            <li className="nav-item">
                                <a className="nav-link" >Cycling </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Water chemistry </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Nutrition </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Equipment </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Aquascaping </a>
                            </li>
                        </ul>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" >Sales <span className="sr-only"></span></a>
                        <ul> 
                            <li className="nav-item">
                                <a className="nav-link" >America </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Australia </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Asia </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Africa </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" >Europe </a>
                            </li>
                        </ul>
                    </li>
                    
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;

