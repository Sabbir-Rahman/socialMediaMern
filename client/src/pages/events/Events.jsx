import { LocationOn } from "@material-ui/icons";
import React from "react";
import Leftbar from "../../components/leftbar/Leftbar";
import Topbar from "../../components/topbar/Topbar";
import randomPic from "../../images/friends.jpg";
import "./event.css";

function Events() {
  return (
    <>
      <Topbar />
      <div className="eventListWrapper">
        <div className="events_left">
          <Leftbar />
        </div>
        <div className="eventContainerList">
          <h1>Latest Events</h1>
          <div className="eventsList">
            <div className="eventListItemList">
              <div className="eventPic">
                <img src={randomPic} alt="random" />
              </div>
              <div className="eventInfo">
                <div className="eventDate">
                  Feb <br /> <span>22</span>
                </div>
                <div className="eventsDetails">
                  <div className="eventName">A Stand-up Comedy Show</div>
                  <div className="eventLoc">
                    <LocationOn className="eventLoc_icon" />
                    <p>Dhaka,Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="eventListItemList">
              <div className="eventPic">
                <img
                  src="https://images.unsplash.com/photo-1517649763962-0c623066013b?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
                  alt="random"
                />
              </div>
              <div className="eventInfo">
                <div className="eventDate">
                  Jan <br /> <span>08</span>
                </div>
                <div className="eventsDetails">
                  <div className="eventName">Sports Event</div>
                  <div className="eventLoc">
                    <LocationOn className="eventLoc_icon" />
                    <p>Dhaka,Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="eventListItemList">
              <div className="eventPic">
                <img
                  src="https://images.unsplash.com/photo-1531956531700-dc0ee0f1f9a5?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
                  alt="random"
                />
              </div>
              <div className="eventInfo">
                <div className="eventDate">
                  Apr <br /> <span>19</span>
                </div>
                <div className="eventsDetails">
                  <div className="eventName">Birthday Party</div>
                  <div className="eventLoc">
                    <LocationOn className="eventLoc_icon" />
                    <p>Dhaka,Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="eventListItemList">
              <div className="eventPic">
                <img
                  src="https://images.unsplash.com/photo-1531150436398-cfc45278ec51?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
                  alt="random"
                />
              </div>
              <div className="eventInfo">
                <div className="eventDate">
                  Sep <br /> <span>10</span>
                </div>
                <div className="eventsDetails">
                  <div className="eventName">Fireworks</div>
                  <div className="eventLoc">
                    <LocationOn className="eventLoc_icon" />
                    <p>Dhaka,Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="eventListItemList">
              <div className="eventPic">
                <img
                  src="https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
                  alt="random"
                />
              </div>
              <div className="eventInfo">
                <div className="eventDate">
                  Jun <br /> <span>27</span>
                </div>
                <div className="eventsDetails">
                  <div className="eventName">Learn Javascript</div>
                  <div className="eventLoc">
                    <LocationOn className="eventLoc_icon" />
                    <p>Dhaka,Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Events;
