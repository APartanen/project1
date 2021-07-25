import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import TopHeader from "./TopHeader";
import '../styles/Main.css';

const Main = (props) => {

    return(
        <div>
            <div>
                <TopHeader/>
            </div>
            <div className="navi">
                <Header/>
            </div>
            <div className="mainContent">
                <Content/>
                <Footer/>
            </div>
        
         
        </div>
    );
};

export default Main;

