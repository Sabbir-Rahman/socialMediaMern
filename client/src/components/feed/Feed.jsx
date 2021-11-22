import React, { useEffect,useState } from 'react'
import "./feed.css"
import Share from '../share/Share'
import Post from '../post/Post'
import { Input } from '@material-ui/core'
import axios from "axios"

export default function Feed({username}) {
    
    const [posts,setPosts] = useState([])
    

    useEffect(()=> {
       const fetchPosts = async () => {
            const res = username 
                ? await axios.get("http://localhost:8800/api/v1/posts/profile/" + username)
                : await axios.get("http://localhost:8800/api/v1/posts/timeline/618a7bf4cbd0c677be835c66")
            setPosts(res.data)
        }

       fetchPosts()
    },[username])

    return (
        <div className="feed">
            
            <div className="feedWrapper">
                <Share/>
                {posts.map((p) => (
                    <Post key={p.id} post={p}/>
                ))}
                <Post/>
            </div>
        </div>
    )
}
