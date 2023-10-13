import React from "react";
import "./SectionTwo.css";

function SectionTwo() {
  return (
    <div className="sectionTwo-container">
      <p className="sectionTwo-container-heading">Online Learning Software</p>

      <div className="sectionTwo-container-div1">
        <div className="sectionTwo-container-div1-box1">
            <p className="sectionTwo-container-div1-box1-ptag">
                BUILD AN ONLINE STORE EASILY AND SELL SOFTWARE DIRECTLY TO CLIENTS AROUND THE WORLD. OPTIMIZE IT AND IMPROVE CONVERSATION RATES WITH POWERFUL MARKETING TOOLS.
            </p>
        </div>
        <div className="sectionTwo-container-div1-box2">
            <img className="sectionTwo-container-div1-box2-img" src="https://www.ft.com/__origami/service/image/v2/images/raw/ftcms%3A347ece48-0f69-11e9-a3aa-118c761d2745?source=ig" alt="" />
        </div>
      </div>
      <div className="sectionTwo-container-div2">
        <p className="sectionTwo-container-div2-ptag" >Whatever their location and whichever device they use, you can sell your software to them. Zyro will make sure your software products shine and your sales grow.</p>
      </div>
    </div>
  );
}

export default SectionTwo;
