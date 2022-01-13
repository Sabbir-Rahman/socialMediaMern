import React from 'react'
import './message.css'

function Message({own}) {
    return (
        <div className={own ? "message own" : "message"}>
            <div className="messageTop">
                <img 
                className='messageImg'
                    src='https://thispersondoesnotexist.com/image'
                    alt=''
                />
                <p className='messageText'>Hello This is a message</p>
            </div>
            <div className="messageBottom">
                1 hour ago
            </div>
        </div>
    )
}

export default Message
