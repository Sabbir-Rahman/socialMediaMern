import { Launch } from "@material-ui/icons";
import React from "react";
import Friends from "../../images/friends.jpg";
import JapanImg from "../../images/Japan.png";
import LondonImg from "../../images/London.png";
import "./rightbar.css";

export const HomeRightBar = () => {
  return (
    <>
      <div className="birthdayContainer">
        <img className="birthdayImg" src="assets/gift.png" alt="" />
        <span className="birthdayText">
          <b>Sadik Rahman</b> and <b>3 others</b> have a birthday today
        </span>
      </div>
      <img className="rightbarAd" src={Friends} alt="friends" />

      <div className="suggested_pages">
        <div className="suggested_pages-heading">
          <h3>Suggested Pages</h3>
          <span>see all</span>
        </div>
        <div className="suggested_pages-1">
          <img src={JapanImg} alt="japan" />
          <button>
            <Launch /> Like Page
          </button>
        </div>
        <div className="suggested_pages-2">
          <img src={LondonImg} alt="london" />
          <button>
            <Launch /> Like Page
          </button>
        </div>
      </div>

      <div className="suggested_events">
        <div className="suggested_events-heading">
          <h3>Event</h3>
          <span>see all</span>
        </div>

        <div className="suggested_events-info">
          <div
            className="suggested_events-date"
            style={{ backgroundColor: "#1E74FD" }}
          >
            Feb <br /> 22
          </div>
          <div className="suggested_events-details">
            <h4>Office Work</h4>
            <p>12/1 house 1, Baridhara</p>
          </div>
        </div>

        <div className="suggested_events-info">
          <div
            className="suggested_events-date"
            style={{ backgroundColor: "#10D876" }}
          >
            Apr <br /> 14
          </div>
          <div className="suggested_events-details">
            <h4>Watch Real Madrid's Game</h4>
            <p>18/2 College road, Narayanganj</p>
          </div>
        </div>

        <div className="suggested_events-info">
          <div
            className="suggested_events-date"
            style={{ backgroundColor: "#FE9431" }}
          >
            Sep <br /> 19
          </div>
          <div className="suggested_events-details">
            <h4>Birthday</h4>
            <p>18/2 College road, Narayanganj</p>
          </div>
        </div>
      </div>
    </>
  );
};
