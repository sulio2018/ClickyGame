import React from 'react';
import "./style.css";

function Header() {
    return(
        <div className="header">
            <h1>Clicky Game!</h1><br></br>
            <h3>Click on an image to earn points, but don't click on any more than once!</h3>
        </div>
    );
}

export default Header;