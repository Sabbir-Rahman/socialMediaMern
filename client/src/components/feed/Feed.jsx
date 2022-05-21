import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get(
            "http://localhost:8800/api/v1/posts/profile/" + username
          )
        : await axios.get(
            "http://localhost:8800/api/v1/posts/timeline/" + user._id
          );
      setPosts(res.data);
    };

    fetchPosts();
  }, [user._id, username]);

  const getSortedPost = (allPosts) => {
    return allPosts.sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  };

  return (
    <div className="feed">
      <div className="feedWrapper">
        {(!username || username === user.username) && <Share />}
        {getSortedPost(posts).map((p, index) => (
          <Post key={index} post={p} />
        ))}
      </div>
    </div>
  );
}
