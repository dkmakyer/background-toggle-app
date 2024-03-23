import React from "react";

function Body(props){
   
    return(
        <div className={props.darkMode ? "dark" : ""}>
            <h1 className="main--text">Fun Facts about React</h1>
            <ul>
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>is maintained by facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>
    )
}
export default Body;