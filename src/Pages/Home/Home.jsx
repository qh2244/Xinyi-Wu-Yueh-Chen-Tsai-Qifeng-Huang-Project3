import React from 'react';
import Navbar from '../../Component/Navbar/Navbar';
import Leftbar from '../../Component/LeftsideContainer/Leftbar';
import MainPost from '../../Component/MainPostContainer/MainPost';
import Rightbar from '../../Component/RightsideContainer/Rightbar';
import "./home.css"

export default function Home() {
    return (
        <div className='home'>
            <Navbar/>
            <div className="ComponentContainer">
                <Leftbar/>
                <MainPost/>
                <Rightbar/>
            </div>
        </div>
    );
}
