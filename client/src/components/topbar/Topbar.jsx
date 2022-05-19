import {
  Chat,
  Group,
  Home,
  ListAlt,
  LocalMall,
  Notifications,
  Person,
  Search,
  VideoLibrary,
} from "@material-ui/icons";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Avatar from "../../images/avatar.png";
import Social from "../../images/social.png";
import "./topbar.css";

export default function Topbar() {
  const { user } = useContext(AuthContext);

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <img src={Social} alt="logo" className="topbarImg" />
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="topbarLogo">Social</span>
        </Link>
      </div>

      <div className="topbarCenter">
        <div className="searchBar">
          <Search className="searchIcon" />
          <input
            placeholder="Search for friend, post or video"
            className="searchInput"
          />
        </div>
        <div className="topbarLinks">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Home className="topbarLinksIcon" />
          </Link>
          <Link
            to={`/profile/${user?.username}`}
            style={{ textDecoration: "none" }}
          >
            <ListAlt className="topbarLinksIcon" />
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <VideoLibrary className="topbarLinksIcon" />
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <Group className="topbarLinksIcon" />
          </Link>
          <Link to="#" style={{ textDecoration: "none" }}>
            <LocalMall className="topbarLinksIcon" />
          </Link>
        </div>
      </div>

      <div className="topbarRight">
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <Person />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Chat />
            <span className="topbarIconBadge">1</span>
          </div>
          <div className="topbarIconItem">
            <Notifications />
            <span className="topbarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user?.username}`}>
          <img
            src={user?.profilePicture ? PF + user.profilePicture : Avatar}
            alt=""
            className="topbarImg avatarImg"
          />
        </Link>
      </div>
    </div>
  );
}
