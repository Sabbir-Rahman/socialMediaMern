import React from 'react'
import "./rightbar.css"
import { Users } from '../../dummyData'
import Online from '../online/Online'

export default function Rightbar({user}) {

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
        const PF = process.env.REACT_APP_PUBLIC_FOLDER
        return (
            <>
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
                    <div className="rightbarFollowing">
                        <img src={`${PF}person/1.jpeg`} alt="" className="rightbarFollowingImg"/>
                        <span className="rightbarFollowingName">Sabbir Rahman</span>
                    </div>
                                       
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
