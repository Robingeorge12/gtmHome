import React, { Component } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import "./SectionOne.css";
import Typical from "react-typical";
// https://plus.unsplash.com/premium_photo-1668473365948-8a92c2d1fa78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80

var items = [
  {
    name: "https://cdn.shopify.com/s/files/1/0070/7032/files/jackson-hayes-UU77aJC-Wb0-HEADER.jpg?v=1581539409",
    description: "Probably the most random thing you have ever seen!",
  },
  {
    name: "https://plus.unsplash.com/premium_photo-1668473365948-8a92c2d1fa78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
    description: "WENB DEVELOP!",
  },
  {
    name: "https://www.pcworld.com/wp-content/uploads/2023/04/livelywallpaperhero.jpg?quality=50&strip=all",
    description: "Probably the most random thing you have ever seen!",
  },
];
var item = [
    {
des:"I am confi"
    },
]

function SectionOne() {
  return (
    <div className="sectionone-container">
      {/* <div className="sectionone-container-div">
        {item?.map((el, i) => (
         <div className="sectionone-container-div-head"  key={i}>
            <Typical
              className="carousel-div"
              steps={["", 400, `${el.des}`, 500]}
              loop={Infinity}
              wrapper="p"
            />
          </div>
        ))}
      </div> */}

      <Carousel>
        {items.map((item, i) => (
          <Paper className="carousel-div-paper" key={i}>
            <img className="sectionone-container-img" src={item.name} alt="" />

            {/* <div>    <Typical
                     className='carousel-div'
        steps={["",400,`${item. description}`,500]}
        loop={Infinity}
        wrapper="p"
      /></div> */}
            {/* <h1 className='carousel-div'> {item. description}</h1> */}
            <Button className="CheckButton">GET SOURCE CODE</Button>
          </Paper>
        ))}
      </Carousel>
      {/* 
<h1 className='carousel-div'> i amm</h1> */}
    </div>
  );
}

export default SectionOne;
