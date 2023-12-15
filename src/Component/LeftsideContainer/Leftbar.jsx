import React, { useEffect, useState } from 'react';
import "./leftbar.css"
import image from "../Images/Profile.png"
import image1 from "../Images/image1.jpg"
import image2 from "../Images/image2.jpg"
import image3 from "../Images/image3.jpg"
import image4 from "../Images/image4.jpg"
import image5 from "../Images/image5.jpg"
import image6 from "../Images/image6.jpg"
import axios from 'axios';

export default function Leftbar() {
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1N2I3ODBmOThmNjJiZjAyMTdjN2RmMCIsInVzZXJuYW1lIjoieGlhb3NodWFuZyIsImlhdCI6MTcwMjU5MDUwNH0.iquTTgjz6_pfcQ-x_lkmDMhxvgU-lI5xSlptGAHIPJ4";

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
        <div className='Leftbar'>
            <div className='NotificationsContainer'>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <p style={{ marginLeft: "-14px" }}>Notifications</p>
                    <p style={{ color: "#aaa", marginLeft: "40px" }}>See all</p>
                </div>
                <div style={{ display: 'flex', alignItems: "center", marginTop: -13 }}>
                    <img src={`${image}`} className='notificationimg' alt="" />
                    <p style={{ marginLeft: "5px", color: "#aaa", fontSize: 13, textAlign: "start", width: "120px" }}>Madan like your post</p>
                    <img src={`${image1}`} className="likeimage" alt="" />
                </div>
                <div style={{ display: 'flex', alignItems: "center", marginTop: -10 }}>
                    <img src={`${image}`} className='notificationimg' alt="" />
                    <p style={{ marginLeft: "5px", color: "#aaa", fontSize: 13, textAlign: "start", width: "120px" }}>Suman started to following you</p>
                    <img src={`${image2}`} className="followinguserimage" alt="" />
                </div>
                <div style={{ display: 'flex', alignItems: "center", marginTop: -10 }}>
                    <img src={`${image2}`} className='notificationimg' alt="" />
                    <p style={{ marginLeft: "5px", color: "#aaa", fontSize: 13, textAlign: "start", width: "120px" }}>Madan like your post</p>
                    <img src={`${image3}`} className="likeimage" alt="" />
                </div>
                <div style={{ display: 'flex', alignItems: "center", marginTop: -10 }}>
                    <img src={`${image}`} className='notificationimg' alt="" />
                    <p style={{ marginLeft: "5px", color: "#aaa", fontSize: 13, textAlign: "start", width: "120px" }}>Madan like your post</p>
                    <img src={`${image4}`} className="likeimage" alt="" />
                </div>
                <div style={{ display: 'flex', alignItems: "center", marginTop: -10 }}>
                    <img src={`${image6}`} className='notificationimg' alt="" />
                    <p style={{ marginLeft: "5px", color: "#aaa", fontSize: 13, textAlign: "start", width: "120px" }}>Madan like your post</p>
                    <img src={`${image5}`} className="likeimage" alt="" />
                </div>
                <div style={{ display: 'flex', alignItems: "center", marginTop: -10 }}>
                    <img src={`${image3}`} className='notificationimg' alt="" />
                    <p style={{ marginLeft: "5px", color: "#aaa", fontSize: 13, textAlign: "start", width: "120px" }}>Madan like your post</p>
                    <img src={`${image6}`} className="likeimage" alt="" />
                </div>
            </div>
            <div className='NotificationsContainer'>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <p style={{ marginLeft: "-20px" }}>Explore</p>
                    <p style={{ color: "#aaa", marginLeft: "40px" }}>See all</p>
                </div>
                <div>
                    {post.map((item) => (
                        <img src={`${item.image}`} className="exploreimage" alt="" key={item.id} />
                    ))}
                    <img src={`${image}`} className="exploreimage" alt="" />
                    <img src={`${image1}`} className="exploreimage" alt="" />
                    <img src={`${image2}`} className="exploreimage" alt="" />
                    <img src={`${image3}`} className="exploreimage" alt="" />
                    <img src={`${image4}`} className="exploreimage" alt="" />
                    <img src={`${image5}`} className="exploreimage" alt="" />
                    <img src={`${image6}`} className="exploreimage" alt="" />
                    <img src={`${image}`} className="exploreimage" alt="" />
                </div>
            </div>
        </div>
    )
}