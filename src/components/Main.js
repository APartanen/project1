import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import TopHeader from "./TopHeader";
import '../styles/Main.css';

const Main = (props) => {

    return(
        <div className="mainContainer bg-dark">
            <div>
                <TopHeader/>
            </div>
            <div className="navi bg-dark">
                <Header/>
            </div>
            <div className="mainContent bg-light">
                <Content/>
                <Footer/>
            </div>
        
         
        </div>
    );
};

export default Main;

