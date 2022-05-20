import React from "react";
import { HomeRightBar } from "./home.rightbar";
import { ProfileRightBar } from "./profile.rightbar";
import "./rightbar.css";

export default function Rightbar({ user }) {
  return (
    <div className="rightBar">
      <div className="rightbarWrapper">
        {user ? <ProfileRightBar user={user} /> : <HomeRightBar />}
      </div>
    </div>
  );
}
