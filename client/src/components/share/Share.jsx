import {
  Cancel,
  Edit,
  EmojiEmotions,
  Label,
  PermMedia,
  Room,
} from "@material-ui/icons";
import axios from "axios";
import React, { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import Avatar from "../../images/avatar.png";
import "./share.css";

export default function Share() {
  const { user } = useContext(AuthContext);
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const desc = useRef();
  const [file, setFile] = useState(null);

  const submithandler = async (e) => {
    e.preventDefault();
    const newPost = {
      userId: user._id,
      description: desc.current.value,
    };

    //uploading file
    if (file) {
      const data = new FormData();
      const fileName = Date.now() + file.name;
      data.append("name", fileName);
      data.append("file", file);
      newPost.img = fileName;
      axios
        .post("http://localhost:8800/api/v1/upload", data)
        .then((res) => {
          console.log(res);
        })
        .catch((error) => console.log(error));
    }

    await axios
      .post("http://localhost:8800/api/v1/posts/create", newPost)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <div className="shareTop-header">
            <Edit className="shareTop-header-icon" />
            <p>Create Post</p>
          </div>
          <div className="shareTop-header-status">
            <img
              className="shareProfileImg"
              src={user.profilePicture ? PF + user.profilePicture : Avatar}
              alt="avatar"
            />
            <textarea
              placeholder={`What's in your mind ${user.username}?`}
              className="shareInput"
              ref={desc}
            />
          </div>
        </div>
        {
          //showing the file at the time of post
          file && (
            <div className="shareImgContainer">
              <img
                className="shareImg"
                src={URL.createObjectURL(file)}
                alt=""
              />
              <Cancel
                className="shareCancelImg"
                onClick={() => setFile(null)}
              />
            </div>
          )
        }
        <form className="shareBottom" onSubmit={submithandler}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div className="shareOptions">
              <label htmlFor="file" className="shareOption">
                <PermMedia htmlColor="tomato" className="shareIcon permMedia" />
                <span className="shareOptionText">Photo or Video</span>
                <input
                  style={{ display: "none" }}
                  type="file"
                  id="file"
                  accept=".png,.jpeg,.jpg"
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </label>
              <div className="shareOption">
                <Label htmlColor="blue" className="shareIcon " />
                <span className="shareOptionText">Tag</span>
              </div>
              <div className="shareOption">
                <Room htmlColor="green" className="shareIcon" />
                <span className="shareOptionText">Location</span>
              </div>
              <div className="shareOption">
                <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                <span className="shareOptionText">Feelings</span>
              </div>
            </div>
            <div>
              <button className="shareButton" type="submit">
                Share
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
