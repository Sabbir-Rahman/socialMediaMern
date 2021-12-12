import "./topbar.css";
import { Person, Search, Chat,Notifications } from "@material-ui/icons"
import {Link} from "react-router-dom"
import { useContext } from "react";
import {AuthContext} from "../../context/AuthContext"

export default function Topbar() {

    const {user} = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    return (
        <div className="topbarContainer">
            
            <div className="topbarLeft">
                <Link to="/" style={{textDecoration:"none"}}>
                    <span className="logo">Social</span>
                </Link>
            </div>
            <div className="topbarCenter">
                <div className="searchBar">
                    <Search className="searchIcon"/>
                    <input placeholder="Search for friend.post or video" className="searchInput"/>
                </div>
            </div>
            <div className="topbarRight">
                <div className="topbarLinks">
                    <Link to="/" style={{textDecoration:"none"}}>
                        <span className="topbarLink">Homepage</span>    
                    </Link>
                    <Link to="/profile/:username" style={{textDecoration:"none"}}>
                        <span className="topbarLink">Timeline</span>       
                    </Link>
                    
                </div>
            
                <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <Link to={`/profile/${user.username}`}>
                    <img src={ user.profilePicture ? PF + user.profilePicture : PF + "person/noAvtar.png"} alt="" className="topbarImg"/>
                </Link>
            </div>
        </div>
    )
}