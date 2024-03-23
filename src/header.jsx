import React from "react";

import reactImage from "./react.png";
import toggleButton from "./toggle-button.png";

function Header(props){

    return(
        <>
            <nav className={props.darkMode ? "dark" : " "}>
                <div className="header--left">
                    <h1 className="left--text"><img src={reactImage} alt="image not found" className="left--image"/>ReactFacts</h1>
                </div>
                <div className="header--right">
                    <h2>Light</h2>
                    <button className="right--button" onClick={props.toggleDarkMode}></button> 
                    <h2 >Dark</h2>
                </div>
            </nav>
        </>
    )
}
export default Header;