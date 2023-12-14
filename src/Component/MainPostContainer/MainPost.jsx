import React, { useState } from 'react';
import "./mainpost.css"
import ContentPost from '../ContentPostContainer/ContentPost';
import Post from '../PostContainer/Post';
import { useEffect } from 'react';
import axios from 'axios';


export default function MainPost() {
    const accesstoken = "eeyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1N2FiN2MwN2NjODI0YzBhZGJmYWE4NiIsInVzZXJuYW1lIjoicWlmZW5nIiwiaWF0IjoxNzAyNTQyNTI1fQ.7f2PODhpdRqI4jH5FlWeRXG5__2dB2vzysUbClZ6eto"
    const [post , setPost] = useState([]);
    useEffect(() => {
        const getPost = async()=>{
            try {
                const res = await axios.get('http://localhost:5173/api/user/flw/657ab7c07cc824c0adbfaa86',{
                    headers:{
                        token:accesstoken
                    }
                })
            setPost(res.data);
            }catch (error) {

            }
        }
        getPost();
    }, [])

    console.log(post);
    
    return (
        <div className='mainPostContainer'>           
            <ContentPost />
            {post.map((item)=>(
                item.map((postdetails)=>(
                    <Post post={postdetails}/>
                ))
            ))}
     
        </div>
    );

}