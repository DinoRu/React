import React, { useState } from 'react';
import './navbar.scss';
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => window.pageYOffset = null;
    }
    return (
        <div className={isScrolled ? "navbar  scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://assets.nflxext.com/ffe/siteui/squadron/logo.png" alt="" />
                    <span>Home</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span>KID</span>
                    <Notifications className="icon"/>
                    <img src="https://media.istockphoto.com/photos/digital-transformation-concept-system-engineering-binary-code-picture-id1321462048?b=1&k=20&m=1321462048&s=170667a&w=0&h=mlDKCuG5oXoX5zeCl6ixK1MiG1Y--ZmE4N6ku0NUKOE=" alt="" />
                    <div className="profile">
                        <ArrowDropDown className="icon" />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;