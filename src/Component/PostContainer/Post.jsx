import React, { useState } from 'react';
import "./post.css"
import ProfileImage from "../Images/Profile.png"
import LikeIcon from "../Images/like.png"
import CommentIcon from "../Images/speech-bubble.png"
import ShareIcon from "../Images/share.png"
import Moreoption from "../Images/more.png"
import anotherlikeicon from "../Images/setLike.png"

export default function Post() {
    const [Like, setLike] = useState(LikeIcon);
    const [count, setCount] = useState(10);

    const handleLike=()=>{
        if(Like === LikeIcon){
            setLike(anotherlikeicon);
            setCount(count+1);
        } else {
            setLike(LikeIcon);
            setCount(count-1);
        }
    }

    return (
        <div className='PostContainer'>
            <div className='SubPostContainer'>
                <div>
                    <div style={{display:'flex', alignItems:'center'}}>
                        <img src={`${ProfileImage}`} className='PostImage' alt="" />
                        <div>
                            <p style={{marginLeft:'5px', textAlign:'start'}}>Qifeng</p>
                            <p style={{fontSize:'11px', textAlign:'start', marginLeft: 5, marginTop: -13, color:"#aaa"}}>Following by qifeng</p>
                        </div>
                        <img src={`${Moreoption}`} className='moreicons' alt="" />
                    </div>
                    <p style={{textAlign:'start', width:'96%', marginLeft:10, marginTop:0}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam consectetur possimus illum dicta at aspernatur......</p>
                    <img src={`${ProfileImage}`} className='PostImages' alt="" />
                    <div style={{display:'flex', }}>
                            <div style={{display:'flex', marginLeft:'10px'}}>
                                <div style={{display:'flex', alignItems:'center', cursor:'pointer'}}>
                                    <img src={`${Like}`} className='iconsforPost' onClick={handleLike} alt="" />
                                    <p style={{marginLeft:'6px'}}>{count} likes</p>
                                </div>
                                <div style={{display:'flex', alignItems:'center', marginLeft: 20, cursor:'pointer'}}>
                                    <img src={`${CommentIcon}`} className='iconsforPost' alt="" />
                                    <p style={{marginLeft:'6px'}}>100k Comments</p>
                                </div>
                                <div style={{display:'flex', alignItems:'center', marginLeft: 150, cursor:'pointer'}}>
                                    <img src={`${ShareIcon}`} className='iconsforPost' alt="" />
                                    <p style={{marginLeft:'6px'}}>Share</p>
                                </div>
                            </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

