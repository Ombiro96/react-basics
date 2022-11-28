import React from "react";

function Header(){
    return(
        <header className="nav-items">
            <nav>
                <img src="logo512.png" alt="logo" className="nav-image"/>
            </nav>
            <ul className="menu-items">
                <li>home</li>
                <li>pricing</li>
                <li>contact us</li>
            </ul>
        </header>
    )
}

export default Header;