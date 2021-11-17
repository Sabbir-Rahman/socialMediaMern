import "./profile.css"
import React from 'react'
import Leftbar from '../../../components/leftbar/Leftbar'
import Feed from '../../../components/feed/Feed'
import Rightbar from '../../../components/rightbar/Rightbar'
import Topbar from '../../../components/topbar/Topbar'

export default function Profile() {
    return (
    <>
        <Topbar/>
        <div className="profile">
           <Leftbar/>
           <div className="profileRight">
                <div className="profileRightTop">
                    <div className="profileCover">
                        <img className="profileCoverImg" src="assets/post/3.jpeg" alt=""/>
                        <img className="profileUserImg" src="assets/person/7.jpeg" alt=""/>
                    </div>
                    <div className="profileInfo">
                        <h4 className="profileInfoName">Safak Khan</h4>
                        <span className="profileInfoDesc">This is description</span>
                    </div>
                </div>
                <div className="profileRightBottom">
                    <Feed/>
                    <Rightbar/>
                </div>
             
           </div>
           
        </div>
     </>
    )
}
