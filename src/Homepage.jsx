import React from "react";
import "./Homepage.css";
import Sidenav from "./Navigation/Sidenav";
import Timeline from "./Timeline/Timeline";

function Homepage() {
  return (
    <div className="homepage">
      <div className="homepage__navWraper">
        <Sidenav />
      </div>
      <div className="homepage__timeline">
        <Timeline />
      </div>
      <div>
        </div>
    </div>
  );
}

export default Homepage;