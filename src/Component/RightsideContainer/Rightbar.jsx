import React, { useEffect, useState } from 'react';
import "./rightbar.css";
import ads from "../Images/ads.jpg";
import image1 from "../Images/image3.jpg";
import addFriends from "../Images/add-user.png";
import axios from 'axios';
import { useSelector } from 'react-redux';
import Follow from './follow';

export default function Rightbar() {
  const userDetails = useSelector((state) => state.user);
  const user = userDetails?.user;
  const id = user?.other?._id;
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(`http://localhost:8000/api/user/all/user/${id}`);
        setUsers(res.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };
    getUser();
  }, [id]);

  return (
    <div className='rightbar'>
      <div className='rightcontainer'>
        <div className='adsContainer'>
          <img src={ads} className="adsimg" alt="" />
          <div>
            <p style={{ textAlign: 'start', marginLeft: '10px', marginTop: -20 }}>CodeDemy</p>
            <p style={{ textAlign: 'start', marginLeft: '10px', fontSize: "12px", marginTop: "-16px" }}>Buy CodeDemy course</p>
          </div>
        </div>
        <div className='adsContainer'>
          <img src={image1} className="adsimg" alt="" />
          <div>
            <p style={{ textAlign: 'start', marginLeft: '10px', marginTop: -20 }}>CodeDemy</p>
            <p style={{ textAlign: 'start', marginLeft: '10px', fontSize: "12px", marginTop: "-16px" }}>Buy CodeDemy course</p>
          </div>
        </div>
      </div>

      <div className='rightcontainer2'>
        <h3 style={{ textAlign: "start", marginLeft: "10px" }}>Suggested for you</h3>
        {loading ? (
          <p>Loading...</p>
        ) : users.length > 0 ? (
          users.map((item) => <Follow key={item._id} userdetails={item} />)
        ) : (
          <p>No suggested users found.</p>
        )}
      </div>
    </div>
  );
}
