import { CircularProgress } from "@material-ui/core";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Leftbar from "../../components/leftbar/Leftbar";
import Topbar from "../../components/topbar/Topbar";
import { AuthContext } from "../../context/AuthContext";
import ProfilePic from "../../images/avatar2.png";
import CoverPic from "../../images/cover.jpg";
import "./users.css";
function Users() {
  const [users, setUsers] = useState([]);
  const { user: currenUser, dispatch } = useContext(AuthContext);
  const history = useHistory();
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(`http://localhost:8800/api/v1/user`);

      setUsers(res.data);
    };

    fetchUser();
  }, []);

  return (
    <div>
      <Topbar />
      <div className="users_container">
        <div className="userList_leftbar">
          <Leftbar />
        </div>
        <div className="usersList">
          {users.length === 0 ? (
            <CircularProgress value={75} />
          ) : (
            users.map((user) => (
              <div className="userList-items" key={user._id}>
                <div className="userList_cover">
                  <img
                    src={CoverPic}
                    alt="cover"
                    className="userList_cover_img"
                  />
                </div>
                <div className="userList_profile">
                  <div className="">
                    <img
                      src={ProfilePic}
                      alt="profile"
                      className="userList_profile_img"
                    />
                  </div>
                  <div className="userList_profile_info">
                    <div className="userListInfo">
                      <span className="userListName">{user?.username}</span>
                      <span className="userListEmail">{user?.email}</span>
                    </div>
                    <div>
                      {user?._id !== currenUser._id && (
                        <button
                          className="userListInfo_button "
                          onClick={() =>
                            history.push(`/profile/${user?.username}`)
                          }
                        >
                          Visit Profile
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Users;
