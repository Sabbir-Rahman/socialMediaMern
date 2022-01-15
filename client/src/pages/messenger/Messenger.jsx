import "./messenger.css"
import Topbar from "../../components/topbar/Topbar"
import React, { useState,useEffect } from 'react'
import Conversation from "../../components/conversations/Conversation"
import Message from "../../components/message/Message"
import ChatOnline from "../../components/chatonline/ChatOnline"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import axios from "axios"

export default function Messenger() {
    const [conversations,setConversations] = useState([])
    const {user} = useContext(AuthContext)

    useEffect(() => {
        const getConversation = async () => {
            try {
                const res = await axios.get("http://localhost:8800/api/v1/conversations/"+ user._id)
                setConversations(res.data)
            }catch(err){
                console.log(err)
            }
        }

        getConversation()
    }, [user])
    console.log(user)
    return (
        <>
            <Topbar/>
            <div className="messenger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input placeholder="Search for friends" className="chatMenuInput"/>
                        {conversations.map((c)=> (
                            <Conversation conversation={c} currentUser={user}/>
                        ))}
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                        <div className="chatBoxTop">
                            <Message/>
                            <Message own={true}/>
                            <Message/>
                            <Message/>
                            <Message/>
                            <Message/>
                            <Message/>
                            <Message own={true}/>
                            <Message own={true}/>
                            <Message/>
                            <Message/>
                            <Message own={true}/>
                            <Message/>
                            <Message/>
                            <Message own={true}/>
                            <Message/>
                            <Message/>
                            <Message own={true}/>
                            <Message/>
                            <Message own={true}/>
                            <Message/>
                            <Message own={true}/>
                            <Message/>
                            <Message/>
                            <Message/>
                            <Message own={true}/>
                            <Message own={true}/>
                            <Message/>
                            <Message/>
                            <Message own={true}/>
                            <Message/>
                        </div>
                        <div className="chatBoxBottom">
                            <textarea className="chatMessageInput" placeholder="write something..."></textarea>
                            <button className="chatSubmitButton">Send</button>
                        </div>
                    </div>
                </div>
                <div className="chatOnline">
                    <div className="chatOnlineWrapper">
                        <ChatOnline/>
                        <ChatOnline/>
                        <ChatOnline/>
                        <ChatOnline/>
                        <ChatOnline/>
                    </div>
                </div>
            </div>
        </>
        
    )
}

