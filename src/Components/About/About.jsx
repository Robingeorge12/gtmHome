import React, { useRef } from 'react';
import ReactPlayer from 'react-player';
import "./About.css"
const VIDEO_PATH = 'https://youtu.be/0BIaDVnYp2A';


function About() {
    const playerRef = useRef(null);
  return (
    <div className='about-container'>

<div className='about-container-div1'>

<p className='about-container-div1-p1'>GTM IT Services</p>
<p className='about-container-div1-text'>Buy, sell, and recycle software modules and set up businesses quickly with GTM IT services and Solutions.</p>
<p className='about-container-div1-textdesc'>Buy, sell, and recycle software modules and build your business quickly with GTM IT services and Solutions.
With a giant library of inspected fully-scalable enterprise-level software source code, you will be able to build your business or upgrade your features with time and cost efficiency.
You can also reuse your fully-developed enterprise-level source code and list it for sale with GTM’s Enterprise Solutions. Enterprise products (solutions) are high-quality products that can quickly complete service development on their own.
</p>
<button className='about-container-div1-btn'>Book Free Consultation</button>

</div>
<div  className='about-container-div2'>

<div className='about-container-div2-video'>

<ReactPlayer className="about-container-div2-video-link" ref={playerRef} url={VIDEO_PATH} controls={true} />

</div>

</div>

    </div>
  )
}

export default About