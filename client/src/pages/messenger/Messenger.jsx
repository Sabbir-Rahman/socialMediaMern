import "./messenger.css"
import Topbar from "../../components/topbar/Topbar"
import React, { useState,useEffect } from 'react'
import Conversation from "../../components/conversations/Conversation"
import Message from "../../components/message/Message"
import ChatOnline from "../../components/chatonline/ChatOnline"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import axios from "axios"
import { CodeSharp } from "@material-ui/icons"

export default function Messenger() {
    const [conversations,setConversations] = useState([])
    const [currentChat, setCurrentChat] = useState(null)
    const [messages, setMessages] = useState([])
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
    
    useEffect(()=> {
        const getMessages = async ()=> {
            try{
                const res = await axios.get("http://localhost:8800/api/v1/messages/" + currentChat?._id)
                setMessages(res.data)
            }catch(err){
                console.log(err)
            }
        }
        getMessages()
    }, [currentChat])
    console.log(messages)
    return (
        <>
            <Topbar/>
            <div className="messenger">
                <div className="chatMenu">
                    <div className="chatMenuWrapper">
                        <input placeholder="Search for friends" className="chatMenuInput"/>
                        {conversations.map((c)=> (
                            <div onClick={()=> setCurrentChat(c)}>
                                <Conversation conversation={c} currentUser={user}/>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="chatBox">
                    <div className="chatBoxWrapper">
                    {
                     currentChat?
                           <>
                            <div className="chatBoxTop">
                                {messages.map((m)=> (
                                    <Message message={m} own={m.sender === user._id}/>
                                ))}
                            </div>
                            <div className="chatBoxBottom">
                                <textarea className="chatMessageInput" placeholder="write something..."></textarea>
                                <button className="chatSubmitButton">Send</button>
                            </div>
                    </>:<span className="noConversationText">Open the coversations to start a chat</span>
                    }
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

