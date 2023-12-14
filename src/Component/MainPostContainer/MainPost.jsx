import React from 'react';
import "./mainpost.css"
import ContentPost from '../ContentPostContainer/ContentPost';
import Post from '../PostContainer/Post';
import { useEffect } from 'react';


export default function MainPost() {
/*
    const accesstoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1N2E4MTBhYmRkN2RhMzhiZTRkNjViMCIsInVzZXJuYW1lIjoiUWlmZW5nIiwiaWF0IjoxNzAyNTI3MjQyfQ.RUBzSNNjp5IqjItqpjSt1KSyUArn0MRqaRNSVi5dPUg"
    const[post, setPost] = useState([]);
    useEffect(() => {
        const getPost = async()=>{
            try {
                const res = await axious.get("http://localhost:5173/api/user/flw/657a810abdd7da38be4d65b0", {
                    headers:{
                        token:accesstoken
                    }
                })
                setPost(res.data);
            } catch (error) {

            }
        }
        getPost();
    }, [])

    console.log(post);
*/
    return (
        <div className='mainPostContainer'>           
            <ContentPost />
            <Post />
            <Post />
        </div>
    );
/*
{post.map((item)=>(
    item.map((postdetails)=>(
        <Post post={postdetails}/>
    ))
))}
*/
}