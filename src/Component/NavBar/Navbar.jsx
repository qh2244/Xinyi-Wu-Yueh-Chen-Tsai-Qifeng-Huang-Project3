import React from 'react';
import "./navbar.css"
import searchIcon from "../Images/search.png"
import Notifications from "../Images/bell.png"
import Message from "../Images/message.png"
import Profileimage from "../Images/Profile.png"

export default function Navbar() {
    return (
        <div className ='mainNavbar'>
            <div className='LogoContainer'>
                    <p>Social</p>
            </div>
            <div>
                    <div className='searchInputContainer'>
                            <img src={`${searchIcon}`} className="searchIcon" alt="" />
                            <input type="text" className="searchInput" placeholder='search your friends' name="" id="" />
                    </div>
            </div>
            <div className='IconsContainer'>
                    <img src={`${Notifications}`} className="Icons" alt="" />
                    <img src={`${Message}`} className="Icons" alt="" />
                    <div style={{display:'flex', alignItems:'center'}}>
                            <img src={`${Profileimage}`} className="ProfileImage" alt="" />
                            <p style={{marginLeft:'5px'}}>Qifeng</p>
                    </div>
            </div>
        </div>
    );
}