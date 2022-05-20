import { MailOutlined, MoreHoriz } from "@material-ui/icons";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Avatar from "../../images/avatar2.png";
import "./rightbar.css";

export const ProfileRightBar = ({ user }) => {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currenUser, dispatch } = useContext(AuthContext);
  const [friends, setFriends] = useState([]);
  const [followed, setFollowed] = useState(
    currenUser.followings?.includes(user?.id)
  );

  console.log({ currenUser });
  console.log("Friends => ", friends);
  console.log("followed => ", followed);
  useEffect(() => {
    const getFriends = async () => {
      try {
        const friendList = await axios.get(
          "http://localhost:8800/api/v1/user/friends/" + currenUser._id
        );
        setFriends(friendList.data);
      } catch (err) {
        console.log(err);
      }
    };
    getFriends();
  }, [currenUser._id]);

  const handleClick = async () => {
    try {
      if (!followed) {
        await axios.put(
          "http://localhost:8800/api/v1/user/follow/" + user._id,
          { userId: currenUser._id }
        );
        dispatch({ type: "UNFOLLOW", payload: user._id });
      } else {
        await axios.put(
          "http://localhost:8800/api/v1/user/unfollow/" + user._id,
          { userId: currenUser._id }
        );
        dispatch({ type: "FOLLOW", payload: user._id });
      }
    } catch (err) {
      console.log(err);
    }
    setFollowed(!followed);
  };

  return (
    <>
      {user.username !== currenUser.username && (
        <div className="RightbarFollowingInfo">
          <button className="rightbarFollowingButton" onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
          </button>
          <MailOutlined className="RightbarFollowingInfo-icon" />
          <MoreHoriz className="RightbarFollowingInfo-icon" />
        </div>
      )}
      <div className="rightbarProfileInfo">
        <h4 className="rightbartitle">User Information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Email:</span>
            <span className="rightbarInfoValue">{user.email}</span>
          </div>
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
            <span className="rightbarInfoValue">
              {user.relationships === 1
                ? "Single"
                : user.relationships === 2
                ? "Married"
                : "-"}
            </span>
          </div>
        </div>
      </div>
      <div className="rightsidebarFollowerList">
        <p className="rightbarTitle">Followers</p>
        <div className="rightbarFollowings">
          {friends.map((friend, index) => (
            <Link
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none" }}
              key={index}
            >
              <div className="rightbarFollowing">
                <img
                  src={
                    friend.profilePicture ? PF + friend.profilePicture : Avatar
                  }
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
