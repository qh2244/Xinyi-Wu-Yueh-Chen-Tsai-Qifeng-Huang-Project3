import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./mainpost.css";
import ContentPost from '../ContentPostContainer/ContentPost';
import Post from '../PostContainer/Post';

export default function MainPost() {
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1N2I3ODBmOThmNjJiZjAyMTdjN2RmMCIsInVzZXJuYW1lIjoieGlhb3NodWFuZyIsImlhdCI6MTcwMjU5MDUwNH0.iquTTgjz6_pfcQ-x_lkmDMhxvgU-lI5xSlptGAHIPJ4";
    const [post, setPost] = useState([]);
    useEffect(() => {
        const getPost = async () => {
            try {
                const res = await axios.get('http://localhost:5173/api/user/flw/657b780f98f62bf0217c7df0', {
                    headers: {
                        token: accessToken
                    }
                })
                setPost(res.data)
            } catch (error) {

            }
        }
        getPost();
    }, []);

    console.log(post)

    return (
        <div className='mainPostContainer'>
          <ContentPost/>
          {post.map((item)=>(
            item.map((postdetails)=>(
                <Post post={postdetails}/>
            ))
          ))}
        </div>
    );
}
