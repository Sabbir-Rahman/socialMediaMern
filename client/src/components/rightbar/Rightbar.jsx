import React from 'react'
import "./rightbar.css"
import { Users } from '../../dummyData'
import Online from '../online/Online'
import { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import {Add} from "@material-ui/icons"
import { Link } from "react-router-dom";

export default function Rightbar({user}) {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const {user:currenUser,dispatch} = useContext(AuthContext)
    const [friends,setFriends] = useState([]) 
    const [followed,setFollowed] = useState(false)

    

    useEffect(()=> {
        const getFriends = async () => {
            try {
                const friendList = await axios.get("http://localhost:8800/api/v1/user/friends/"+ currenUser._id)
                setFriends(friendList.data)
                
            }catch (err) {
                console.log(err)
            }
        }
        getFriends()
    }, [currenUser._id])

    const handleClick = async ()=> {
        try {

        } catch(err) {
            console.log(err)
        }
    }
    const HomeRightbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/gift.png" alt=""/>
                    <span className="birthdayText">
                        <b>Sadik Rahman</b> and <b>3 others</b> have a birthday today
                    </span>
                </div>
                <img className="rightbarAd" src="assets/ad.png" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u=> (
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        
        return (
            <>
                {user.username !== currenUser.username && (
                    <button className='rightbarFollowingButton' onClick={handleClick}>
                        Follow<Add/>
                    </button>
                )}
                <h4 className="rightbartitle">User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">{user.city}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">{user.from}</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">{user.relationships === 1 ? "Single" : user.relationships ===2 ? "Married" : "-"}</span>
                    </div>  
                </div>
                <h4 className="rightbarTitle">User friends</h4>
                    <div className="rightbarFollowings">
                        
                        {friends.map((friend)=> (
                            <Link to={"/profile/"+ friend.username}  style={{ textDecoration: "none" }}>
                            
                            <div className="rightbarFollowing">
                                <img src={friend.profilePicture ? PF + friend.profilePicture : PF + "person/noAvtar.png"} alt="" className="rightbarFollowingImg"/>
                                <span className="rightbarFollowingName">{friend.username}</span>
                            </div>
                            </Link>
                        ))}
                        
                                        
                    </div>                
            </>
        )
    }

    return (
        <div className="rightBar">
            <div className="rightbarWrapper">
                {user ? <ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    )
}
