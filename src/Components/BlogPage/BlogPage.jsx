import React, { useState } from "react";
import "./BlogPage.css";
import { Link } from "react-router-dom";

const data = [
  {
    img: "https://wpblog.zyro.com/cdn-cgi/image/w=768,q=85/wp-content/uploads/2022/05/Male-employee-holding-pacel.jpg",
    title: "Business ideas",
    head: "30 Best Items to Dropship in 2022",
    date: "May 30, 2022 By Matleena",
    author: "",
  },
  {
    img: "https://wpblog.zyro.com/cdn-cgi/image/w=768,q=85/wp-content/uploads/2022/04/person-holding-iphone-instagram-open.jpg",
    title: "Marketing",
    head: "13 Best Linktree Alternatives for Link in Bio in 2022",
    date: "April 28, 2022 By Matleena",
    author: "",
  },
  {
    img: "https://wpblog.zyro.com/cdn-cgi/image/w=768,q=85/wp-content/uploads/2022/04/woman-holding-credit-cards-indoors.jpg",
    title: "Marketing",
    head: "Build a Customer Acquisition Strategy (10 Examples)",
    date: "April 6, 2022 By Roua",
    author: "",
  },
  {
    img: "https://wpblog.zyro.com/cdn-cgi/image/w=768,q=85/wp-content/uploads/2022/03/blocks-spelling-about-red-background.jpg",
    title: "Inspiration",
    head: "18 Best ‘About Me’ Page Examples to Amaze",
    date: "May 21, 2022 By Don",
    author: "",
  },
  {
    img: "https://wpblog.zyro.com/cdn-cgi/image/w=768,q=85/wp-content/uploads/2022/03/W10_blogpost_Amanda_Campeanu.png",
    title: "Small business heroes",
    head: "How to start a photography business: Amanda Campeanu",
    date: "March 8, 2022 By Damien",
    author: "",
  },
  {
    img: "https://wpblog.zyro.com/cdn-cgi/image/w=768,q=85/wp-content/uploads/2022/03/colorful-shirts-on-clothing-racks-indoors.jpg",
    title: "Business ideas",
    head: "How to Start a Clothing Business in 2022",
    date: "June 16, 2023 By Whisky",
    author: "",
  },
  {
    img: "https://wpblog.zyro.com/cdn-cgi/image/w=768,q=85/wp-content/uploads/2020/12/word-of-mouth-marketing-friends-whisper-scaled.jpg",
    title: "Marketing",
    head: "Word Of Mouth Marketing Examples For 2022",
    date: "February 24, 2022 By Damien",
    author: "",
  },
  {
    img: "https://wpblog.zyro.com/cdn-cgi/image/w=768,q=85/wp-content/uploads/2022/05/zyro-blog-mockup.png",
    title: "Web essentials",
    head: "How to Start a Blog in 2022: 7 Easy Steps",
    date: "May 30, 2022 By Matleena",
    author: "",
  },
];

function BlogPage() {
  const [show, setShow] = useState();

  return (
    <div className="blogpage-container">
      <div className="blogpage-container-box1">

<div className="blogpage-container-box1-bloghead">

<div className="blogpage-container-box1-bloghead-column1">

<p className="blogpage-container-box1-bloghead-column1-p1">GTM blog</p>
<p className="blogpage-container-box1-bloghead-column1-p2">Create your website in minutes</p>
<p className="blogpage-container-box1-bloghead-column1-p3">Build a professional website, online store, or portfolio with Zyro – the easy no-code website builder.</p>
<button className="blogpage-container-box1-bloghead-column1-btn">GET STARTED</button>
<div>
  <p></p>
</div>

</div>
<div className="blogpage-container-box1-bloghead-column2">
{/* <p>Think about Need </p> */}

<img className="blogpage-container-box1-bloghead-column2-img" src={"https://zyro.com/cdn-cgi/image/w=589,q=95,f=auto/images/blog/blog-hero.png"} alt="" />

</div>

</div>
<div className="blogpage-container-box1-blogtitle-main">
<div className="blogpage-container-box1-blogtitle">
<Link className="blogpage-container-box1-blogtitle-link"><p className="blogpage-container-box1-blogtitle-ptag">Business ideas</p></Link>
<Link className="blogpage-container-box1-blogtitle-link"><p className="blogpage-container-box1-blogtitle-ptag">Design</p></Link>
<Link className="blogpage-container-box1-blogtitle-link"><p className="blogpage-container-box1-blogtitle-ptag">eCommerce blog</p></Link>
<Link className="blogpage-container-box1-blogtitle-link"><p className="blogpage-container-box1-blogtitle-ptag">Inspiration</p></Link>
<Link className="blogpage-container-box1-blogtitle-link"><p className="blogpage-container-box1-blogtitle-ptag">Marketing</p></Link>
<Link className="blogpage-container-box1-blogtitle-link"><p className="blogpage-container-box1-blogtitle-ptag">Small business heroes</p></Link>
<Link className="blogpage-container-box1-blogtitle-link"><p className="blogpage-container-box1-blogtitle-ptag">Small business tips</p></Link>
<Link className="blogpage-container-box1-blogtitle-link"><p className="blogpage-container-box1-blogtitle-ptag">Web essentials</p></Link>
<Link className="blogpage-container-box1-blogtitle-link"><p className="blogpage-container-box1-blogtitle-ptag">GTM insights</p></Link>
<Link className="blogpage-container-box1-blogtitle-link"><p className="blogpage-container-box1-blogtitle-ptag">GTM news</p></Link>
</div>

<div className="blogpage-container-box1-blogtitle-hr"></div>
</div>
      </div>

{/* {..................................................................................} */}
      <div className="blogpage-container-box2">
        {data?.map((el, i) => (
          <div className="blogpage-container-box2-gridcards" key={i}>
            <img
              className="blogpage-container-box2-gridcards-img"
              src={el.img}
              alt=""
            />
            <p className="blogpage-container-box2-gridcards-title"><Link className="blogpage-container-box2-gridcards-title-link">{el.title}</Link></p>
            <p className="blogpage-container-box2-gridcards-date">{el.date}</p>
            <p className="blogpage-container-box2-gridcards-head">{el.head}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
