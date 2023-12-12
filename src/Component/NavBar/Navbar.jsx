import React from 'react';
import "./navbar.css"
import searchIcon from "../Images/search.png"

export default function Navbar() {
    return (
        <div className ='mainNavbar'>
            <div>
                    <p>Social</p>
            </div>
            <div>
                    <div>
                            <image src={`${searchIcon}`} alt="" />
                            <input type="text" name="" id="" />
                    </div>
            </div>
            <div>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <div>
                            <img src="" alt="" />
                            <p>Qifeng</p>
                    </div>
            </div>
        </div>
    );
}