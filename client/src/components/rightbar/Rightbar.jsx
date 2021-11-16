import React from 'react'
import "./rightbar.css"

export default function Rightbar() {
    return (
        <div className="rightBar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/gift.png" alt=""/>
                    <span className="birthdayText">
                        <b>Sadik Rahman</b> and <b>3 others</b> have a birthday today
                    </span>
                </div>
                <img className="rightbarAd" src="assets/ad.png" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img className="rightbarProfileImg" src="assets/person/3.jpeg" alt=""/>
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Sabbir Rahman</span>
                    </li>

                </ul>
            </div>
        </div>
    )
}
