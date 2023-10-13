import React from "react";
import "./Feature.css";
import {ImHeadphones} from "react-icons/im"
import {SiMaterialdesignicons,SiVexxhost} from "react-icons/si"
import {BiSolidOffer} from "react-icons/bi"
import {GrHostMaintenance} from "react-icons/gr"


// const data = [
//     {
//         img:"",
//         name:"",
//         content:""
//     },
// ]
function Feature() {
  return (
    <div className="feature-container">

<div className="feature-container-head">Features</div>

      <div className="feature-container-grid">
        <div className="feature-container-item1">
            <div className="feature-container-item1-icondiv">
            <SiMaterialdesignicons className="feature-container-item1-img"/>
            </div>
            <p className="feature-container-item1-p">Template</p>
        </div>
        <div className="feature-container-item2">
            
        <div className="feature-container-item1-icondiv"> <ImHeadphones className="feature-container-item1-img"/></div>
            <p className="feature-container-item1-p">24*7 Support</p>
        </div>
        <div className="feature-container-item3">
        
        <div className="feature-container-item1-icondiv"><BiSolidOffer className="feature-container-item1-img"/></div>
            <p className="feature-container-item1-p">Offers</p>
        </div>
        <div className="feature-container-item4">
        <div className="feature-container-item1-icondiv"> <SiVexxhost className="feature-container-item1-img" /></div>
            <p className="feature-container-item1-p">Hosting</p>
        </div>
      </div>
    </div>
  );
}

export default Feature;
