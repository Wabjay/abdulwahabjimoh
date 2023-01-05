
import React from "react";
import { data } from "../Data"
import Pics from "../../images/IMG_0554.jpg"
import "./Banner.css"
import "./Content.css"
import { Link } from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const Content = () => {


  return (
    <div className="container content">
      <div className="customer" id="technologies">
        <div>
          <p className="bold_text">Technologies i use</p>
          <div className="cards">
            <div className="card">
              <p className="small_text">This are some of the stacks i have worked with in my front-end development jobs</p>

            </div>
            <div className="card">
              <p className="state">HTML // CSS // JAVASCRIPT
                REACT JS // BOOSTRAP// NEXT JS
//SASS // EMAIL JS</p>
            </div>
          </div>

        </div>
      </div>

      <div className="how">
        <div>
          <p className="bold_text" id="projects">Selected Projects</p>
          <div className="cards">
            {data && data.map(data => (
              <>
                <div className="card others">
                  <Link to={data.appLink}>
                    <img src={data.Ban}
                      alt="" />
                    <p className="card_text">
                      <span className="card_title">{data.appName} -</span>{data.appBanner}</p>
                  </Link>
                </div>
              </>
            ))}

          </div>
        </div>
      </div>
      <div className="deliver">
        <div id="about">
          <LazyLoadImage src={Pics}
          // src={Door_step}
          
            alt=""
            className="doorstep"
            effect="blur"
          />
          <div className="promise">
            <p className="bold_text">
              Meet Jimoh wahab
            </p>
            <div className="desc">
              <p><span>Hello! My name is Jimoh Abdulwahab, I am a front-end developer based in Nigeria. I spend most of my time on Javascript and my main focus is React and Next-Js.</span>

                <span>In the past i worked on Ethco admin dashboard and landing pages as a frontend engineeer with react-next js and redux for state management.
                  Before Ethco, I developed the complete web app and admin dashboard of ayrem a digital platform that provides access to exchanging digital assets as a frontend developer.</span>

                <span>These days, I focus more on building web interfaces with reactjs, nextjs, Bootstrap and
                  TailwindCSS based on the project and the client's requirement.</span></p>
            </div>
          </div>
        </div>
        <div className='space'>
          <p className='title'>Find Abdulwahab on</p>
          <ul className='links'>
            <li><a href='https://www.linkedin.com/wabjay'>LINKEDIN</a></li>
            <li><a href='https://twitter.com/itz_wabjay'>TWITTER</a></li>
            <li><a href='https://github.com/Wabjay'>GITHUB</a></li>
            <li><a href='https://www.instagram.com/wabjay'>INSTAGRAM</a></li>
            <li><a href='mailto:omoniyi.success@gmail.com'>EMAIL</a></li>
          </ul>
        </div>
      </div>


    </div>
  );
};

export default Content;
