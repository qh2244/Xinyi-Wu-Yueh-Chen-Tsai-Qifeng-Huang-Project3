import React, { useEffect, useState } from 'react';
import "./profilemainpost.css"
import ContentPost from '../ContentPostContainer/ContentPost';
import Coverimage from "../Images/Profile.png"
import Post from '../ProfilePostContainer/Post';
import axios from 'axios';

export default function ProfileMainPost() {
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1N2I3ODBmOThmNjJiZjAyMTdjN2RmMCIsInVzZXJuYW1lIjoieGlhb3NodWFuZyIsImlhdCI6MTcwMjYxNDk1Mn0.bh_nFeArRfagVGhljoS3M40wdawyUJbqMukI91JgsAQ";

    const [post, setPost] = useState([]);
    useEffect(() => {
        const getPost = async () => {
            try {
                const res = await axios.get(`http://localhost:8000/api/user/flw/657b780f98f62bf0217c7df0`, {
                    headers: {
                        token: accessToken
                    }
                })
                setPost(res.data);
            } catch (error) {

            }
        }
        getPost();
    }, [])

    console.log(post);

    return (
        <div className='mainPostContainer'>
            <ContentPost />
            {Array.isArray(post) ? (
                post.map((postDetails) => (
                    <Post key={postDetails.id} post={postDetails} />
                ))
            ) : (
                <Post key={post.id} post={post} />
            )}
        </div>
    );
}
