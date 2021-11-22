import "./profile.css"
import React, { useState,useEffect } from 'react'
import axios from "axios"
import Leftbar from '../../components/leftbar/Leftbar'
import Feed from '../../components/feed/Feed'
import Rightbar from '../../components/rightbar/Rightbar'
import Topbar from '../../components/topbar/Topbar'

export default function Profile() {

    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    

    return (
    <>
        <Topbar/>
        <div className="profile">
           <Leftbar/>
           <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img className="profileCoverImg" src={`${PF}post/3.jpeg`} alt=""/>
                        <img className="profileUserImg" src={`${PF}person/7.jpeg`} alt=""/>
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Safak Khan</h4>
                        <span className="profileInfoDesc">This is description</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    {/* Calling the users feed by username */}
                    <Feed username="Sabbir"/>
                    <Rightbar profile/>
                </div>
             
           </div>
           
        </div>
     </>
    )
}
