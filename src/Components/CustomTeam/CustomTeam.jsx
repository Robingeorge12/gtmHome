import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./CustomTeam.css"

function CustomTeam({teambtn,onChange,setTeambtn}) {
  return (
    <div className="customteam-container" onMouseLeave={() => setTeambtn(false)}>
    <div className="customteam-container-main">
      <Link className="customteam-container-main-link1">
        <div
          className="customteam-container-main-text1"
       
        >
         Source Code
        </div>
      </Link>
      <hr className="customteam-container-main-hr" />

      <Link className="customteam-container-main-link1">
        <div className="customteam-container-main-text1">Sell OSS Plans</div>
      </Link>
      <hr className="customteam-container-main-hr" />

      <Link className="customteam-container-main-link1">
        <div className="customteam-container-main-text1">Sell IoT Codes</div>
      </Link>
      <hr className="customteam-container-main-hr" />

      <Link className="customteam-container-main-link1">
        <div className="customteam-container-main-text1">Sell IoT Hardware</div>
      </Link>
      {/* <hr className='customteam-container-main-hr' /> */}
    </div>
  </div>
  )
}

export default CustomTeam