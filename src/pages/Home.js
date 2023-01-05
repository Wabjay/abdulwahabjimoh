import React, { useState, useEffect } from "react";
import Faq from "../components/Faq/Faq.js";
import { HeadProvider as Head } from "react-head";
import Content from "../components/Content/Content.js";
import { Link, useNavigate } from "react-router-dom";
import { TailSpin } from 'react-loader-spinner'
// import MetaTags from 'react-meta-tags';
import pdfFile from '../../src/Resume-Abdulwahab-Jimoh.pdf'


// import Form from "./Form";
const Home = () => {



  return (
    <div className="container">
      {/* <MetaTags>
            <title>Abdulwahab Jimoh</title>
            <meta name="description" content="Some description." />
            <meta property="og:title" content="Jimoh Abdulwahab" />
            <meta property="og:image" content="path/to/image.jpg" />
          </MetaTags> */}
      <Head title="Abdulwahab Jimoh" />
      <div className="banner" id="banner">
        <div className="banner_content">
          <div>
            <div>
            <p className="bold_text">Abdulwahab Jimoh is a Frontend Engineer specializing in React and Nextjs.</p>
            <p className="small_text">Helps companies build apps and websites using technology to help them scale and make more revenues </p>

          </div>
          <div className="banner_btns">
          <a href="https://www.github.com/wabjay">
            <button className="banner_btn black">
            VIEW MY GITHUB</button>
            </a>
            <a href={pdfFile} target="_blank" 
                    rel="noreferrer">
            <button className="banner_btn white">
            DOWNLOAD MY RESUME</button>
            </a>
          </div>
          </div>
        </div>
      </div>
      <Content />

    </div>
  );
};

export default Home;