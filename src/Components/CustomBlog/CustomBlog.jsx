import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./CustomBlog.css"
// blog
function CustomBlog() {
  return (
    <div className="customblog-container">
    <div className="customblog-container-main">
      <Link className="customblog-container-main-link1">
        <div
          className="customblog-container-main-text1"
        //   onMouseEnter={() => setShowhovercolor(true)}
        //   onMouseLeave={()=>setShowhover(false)}
        >
         blog
        </div>
      </Link>
      <hr className="customblog-container-main-hr" />

      <Link className="customblog-container-main-link1">
        <div className="customblog-container-main-text1">Sell OSS Plans</div>
      </Link>
      <hr className="customblog-container-main-hr" />

      <Link className="customblog-container-main-link1">
        <div className="customblog-container-main-text1">Sell IoT Codes</div>
      </Link>
      <hr className="customblog-container-main-hr" />

      <Link className="customblog-container-main-link1">
        <div className="customblog-container-main-text1">Sell IoT Hardware</div>
      </Link>
      {/* <hr className='customblog-container-main-hr' /> */}
    </div>
  </div>
  )
}

export default CustomBlog