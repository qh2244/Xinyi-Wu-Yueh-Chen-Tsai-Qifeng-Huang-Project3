import React from 'react';
import "./signup.css"
import { Link } from 'react-router-dom';
export default function signup() {
    return (
        <div className='mainContainerForsignup'>
            <div className='submainContainer'>
                <div>
                    <p className='logoText'>Soc<span className='part'>ial</span></p>
                    <p className='introtext'>Connect with your <span className='part'>family and friends</span></p>
                </div>
                <div>
                    <p className='createaccountTxt'>Create new Account</p>
                    <input type="text" placeholder='Username' className='inputText'/>
                    <input type="text" placeholder='Phonenumber' className='inputText'/>
                    <input type="email" name="" id="" placeholder='email' className='inputText'/>
                    <input type="password" placeholder='******' name="" id="" className='inputText'/>
                    <button className='btnforsignup'>Signup</button>
                    <Link to={"/"}>
                        <p>Already have a account</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}