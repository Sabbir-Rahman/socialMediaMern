import { Add, Launch, Remove } from "@material-ui/icons";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Friends from "../../images/friends.jpg";
import JapanImg from "../../images/Japan.png";
import LondonImg from "../../images/London.png";
import "./rightbar.css";

export default function Rightbar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currenUser, dispatch } = useContext(AuthContext);
  const [friends, setFriends] = useState([]);
  const [followed, setFollowed] = useState(
    currenUser.followings?.includes(user?.id)
  );

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
  }, [user]);

  const handleClick = async () => {
    try {
      if (followed) {
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
  const HomeRightbar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">
            <b>Sadik Rahman</b> and <b>3 others</b> have a birthday today
          </span>
        </div>
        <img className="rightbarAd" src={Friends} alt="friends" />

        <div className="suggested_pages">
          <div className="suggested_pages-heading">
            <h3>Suggested Pages</h3>
            <span>see all</span>
          </div>
          <div className="suggested_pages-1">
            <img src={JapanImg} alt="japan" />
            <button>
              <Launch /> Like Page
            </button>
          </div>
          <div className="suggested_pages-2">
            <img src={LondonImg} alt="london" />
            <button>
              <Launch /> Like Page
            </button>
          </div>
        </div>

        <div className="suggested_events">
          <div className="suggested_events-heading">
            <h3>Event</h3>
            <span>see all</span>
          </div>

          <div className="suggested_events-info">
            <div
              className="suggested_events-date"
              style={{ backgroundColor: "#1E74FD" }}
            >
              Feb <br /> 22
            </div>
            <div className="suggested_events-details">
              <h4>Office Work</h4>
              <p>12/1 house 1, Baridhara</p>
            </div>
          </div>

          <div className="suggested_events-info">
            <div
              className="suggested_events-date"
              style={{ backgroundColor: "#10D876" }}
            >
              Apr <br /> 14
            </div>
            <div className="suggested_events-details">
              <h4>Watch Real Madrid's Game</h4>
              <p>18/2 College road, Narayanganj</p>
            </div>
          </div>

          <div className="suggested_events-info">
            <div
              className="suggested_events-date"
              style={{ backgroundColor: "#FE9431" }}
            >
              Sep <br /> 19
            </div>
            <div className="suggested_events-details">
              <h4>Birthday</h4>
              <p>18/2 College road, Narayanganj</p>
            </div>
          </div>
        </div>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        {user.username !== currenUser.username && (
          <button className="rightbarFollowingButton" onClick={handleClick}>
            {followed ? "Unfollow" : "Follow"}
            {followed ? <Remove /> : <Add />}
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
            <span className="rightbarInfoValue">
              {user.relationships === 1
                ? "Single"
                : user.relationships === 2
                ? "Married"
                : "-"}
            </span>
          </div>
        </div>
        <h4 className="rightbarTitle">User friends</h4>
        <div className="rightbarFollowings">
          {friends.map((friend) => (
            <Link
              to={"/profile/" + friend.username}
              style={{ textDecoration: "none" }}
            >
              <div className="rightbarFollowing">
                <img
                  src={
                    friend.profilePicture
                      ? PF + friend.profilePicture
                      : PF + "person/noAvtar.png"
                  }
                  alt=""
                  className="rightbarFollowingImg"
                />
                <span className="rightbarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };

  return (
    <div className="rightBar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
}
