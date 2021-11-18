import React from 'react'
import "./rightbar.css"
import { Users } from '../../dummyData'
import Online from '../online/Online'

export default function Rightbar({profile}) {

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
                <h4 className="rightbartitle">User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">New York</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">From:</span>
                        <span className="rightbarInfoValue">Madrid</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">Single</span>
                    </div>  
                </div>
                <h4 className="rightbarTitle">User friends</h4>
                <div className="rightbarFollowings">
                    <div className="rightbarFollowing">
                        <img src="assets/person/1.jpeg" alt="" className="rightbarFollowingImg"/>
                        <span className="rightbarFollowingName">Sabbir Rahman</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/2.jpeg" alt="" className="rightbarFollowingImg"/>
                        <span className="rightbarFollowingName">Sabbir Rahman</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg"/>
                        <span className="rightbarFollowingName">Sabbir Rahman</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/4.jpeg" alt="" className="rightbarFollowingImg"/>
                        <span className="rightbarFollowingName">Sabbir Rahman</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg"/>
                        <span className="rightbarFollowingName">Sabbir Rahman</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg"/>
                        <span className="rightbarFollowingName">Sabbir Rahman</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/7.jpeg" alt="" className="rightbarFollowingImg"/>
                        <span className="rightbarFollowingName">Sabbir Rahman</span>
                    </div>
                    <div className="rightbarFollowing">
                        <img src="assets/person/8.jpeg" alt="" className="rightbarFollowingImg"/>
                        <span className="rightbarFollowingName">Sabbir Rahman</span>
                    </div>                   
                </div>                
            </>
        )
    }

    return (
        <div className="rightBar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    )
}
