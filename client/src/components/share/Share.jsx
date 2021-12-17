import React from 'react'
import "./share.css"
import {PermMedia, Label,Room, EmojiEmotions} from "@material-ui/icons"
import { useContext,useRef } from 'react'
import { AuthContext } from '../../context/AuthContext'
import { useState } from 'react'
import axios from 'axios'

export default function Share() {
    const { user} = useContext(AuthContext)
    const PF = process.env.REACT_APP_PUBLIC_FOLDER
    const desc = useRef()
    const [file,setFile] = useState(null)

    const submithandler = async (e) => {
        e.preventDefault()
        const newPost = {
            userId: user._id,
            description: desc.current.value
        } 

        await axios.post("http://localhost:8800/api/v1/posts/create",newPost)
        .then(res => {
            console.log(res)
        }).catch(error => console.log(error))
    }
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src={user.profilePicture?PF+user.profilePicture:PF+"person/noAvtar.png"} />
                    <input placeholder={`What's in your mind ${user.username}?`} className="shareInput" ref={desc}/>
                </div>
                <hr className="shareHr"/>
                <form className="shareBottom" onSubmit={submithandler}>
                    <div className="shareOptions">
                        <label htmlFor="file" className="shareOption">
                            <PermMedia htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText">Photo or Video</span>
                            <input style={{ display: "none"}} type="file" id="file" accept=".png,.jpeg,.jpg" onChange={(e)=> setFile(e.target.files[0])}/>
                        </label>
                        <div className="shareOption">
                            <Label htmlColor="blue" className="shareIcon"/>
                            <span className="shareOptionText">Tag</span>
                        </div>
                        <div className="shareOption">
                            <Room htmlColor="green" className="shareIcon"/>
                            <span className="shareOptionText">Location</span>
                        </div>
                        <div className="shareOption">
                            <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                            <span className="shareOptionText">Feelings</span>
                        </div>
                    </div>
                    <button className="shareButton" type='submit'>Share</button>
                </form>
                
            </div>
            
        </div>
    )
}
