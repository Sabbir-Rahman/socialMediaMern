import "./profile.css"
import React, { useState,useEffect } from 'react'
import axios from "axios"
import Leftbar from '../../components/leftbar/Leftbar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Topbar from '../../components/topbar/Topbar'
import { useParams } from "react-router"

export default function Profile() {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const [user,setUser] = useState({})
    const params = useParams()
    const username = params.username
    
    useEffect(()=> {
        
        const fetchUser = async () => {
             const res = await axios.get(`http://localhost:8800/api/v1/user/view?username=${username}`)
             setUser(res.data)
        }
        
        fetchUser()
        
        
     },[username])

    return (
    <>
        <Topbar/>
        <div className="profile">
           <Leftbar/>
           <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img className="profileCoverImg" src={user.profileCover|| PF+"person/best_cover_photo.jpg"} alt=""/>
                        <img className="profileUserImg" src={user.profilePicture|| PF+"person/noAvtar.png"} alt=""/>
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">{user.username}</h4>
                        <span className="profileInfoDesc">{user.description}</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    {/* Calling the users feed by username */}
                    <Feed username={username}/>
                    <Rightbar user={user}/>
                </div>
             
           </div>
           
        </div>
     </>
    )
}
