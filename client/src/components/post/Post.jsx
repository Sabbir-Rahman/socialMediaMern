import { ChatBubbleOutline, MoreVert } from "@material-ui/icons";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { format } from "timeago.js";
import { AuthContext } from "../../context/AuthContext";
import Avatar from "../../images/avatar.png";
import "./post.css";

export default function Post({ post }) {
  const [like, setLike] = useState(post?.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const { user: currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsLiked(post?.likes.includes(currentUser._id));
  }, [currentUser._id, post?.likes]);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `http://localhost:8800/api/v1/user/view?userId=${post?.userId}`
      );
      setUser(res.data);
    };
    if (post) {
      fetchUser();
    }
  }, [post?.userId]);

  const likeHandler = () => {
    axios
      .put("http://localhost:8800/api/v1/posts/likeDislike/" + post._id, {
        userId: currentUser._id,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));

    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            {post && (
              <>
                <Link to={`profile/${user.username}`}>
                  <img
                    className="postProfileImg"
                    src={
                      currentUser.profilePicture
                        ? PF + currentUser.profilePicture
                        : Avatar
                    }
                    alt=""
                  />
                </Link>
                <div className="post-info">
                  <span className="postUsername">{user.username}</span>
                  <span className="postDate">{format(post?.createdAt)}</span>
                </div>
              </>
            )}
            <br />
          </div>
          <div className="postTopRight">
            <MoreVert />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.description}</span>
          <img className="postImg" src={PF + post?.img} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src={`${PF}like.png`}
              onClick={likeHandler}
              alt=""
            />
            <img className="likeIcon" src={`${PF}heart.png`} alt="" />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <ChatBubbleOutline className="comment-icon" />
            <span className="postCommentText">{post?.comment} Comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
