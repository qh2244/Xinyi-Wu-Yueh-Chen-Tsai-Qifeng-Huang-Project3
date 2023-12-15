import React, { useEffect, useState } from 'react';
import "./rightbar.css"
import ads from "../Images/ads.jpg";
import image1 from "../Images/image3.jpg";
import image2 from "../Images/image2.jpg";
import image4 from "../Images/image4.jpg";
import image5 from "../Images/image5.jpg";
import image6 from "../Images/image6.jpg";
import image7 from "../Images/image1.jpg";
import addFriends from "../Images/add-user.png"
import axios from 'axios';

export default function Rightbar() {
    const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1N2I3ODBmOThmNjJiZjAyMTdjN2RmMCIsInVzZXJuYW1lIjoieGlhb3NodWFuZyIsImlhdCI6MTcwMjYxNDk1Mn0.bh_nFeArRfagVGhljoS3M40wdawyUJbqMukI91JgsAQ";
    const [users , setUsers] = useState([]);
    useEffect(() => {
      const getuser = async()=>{
        try {
          const res  = await axios.get(`http://localhost:8000/api/user/all/user`)
          setUsers(res.data);
        } catch (error) {
          console.log("Some error occured")
        }
      }
      getuser();
    }, [])
    console.log(users)

    return (
        <div className='rightbar'>
            <div className='rightcontainer'>
                <div className='adsContainer'>
                    <img src={`${ads}`} className="adsimg" alt="" />
                    <div>
                        <p style={{ textAlign: 'start', marginLeft: '10px', marginTop: -20 }}>CodeDemy</p>
                        <p style={{ textAlign: 'start', marginLeft: '10px', fontSize: "12px", marginTop: '-16px' }}>Buy codedemy course</p>
                    </div>
                </div>
                <div className='adsContainer'>
                    <img src={`${image1}`} className="adsimg" alt="" />
                    <div>
                        <p style={{ textAlign: 'start', marginLeft: '10px', marginTop: -20 }}>CodeDemy</p>
                        <p style={{ textAlign: 'start', marginLeft: '10px', fontSize: "12px", marginTop: '-16px' }}>Buy codedemy course</p>
                    </div>
                </div>
            </div>

            <div className='rightcontainer2'>
                <h3 style={{ textAlign: 'start', marginLeft: '10px' }}>Suggested for you</h3>
                {users.map((item)=>(
                    <div style={{ marginTop: '-10px' }} id={item._id}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={`${item.profile}`} className="Profileimage" alt="" />
                            <div>
                                <p style={{ marginLeft: "10px", textAlign: 'start' }}>{item.username}</p>
                                <p style={{ marginLeft: "10px", textAlign: 'start', marginTop: '-16px', fontSize: '11px', color: '#aaa' }}>Followed by Qifeng Huang</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: "#aaa", padding: '10px', marginRight: 13, borderRadius: '50%', cursor: 'pointer' }}>
                            <img src={`${addFriends}`} className="addfriend" alt="" />
                        </div>
                    </div>
                </div>
                     ))}

                <div style={{ marginTop: '-10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={`${image4}`} className="Profileimage" alt="" />
                            <div>
                                <p style={{ marginLeft: "10px", textAlign: 'start' }}>James</p>
                                <p style={{ marginLeft: "10px", textAlign: 'start', marginTop: '-16px', fontSize: '11px', color: '#aaa' }}>Suggested for you</p>
                            </div>
                        </div>
                        <div style={{ backgroundColor: "#aaa", padding: '10px', marginRight: 13, borderRadius: '50%', cursor: 'pointer' }}>
                            <img src={`${addFriends}`} className="addfriend" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
