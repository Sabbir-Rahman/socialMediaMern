import {
  Bookmark,
  DynamicFeed,
  Event,
  EventAvailableOutlined,
  ExitToApp,
  Group,
  HomeWorkOutlined,
  LiveTvOutlined,
  MailOutline,
  StorefrontOutlined,
  VideoLibrary,
  Work,
} from "@material-ui/icons";
import React from "react";
import "./leftbar.css";

export default function Leftbar() {
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="leftBar">
      <div className="leftbarWrapper">
        <ul className="leftbarList">
          <li className="leftbarListItem">
            <DynamicFeed className="leftbarIcon feed-icon" />
            <span className="leftbarListItemText ">Feed</span>
          </li>
          <li className="leftbarListItem">
            <VideoLibrary className="leftbarIcon video-icon" />
            <span className="leftbarListItemText ">Videos</span>
          </li>
          <li className="leftbarListItem">
            <Group className="leftbarIcon group-icon" />
            <span className="leftbarListItemText ">Groups</span>
          </li>
          <li className="leftbarListItem">
            <Bookmark className="leftbarIcon bookmark-icon" />
            <span className="leftbarListItemText ">Bookmarks</span>
          </li>
          <li className="leftbarListItem">
            <Work className="leftbarIcon job-icon" />
            <span className="leftbarListItemText ">Jobs</span>
          </li>
          <li className="leftbarListItem">
            <Event className="leftbarIcon event-icon" />
            <span className="leftbarListItemText ">Events</span>
          </li>
        </ul>
        <hr className="leftbarHr" />
        <ul className="leftbarFriendList">
          <p>More Pages</p>
          <li className="leftbarBottomListItem">
            <MailOutline className="leftbarBottomIcon" />
            <span className="leftbarListItemText ">Email Box</span>
          </li>
          <li className="leftbarBottomListItem">
            <EventAvailableOutlined className="leftbarBottomIcon" />
            <span className="leftbarListItemText ">Latest Events</span>
          </li>
          <li className="leftbarBottomListItem">
            <HomeWorkOutlined className="leftbarBottomIcon" />
            <span className="leftbarListItemText ">Near Hotel</span>
          </li>
          <li className="leftbarBottomListItem">
            <LiveTvOutlined className="leftbarBottomIcon" />
            <span className="leftbarListItemText ">Live Streams</span>
          </li>
          <li className="leftbarBottomListItem">
            <StorefrontOutlined className="leftbarBottomIcon" />
            <span className="leftbarListItemText ">Market Place</span>
          </li>
        </ul>

        <button className="logoutBtn" onClick={handleLogout}>
          <ExitToApp /> <span>Logout</span>
        </button>
      </div>
    </div>
  );
}
