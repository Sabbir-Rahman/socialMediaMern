import React from 'react'
import "./leftbar.css"
import { DynamicFeed, Chat,VideoLibrary,Group, Bookmark,ContactSupport,Work,Event,Book } from "@material-ui/icons"

export default function Leftbar() {
    return (
        <div className="leftBar">
            <div className="leftbarWrapper">
                <ul className="leftbarList">
                    <li className="leftbarListItem">
                        <DynamicFeed className="leftbarIcon"/>
                        <span className="leftbarListItemText">Feed</span>
                    </li>
                    <li className="leftbarListItem">
                        <Chat className="leftbarIcon"/>
                        <span className="leftbarListItemText">Chats</span>
                    </li>
                    <li className="leftbarListItem">
                        <VideoLibrary className="leftbarIcon"/>
                        <span className="leftbarListItemText">Videos</span>
                    </li>
                    <li className="leftbarListItem">
                        <Group className="leftbarIcon"/>
                        <span className="leftbarListItemText">Groups</span>
                    </li>
                    <li className="leftbarListItem">
                        <Bookmark className="leftbarIcon"/>
                        <span className="leftbarListItemText">Bookmarks</span>
                    </li>
                    <li className="leftbarListItem">
                        <ContactSupport className="leftbarIcon"/>
                        <span className="leftbarListItemText">Questions</span>
                    </li>
                    <li className="leftbarListItem">
                        <Work className="leftbarIcon"/>
                        <span className="leftbarListItemText">Jobs</span>
                    </li>
                    <li className="leftbarListItem">
                        <Event className="leftbarIcon"/>
                        <span className="leftbarListItemText">Events</span>
                    </li>
                    <li className="leftbarListItem">
                        <Book className="leftbarIcon"/>
                        <span className="leftbarListItemText">Courses</span>
                    </li>
                </ul>
                <button className="leftbarButton">Show More</button>
                <hr className="leftbarHr"/>
                <ul className="leftbarFriendList">
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="/assets/person/2.jpeg"/>
                        <span className="leftbarFriendName">Sabbir</span>

                    </li>
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="/assets/person/2.jpeg"/>
                        <span className="leftbarFriendName">Sabbir</span>

                    </li>
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="/assets/person/2.jpeg"/>
                        <span className="leftbarFriendName">Sabbir</span>

                    </li>
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="/assets/person/2.jpeg"/>
                        <span className="leftbarFriendName">Sabbir</span>

                    </li>
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="/assets/person/2.jpeg"/>
                        <span className="leftbarFriendName">Sabbir</span>

                    </li>
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="/assets/person/2.jpeg"/>
                        <span className="leftbarFriendName">Sabbir</span>

                    </li>
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="/assets/person/2.jpeg"/>
                        <span className="leftbarFriendName">Sabbir</span>

                    </li>
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="/assets/person/2.jpeg"/>
                        <span className="leftbarFriendName">Sabbir</span>

                    </li>
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="/assets/person/2.jpeg"/>
                        <span className="leftbarFriendName">Sabbir</span>

                    </li>
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="/assets/person/2.jpeg"/>
                        <span className="leftbarFriendName">Sabbir</span>

                    </li>
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="/assets/person/2.jpeg"/>
                        <span className="leftbarFriendName">Sabbir</span>

                    </li>
                    <li className="leftbarFriend">
                        <img className="leftbarFriendImg" src="/assets/person/2.jpeg"/>
                        <span className="leftbarFriendName">Sabbir</span>

                    </li>
                </ul>
            </div>
        </div>
    )
}
