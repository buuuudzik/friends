import * as React from "react";
import "./AboutPage.css";
import TopBar from "../TopBar/TopBar";

const AboutPage = () => (
  <div className="about-container">
    <TopBar title={"About us"} />
    <div className="about">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, iste
      dolores dolor ipsum aperiam aliquid earum accusamus doloremque laborum
      fugiat quas minima placeat nam omnis corrupti facilis impedit natus
      quibusdam!
    </div>
  </div>
);

export default AboutPage;
