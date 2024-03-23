import React from "react";
import Body from "./body";

import Header from "./header";
const App = () => {
    const [darkMode, setDarkMode] = React.useState(true)
    function toggleDarkMode(){
        setDarkMode(prevDarkMode => !prevDarkMode)
    }

    return (
        <div className="app--space">
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>
            <Body darkMode={darkMode}/>
        </div>
    )
}
export default App;