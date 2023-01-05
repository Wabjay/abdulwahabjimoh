

import "./Footer.css"
import { Link, useLocation } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import React from "react";
import Logo from "../../images/logo.png"
import Facebook from "../../images/facebook.png"
import Twitter from "../../images/twitter.png"
import Instagram from "../../images/instagram.png"
const Footer = () => {
  const location = useLocation();
  return (
    <>
    {/* {!location.pathname.includes("/form") && ( */}
{!location.pathname.includes("/blogadmin") && !location.pathname.includes("/createpost") && !location.pathname.includes("/adminpost") && (
    <div className="footer">
        <div className="footer_top" id="hire">
          <div className="footer_top_content">
            <div>
            <p className="text">Let’s work together with your team on your next project</p>
            <p className="small_text">
            I am always looking for opportunities to work on projects that 
expands my skillets and bring the best in me  
            </p>
            <Link to='#'
            onClick={(e) => {
                window.location.href = "mailto:omoniyi.success@gmail.com";
            }} >
            <button className="btn orange_btn big_btn">
            LETS START WORKING TOGETHER</button>
            </Link>
          </div>
          </div>
        </div>
        
      <div>
        <div >
        <div className="footer_bottom">
        <Link to="/" className="logo_text">Abdulwahab Jimoh</Link>
             <p className="small_text">© copyright 2023</p> 
        </div>
        </div>
      </div>
    </div>
      )}
    {/* )} */}
    </>
  );
};

export default Footer;
