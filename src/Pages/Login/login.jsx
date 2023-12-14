import React from 'react';
import { Link } from 'react-router-dom';
import "./login.css"

export default function login() {
    return (
        <div className='mainContainerForsignup'>
            <div className='submainContainer'>
                <div>
                    <p className='logoText'>Soc<span className='part'>ial</span></p>
                    <p className='introtext'>Connect with your <span className='part'>family and friends</span></p>
                </div>
                <div>
                    <p className='createaccountTxt'>Login Account</p>
                    <input type="email" name="" id="" placeholder='Email' className='inputText'/>
                    <input type="password" placeholder='******' name="" id="" className='inputText'/>
                    <button className='btnforsignup'>Login</button>
                    <Link to={"/"}>
                        <p>Forgot password</p>
                    </Link>
                    <Link to={"/"}>
                        <p>Create New Account</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}