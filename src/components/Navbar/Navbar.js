import Logo from "../../images/logo.png";
import "./Navbar.css"
import React, { useState, useEffect } from "react";
import Grid from "../../images/grid.png";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from "react-router-dom";
import ButtonMailto from "../ButtonMailto";


const Navbar = () => {

  const [matches, setMatches] = useState(
    window.matchMedia("(min-width: 1024px)").matches
  );
  useEffect(() => {
    window
      .matchMedia("(min-width: 1024px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  }, []);

  const [show, setShow] = useState(false);

  const linkClick = () => {
    show && setShow(false);
    console.log(show);
  };
  const imageClick = () => {
    show ? setShow(false) : setShow(true);
    console.log(show);
  };
  return (

    <div className="navbar" id="navbar">
      {(() => {
        if (matches) {
          return (
            <div className="navbar_content">

              <Link to="/"className="logo_text">Abdulwahab Jimoh</Link>

              <div className="nav_links">
            
                 <ul>
                      <li>
                      <HashLink smooth to="/#technologies">Technologies</HashLink>
                      </li>
                      <li>
                      <HashLink smooth to="/#projects">Projects</HashLink>
                      </li>
                      <li>
                        <HashLink smooth to="/#about">About</HashLink>
                      </li>
                      <li>
                        <HashLink smooth to="/#hire">Hire</HashLink>
                      </li>
                      <li>
                      <ButtonMailto label="omoniyi.success@gmail.com" mailto="mailto:omoniyi.success@gmail.com" />
                        </li>
                      {/* <li><Link to="/login"> Login</Link></li> */}
                    </ul>
                  
              </div>
            </div>
          );
        } else {
          return (
            <div className="navbar_content">

              <Link to="/" onClick={() => linkClick()} className="logo_text">Abdulwahab Jimoh</Link>


              <img
                src={Grid}
                className="dropdown"
                onClick={() => imageClick()}
                alt=""
              />
              <div className="nav_links" style={{ display: show && "block" }}>
                <ul className="mobile_ul">           
                      <li>
                      <HashLink smooth to="/#technologies" onClick={() => linkClick()}>Technologies</HashLink>
                      </li>
                      <li>                        
                      <HashLink smooth to="/#projects" onClick={() => linkClick()}>Projects</HashLink>
                      </li>
                      <li>
                      <HashLink smooth to="/#about" onClick={() => linkClick()}>About</HashLink>
                      </li>
                      <li>
                      <HashLink smooth to="/#hire" onClick={() => linkClick()}>Hire</HashLink>
                      </li>
                      <li>
                      <ButtonMailto label="omoniyi.success@gmail.com" mailto="mailto:omoniyi.success@gmail.com" onClick={() => linkClick()} />
                        </li>

                      {/* <li><Link to="/login" onClick={() => linkClick()}> Login</Link></li> */}
                  
                </ul>
              </div>
            </div>
          );
        }
      })()}
    </div>

    // }

  );
};

export default Navbar;
