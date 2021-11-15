import React from 'react'
import "./leftbar.css"
import { DynamicFeed, Chat,VideoLibrary,Group, Bookmark,ContactSupport,Work,Event,Book } from "@material-ui/icons"

export default function Leftbar() {
    return (
        <div className="leftBar">
            <div className="leftbarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <DynamicFeed className="leftbarIcon"/>
                        <span className="sidebarListItemText">Feed</span>
                    </li>
                    <li className="sidebarListItem">
                        <Chat className="leftbarIcon"/>
                        <span className="sidebarListItemText">Chats</span>
                    </li>
                    <li className="sidebarListItem">
                        <VideoLibrary className="leftbarIcon"/>
                        <span className="sidebarListItemText">Videos</span>
                    </li>
                    <li className="sidebarListItem">
                        <Group className="leftbarIcon"/>
                        <span className="sidebarListItemText">Groups</span>
                    </li>
                    <li className="sidebarListItem">
                        <Bookmark className="leftbarIcon"/>
                        <span className="sidebarListItemText">Bookmarks</span>
                    </li>
                    <li className="sidebarListItem">
                        <ContactSupport className="leftbarIcon"/>
                        <span className="sidebarListItemText">Questions</span>
                    </li>
                    <li className="sidebarListItem">
                        <Work className="leftbarIcon"/>
                        <span className="sidebarListItemText">Jobs</span>
                    </li>
                    <li className="sidebarListItem">
                        <Event className="leftbarIcon"/>
                        <span className="sidebarListItemText">Events</span>
                    </li>
                    <li className="sidebarListItem">
                        <Book className="leftbarIcon"/>
                        <span className="sidebarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="leftbarButton">Show More</button>
                <hr className="leftbarHr"/>
                <ul className="leftbarFriendList">
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="/assets/person/2.jpeg"/>
                        <span className="leftbarFriendName">Sabbir</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
