import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./CustomContact.css"
import {PiPhoneCallFill} from "react-icons/pi";
import {AiTwotoneMail} from "react-icons/ai"
import {FaFacebookSquare} from "react-icons/fa"
import {AiFillVideoCamera} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"

function CustomContact({setContactbtn,contactbtn,onChange}) {
  return (
    <div className="customcontact-container" onMouseLeave={() =>setContactbtn(false)}>
    <div className="customcontact-container-main">
      <Link className="customcontact-container-main-link1">
        <div
          className="customcontact-container-main-text1"
        >
         <PiPhoneCallFill style={{color:'red'}} />
        <p>Phone</p>
        </div>
      </Link>
      <hr className="customcontact-container-main-hr" />

      <Link className="customcontact-container-main-link1">
        <div className="customcontact-container-main-text1">
        <AiTwotoneMail style={{color:'red'}} />
          <p>Email</p>
        </div>
      </Link>
      <hr className="customcontact-container-main-hr" />

      <Link className="customcontact-container-main-link1">
        <div className="customcontact-container-main-text1">
          
        <FaFacebookSquare style={{color:'red'}} />
        <p>Facebook</p>
        </div>
      </Link>
      <hr className="customcontact-container-main-hr" />

      <Link className="customcontact-container-main-link1">
        <div className="customcontact-container-main-text1">
        <AiFillVideoCamera style={{color:'red'}} />
        <p>Virtual Contact</p>
        </div>
      </Link>
      <hr className='customcontact-container-main-hr' />
      <Link className="customcontact-container-main-link1">
        <div className="customcontact-container-main-text1">
        <AiFillInstagram style={{color:'red'}} />
        <p>Instagram</p>
        </div>
      </Link>
      <hr className='customcontact-container-main-hr' />
    </div>
  </div>
  )
}

export default CustomContact