import React from 'react'
import './chatOnline.css'

function ChatOnline() {
    return (
        <div className='chatOnline'>
            <div className="chatOnlineFriend">
                <div className="chatOnlineImgContainer">
                    <img className='chatOnlineImg' src="https://media.istockphoto.com/photos/abstract-graphic-world-map-illustration-on-blue-background-big-data-picture-id1294021851" alt=''/>
                    <div className='chatOnlineBadge'></div>
                </div>
                <span className="chatOnlineName">John Doe</span>
            </div>
        </div>
    )
}

export default ChatOnline

