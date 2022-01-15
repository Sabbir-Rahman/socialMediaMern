import React, { useEffect } from 'react'
import { useState } from 'react'
import "./conversation.css"
import axios from 'axios'

function Conversation({conversation, currentUser}) {
    const [user,setUser] = useState(null)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    
    useEffect(()=> {
        const friendId = conversation.members.find((m) => m !== currentUser._id)

        const getUser = async () => {
            try{
                const res = await axios("http://localhost:8800/api/v1/user/view?userId="+ friendId)
                setUser(res.data)
            }catch(err){
                console.log(err)
            }
            
        }
        getUser()
    },[currentUser,conversation])

    return (
        <div className="conversation">
            <img className="conversationImg" src={user?.profilePicture ? user?.profilePicture : PF+"person/noAvtar.png"} alt=""/>
            <span className='conversationName'>{user?.username}</span>
        </div>
    )
}

export default Conversation
