import React, { useEffect,useState,useContext } from 'react'
import "./feed.css"
import Share from '../share/Share'
import Post from '../post/Post'
import { Input } from '@material-ui/core'
import axios from "axios"
import { AuthContext } from '../../context/AuthContext'


export default function Feed({username}) {
    
    const [posts,setPosts] = useState([])
    const {user} = useContext(AuthContext)

    useEffect(()=> {
       const fetchPosts = async () => {
            const res = username 
                ? await axios.get("http://localhost:8800/api/v1/posts/profile/" + username)
                : await axios.get("http://localhost:8800/api/v1/posts/timeline/" + user._id)
            setPosts(res.data)
        }

       fetchPosts()
    },[username])

    return (
        <div className="feed">
            
            <div className="feedWrapper">
                {(!username||username === user.username) && <Share/>}
                {posts.map((p) => (
                    <Post key={p.id} post={p}/>
                ))}
                
            </div>
        </div>
    )
}
