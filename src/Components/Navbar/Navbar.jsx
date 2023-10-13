import React, { useState } from "react";
import "./Navbar.css";
import { LiaHomeSolid } from "react-icons/lia";
import { SiFuturelearn } from "react-icons/si";
import { HiChevronDown } from "react-icons/hi";
import { AiFillCaretDown, AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegBell, FaRegHeart, FaRegUserCircle } from "react-icons/fa";
import CustomServiceMenu from "../CustomServiceMenu/CustomServiceMenu";
import CustomContact from "../CustomContact/CustomContact";
import CustomBlog from "../CustomBlog/CustomBlog";
import CustomTeam from "../CustomTeam/CustomTeam";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const navigate = useNavigate()
  const [showhover, setShowhover] = useState(false);
  const [showhovercolor, setShowhovercolor] = useState(false);

  const [showcontact, setShowcontact] = useState(false);
  const [showsign, setShowsign] = useState(false);
  const [showservice, setShowservice] = useState(false);
  const [showteam, setShowteam] = useState(false);
  const [showblog, setShowblog] = useState(false);


  const [servicebtn,setServicebtn] = useState(false)
  const [contactbtn,setContactbtn] = useState(false)
  const [blogbtn,setBlogbtn] = useState(false)
  const [teambtn,setTeambtn] = useState(false)

  const handleBlog = ()=>{

    navigate("/blogpage")
  }
  const handleHome = ()=>{
    navigate("/")
  }

const handleDropeService = (val)=>{

  setServicebtn(!servicebtn)
  // console.log(val)

}
const handleDropeTeam = (val)=>{

  setTeambtn(!teambtn)
}

const handleAbout = ()=>{
  navigate("/about")
}

const handleDropeContact = (val)=>{

}

  return (
    <div className="navbar-container">
      <div className="navbar-container-div1">
        <img
          className="navbar-container-div1-img-logo"
          src="https://media.licdn.com/dms/image/D4D03AQHThaoO-7HMOQ/profile-displayphoto-shrink_800_800/0/1679162919449?e=2147483647&v=beta&t=ihOdWqPZxEGUuomB_QwKWPTMuBI6azmLSVNPqlW9HLU"
          alt=""
        />
        {/* <LiaHomeSolid className="navbar-symbol-icon" /> */}
      </div>

      <div className="navbar-container-div2">
        <div className="navbar-container-div2-home">
          <p className="navbar-container-div2-ptag-home" onClick={handleHome}>Home</p>
        </div>
        <div className="navbar-container-div2-about" onClick={handleAbout}>
          <p className="navbar-container-div2-ptag-about">About</p>
        </div>
        <div
          className="navbar-container-div2-contact"
          onMouseEnter={() => setShowcontact(true)}
          onMouseLeave={() => setShowcontact(false)}
          onClick={()=>setContactbtn(!contactbtn)}
        >
          <div className="navbar-container-div2-contact-box1">
            <p className="navbar-container-div2-ptag-contact">Contact Us</p>
            <HiChevronDown className="navbar-service-icon" />
          </div>
          {showcontact && (
            <div className="navbar-container-div2-contct-line"></div>
          )}
{ contactbtn && <div> <CustomContact onChange={handleDropeContact} setContactbtn={setContactbtn}  contactbtn={contactbtn} /> </div>}

        </div>
        <div
          className="navbar-container-div2-service"
          onMouseEnter={() => setShowservice(true)}
          onMouseLeave={() => setShowservice(false)}
          onClick={()=>setServicebtn(!servicebtn)}
        >
          <div className="navbar-container-div2-contact-box1" >
            <p className="navbar-container-div2-ptag-service">Service</p>
            <HiChevronDown className="navbar-service-icon" />
          </div>
          {showservice && (
            <div className="navbar-container-div2-service-line"></div>
          )}
        </div>
        { servicebtn && <CustomServiceMenu onChange={handleDropeService} setServicebtn={setServicebtn}  servicebtn={servicebtn} /> }
      
        <div
          className="navbar-container-div2-team"
          onMouseEnter={() => setShowteam(true)}
          onMouseLeave={() => setShowteam(false)}
          onClick={()=>setTeambtn(!teambtn)}
        >
          <div className="navbar-container-div2-contact-box1">
            <p className="navbar-container-div2-ptag-team">Teams</p>
            <HiChevronDown className="navbar-service-icon" />
          </div>
          { showteam &&<div className="navbar-container-div2-team-line"></div>}
          {teambtn && <div> <CustomTeam  onChange={handleDropeTeam} setTeambtn={setTeambtn}  teambtn={teambtn} /></div> }
        </div>

        <div
          className="navbar-container-div2-log"
          onMouseEnter={() => setShowblog(true)}
          onMouseLeave={() => setShowblog(false)}
          onClick={()=>setBlogbtn(!blogbtn)}
        >
          <div className="navbar-container-div2-contact-box1">
            <p className="navbar-container-div2-ptag-log" onClick={handleBlog}>Blogs</p>
            {/* <HiChevronDown className="navbar-service-icon" /> */}
          </div>
          {showblog && <div className="navbar-container-div2-blog-line"></div>}
          {/* {blogbtn && <div> <CustomBlog /></div> } */}
        </div>


        <div className="navbar-container-div2-sign">
          <div
            className="navbar-container-div2-contact-box1"
            onMouseEnter={() => setShowsign(true)}
            onMouseLeave={() => setShowsign(false)}
            onClick={()=>navigate("/signup")}
          >
            {showsign && <div className="navbar-container-div2-sign-dot"></div>}
            <p className="navbar-container-div2-ptag-sign">Login</p>
          </div>
          {<div></div>}
        </div>

        <div className="navbar-container-div2-menu">Menu </div>
      </div>
      <div className="navbar-container-div3">
        <img
          className="navbar-container-div3-img"
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnO4Gbe_zOUld75wAOEA6YdJqw5pXed1-2weosIbFRC6IvD9KnmOF8adGJn6lapLFt4-M&usqp=CAU"
          }
          alt="profile"
        />
      </div>
    </div>
  );
}

export default Navbar;
