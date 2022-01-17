import "./messenger.css"
import Topbar from "../../components/topbar/Topbar"
import React, { useState,useEffect } from 'react'
import Conversation from "../../components/conversations/Conversation"
import Message from "../../components/message/Message"
import ChatOnline from "../../components/chatonline/ChatOnline"
import { useContext } from "react"
import { AuthContext } from "../../context/AuthContext"
import axios from "axios"
import { useRef } from "react"
import {io} from "socket.io-client"

export default function Messenger() {
    const [conversations,setConversations] = useState([])
    const [currentChat, setCurrentChat] = useState(null)
    const [messages, setMessages] = useState([])
    const [newMessage, setNewMessage] = useState("")
    const [socket, setSocket] = useState(null)
    const {user} = useContext(AuthContext)
    const scrollRef = useRef()

    useEffect(()=> {
        setSocket(io("ws://localhost:8900"))
    },[])

    useEffect(()=> {
        //take event from server
        socket?.on("welcome",message=> {
            console.log(message)
        })
    },[socket])

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

    //smooth transition
    useEffect(()=> {
        scrollRef.current?.scrollIntoView({ behavior: "smooth"})
    }, [messages])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const message = {
            sender: user._id ,
            text: newMessage,
            conversationId: currentChat._id
        }

        try {
            const res = await axios.post("http://localhost:8800/api/v1/messages",message)
            setMessages([...messages,res.data])
            setNewMessage("")
        }catch(err){
            console.log(err)
        }
    }

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
                                         <div ref={scrollRef}>
                                            <Message message={m} own={m.sender === user._id}/>     
                                        </div>
                    
                                    ))}
                                
                            </div>
                            <div className="chatBoxBottom">
                                <textarea 
                                    className="chatMessageInput" 
                                    placeholder="write something..."
                                    onChange={(e) => setNewMessage(e.target.value)}
                                    value={newMessage}
                                ></textarea>
                                <button className="chatSubmitButton" onClick={handleSubmit}>Send</button>
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

