import React from "react";
import "./SearchProductInput.css";
import { FcSearch } from "react-icons/fc";
import { Typewriter, useTypewriter } from 'react-simple-typewriter'


function SearchProductInput() {
const [typeWritter] = useTypewriter({
    words:['Ecommerce Website Templates'],
    loop:{},
    cursor:true,
    // cursorStyle:'_',
    typeSpeed:100,
    deleteSpeed:80,
    delaySpeed:1000


})

const [typeWord] = useTypewriter({
    words:['Search what You want'],
    loop:{},
    cursor:true,
    typeSpeed:100,
    deleteSpeed:80,
    delaySpeed:1000


})

  return (
    <div className="searchip-container">
      <div className="searchip-container-div1">

    <div className="searchip-container-div1-type" >
   <p className="searchip-container-div1-type1"> {typeWritter}</p>

<p className="searchip-container-div1-type2"> {typeWord}</p>
    </div>



      </div>

      {/* {.....................................................} */}
      <div className="searchip-container-div2">
        <div className="searchip-container-div2-container">
          <FcSearch className="searchip-container-div2-container-icon" />
          {/* <div className="searchip-container-div2-container-icon"></div> */}
          <input
            type="text"
            placeholder="Search code here........"
            className="searchip-container-div2-ip"
          />
          <div className="searchip-container-div2-container-search">Search</div>
        </div>

<div className="searchip-container-div2-filtbox">
    <select name="" id="searchip-container-div2-filtbox-sel" >
        <option value="">Newest</option>
        <option value="">Recommended</option>
        <option value="">Zero Downloaded</option>
    </select>
</div>

      </div>
    </div>
  );
}

export default SearchProductInput;
