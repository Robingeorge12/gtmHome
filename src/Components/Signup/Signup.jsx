import React from "react";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();
  const handleLog = () => {
    navigate("/log");
  };

  return (
    <div className="signup-container">
      <div className="signup-container-box">
        <div className="signup-container-box-col1">
          <div className="signup-container-box-col1-div1">
            <p className="signup-container-box-col1-div1-ptage">
              Already have an account?
            </p>
            <button
              onClick={handleLog}
              className="signup-container-box-col1-div1-log"
            >
              Login
            </button>
          </div>

          <hr className="signup-container-box-col1-hr" />

          <div className="signup-container-box-col1-name">
            {/* <label className='signup-container-box-col1-name-label'>User Name</label> */}
            <input
              type="text"
              placeholder="User Name"
              className="signup-container-box-col1-name-ip1"
            />
          </div>
          <div className="signup-container-box-col1-email">
            <input
              type="text"
              placeholder="Email ID"
              className="signup-container-box-col1-name-ip1"
            />
          </div>
          <div className="signup-container-box-col1-pass">
            <input
              type="text"
              placeholder="PassWord"
              className="signup-container-box-col1-name-ip1"
            />
          </div>

          <div className="signup-container-box-col1-check">
            <input type="checkbox" />
            <p className="signup-container-box-col1-check-ptag">
              Subscribe to our newsletters and stay updated on latest items on
              GTM
            </p>
          </div>

          <div className="signup-container-box-col1-sub">
            <button className="signup-container-box-col1-sub-btn">
              Submit
            </button>
          </div>
          {/* display:inline;
 word-wrap: break-word; */}
          <div className="signup-container-box-col1-policy">
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
        <div className="signup-container-box-col2">
          <div className="signup-container-box-col2-box1">
            <img
              className="signup-container-box-col2-logo"
              src="https://media.licdn.com/dms/image/D4D03AQHThaoO-7HMOQ/profile-displayphoto-shrink_800_800/0/1679162919449?e=2147483647&v=beta&t=ihOdWqPZxEGUuomB_QwKWPTMuBI6azmLSVNPqlW9HLU"
              alt=""
            />
            <p className="signup-container-box-col2-head"> GTM </p>
          </div>
          <div >
            
          </div>
          <img className="signup-container-box-col2-im1" src={"https://cdn.dribbble.com/users/8779526/screenshots/16963725/final-shot-5.png?resize=400x300&vertical=center"} alt="" />

<p className="signup-container-box-col2-p1">Write Articles - Post your tech articles to grow your fan base</p>
<p className="signup-container-box-col2-p2">Global network - Expand your Network overseas and Increase your Standing in the Market</p>

        </div>
      </div>
    </div>
  );
}

export default Signup;
