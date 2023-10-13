import ReactPlayer from 'react-player';
import React, { useRef } from 'react';
import "./Login.css"
import { useNavigate } from 'react-router-dom';
const VIDEO_PATH = 'https://cdn.dribbble.com/users/2146089/screenshots/17408454/media/310c0a981a483b373dba93994b660e3f.mp4';

function Login() {

  const navigate = useNavigate()
  const playerRef = useRef(null);

  const handleSign = ()=>{
    navigate("/signup")
  }

  return (
    <div className="log-container">
    <div className="log-container-box">
      <div className="log-container-box-col1">
        <div className="log-container-box-col1-div1">
          <p className="log-container-box-col1-div1-ptage">
            Not have an account? SignUp First
          </p>
          <button
            onClick={handleSign}
            className="log-container-box-col1-div1-log"
          >
            SignUp
          </button>
        </div>

        <hr className="log-container-box-col1-hr" />

        {/* <div className="log-container-box-col1-name">

          <input
            type="text"
            placeholder="User Name"
            className="log-container-box-col1-name-ip1"
          />
        </div> */}
        <div className="log-container-box-col1-email">
          <input
            type="text"
            placeholder="Email ID"
            className="log-container-box-col1-name-ip1"
          />
        </div>
        <div className="log-container-box-col1-pass">
          <input
            type="text"
            placeholder="PassWord"
            className="log-container-box-col1-name-ip1"
          />
        </div>

        <div className="log-container-box-col1-check">
          <input type="checkbox" />
          <p className="log-container-box-col1-check-ptag">
            Subscribe to our newsletters and stay updated on latest items on
            GTM
          </p>
        </div>

        <div className="log-container-box-col1-sub">
          <button className="log-container-box-col1-sub-btn">
            Submit
          </button>
        </div>
        {/* display:inline;
word-wrap: break-word; */}
        <div className="log-container-box-col1-policy">
          <p
            style={{
              display: "inline",
              wordWrap: "break-word",
              float: "left",
              fontSize: "16px",
              color:"white"
            }}
          >
            <p style={{ display: "inline", wordWrap: "break-word",color:"white" }}>
              {" "}
              By clicking Create Account you agree to our terms of service
              including our
            </p>
            <p
              style={{
                display: "inline",
                wordWrap: "break-word",
                color: "green",
                marginLeft: "4px",
                marginInlineStart: "4px",

              }}
            >
              {" "}
              Privacy Policy
            </p>
            <p style={{ display: "inline", wordWrap: "break-word",color:"white" }}> and</p>
            <p
              style={{
                display: "inline",
                wordWrap: "break-word",
                color: "green",
                marginLeft: "4px",
                marginInlineStart: "4px",
                
              }}
            >
              Cookie Policy.
            </p>
          </p>
        </div>
      </div>
      <div className="log-container-box-col2">
        <div className="log-container-box-col2-box1">
          <img
            className="log-container-box-col2-logo"
            src="https://media.licdn.com/dms/image/D4D03AQHThaoO-7HMOQ/profile-displayphoto-shrink_800_800/0/1679162919449?e=2147483647&v=beta&t=ihOdWqPZxEGUuomB_QwKWPTMuBI6azmLSVNPqlW9HLU"
            alt=""
          />
          <p className="log-container-box-col2-head"> GTM </p>
        </div>
        <div >
          
        </div>
        
        <div className="log-container-box-col2-video">

        <ReactPlayer className="log-container-div2-video-link" autoplay={true} ref={playerRef} url={VIDEO_PATH} controls={true} />
        </div>

<p className="log-container-box-col2-p1">Write Articles - Post your tech articles to grow your fan base</p>
<p className="log-container-box-col2-p2">Global network - Expand your Network overseas and Increase your Standing in the Market</p>

      </div>
    </div>
  </div>
  )
}

export default Login