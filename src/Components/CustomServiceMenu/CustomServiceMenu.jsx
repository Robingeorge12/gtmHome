import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "./CustomServiceMenu.css"
import {LuHelpingHand} from "react-icons/lu";
import {TfiWrite} from "react-icons/tfi"
import {SiWebmoney} from "react-icons/si"
import {TbBusinessplan} from "react-icons/tb"
import {FaCartPlus} from "react-icons/fa"

function CustomServiceMenu({onChange,servicebtn,setServicebtn}) {
    // const [showhover, setShowhover] = useState(false);
    // const [showhovercolor, setShowhovercolor] = useState(false);
    const navigate = useNavigate()

    const handleProduct = ()=>{
      console.log(servicebtn)
      onChange(!servicebtn)
      console.log(servicebtn)

    }
  
    return (
      <div className="customservice-container" onMouseLeave={() => setServicebtn(false)}>
        <div className="customservice-container-main">
          <Link className="customservice-container-main-link1">
            <div
              className="customservice-container-main-text1"
            >
              <LuHelpingHand style={{color:"red"}} />
             <p>Help Center</p>
            </div>
          </Link>
          <hr className="customservice-container-main-hr" />
  
          <Link className="customservice-container-main-link1">
            <div className="customservice-container-main-text1">
              <TfiWrite style={{color:"red"}} />
              <p> Blogs</p>
              </div>
          </Link>
          <hr className="customservice-container-main-hr" />
  
          <Link className="customservice-container-main-link1">
            <div className="customservice-container-main-text1">
              <SiWebmoney style={{color:"red"}} />
              <p>Client Websites</p>
            </div>
          </Link>
          <hr className="customservice-container-main-hr" />
  
          <Link className="customservice-container-main-link1">
            <div className="customservice-container-main-text1">
              <TbBusinessplan style={{color:"red"}}/>
              <p>Bussiness glossary</p>
            </div>
          </Link>
          <hr className='customservice-container-main-hr' />
          <Link to="/searchproduct" className="customservice-container-main-link1">
            <div className="customservice-container-main-text1" onClick={handleProduct}>
              <FaCartPlus style={{color:"red"}} />
            <p>eCommerce guide</p> 
              </div>
          </Link>
          <hr className='customservice-container-main-hr' />
        </div>
      </div>
    )
}

export default CustomServiceMenu