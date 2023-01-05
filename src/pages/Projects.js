import {useEffect, useState} from 'react';
import Head from "../components/Head/index.js";
import React from "react";
import { Link } from "react-router-dom";
// import MetaTags from 'react-meta-tags';
import { useParams } from "react-router-dom";
import Ayrem from "../images/ayrem.png"
import Ethco from "../images/Ethco.png"
import {datas} from "../components/Data.js"
import {data} from "../components/Data.js"




const Project = () => {
  // const[pageData, setPageData] = useState()
   const { id } = useParams();
   console.log(id)
  //  let project = datas.filter(data => data.id == id)
   let project = datas.filter(dat =>{
    if (dat.appName === id) return {dat}
   })
// console.log(project)

let newList = data.filter(dat =>{
  if (dat.appName != id) return {dat}
 })
 const shuffle = arr => [...arr].sort(() => Math.random() - 0.5);
 const other = shuffle(newList);
 console.log(other)
  return (


    <div className="projects">
   {project && project.map(data => (  
    <>
      {/* <MetaTags>
            <title>{data.appName}</title>
            <meta name="description" content="Some description." />
            <meta property="og:title" content="Abdulwahab Jimoh " />
            <meta property="og:image" content="path/to/image.jpg" />
          </MetaTags> */}
    <Head title={`${data.appName} | Abdulwahab`}/>
    <div className="banner">
        <div className="banner_content"
        style={{backgroundImage: data.Ban}}>
          <div>
          <p className='banner_top_text'>{data.appName} -</p>
            <p className="bold_text">{data.appBanner}</p>

          </div>
        </div>
      </div>
    <div className="project_content">

      <div className="project_top">
        <div className="project_left">   
        <div>
        <p className="left_title">{data.appName} App </p>
        <p className="text">{data.appTitle}</p>
        </div>
        <div>
        <p className="left_title">Link to App</p>
        <p className="text">{data.appLink}</p>
        </div>
        <div>
        <p className="left_title">Industry</p>
        <p className="text">{data.industry}</p>
        </div>
        <div>
        <p className="left_title">Language used</p>
        <p className="text">{data.language}</p>
        </div>

        </div>
        <div className="project_right">
          <div>
        <p className="right_title">The client</p>
        <p className="text">{data.client}</p>
          </div>
          <div>
        <p className="right_title">My role</p>
        <p className="text">{data.role}</p>
          </div>
        <a href={data.appLink} className="appLink">Visit {data.appName} website</a>

          
        </div>
      </div>
<div className="project_images">
  {data.images && data.images.map((image, index) => {

    return <div key={index}><img src={image} alt=""/></div>
  })}
</div>
    </div>
    </>
      ))}
    <div className="how">
      <div>
        <p className="bold_text">Other Projects</p>
        <div className="cards">
            {other && other.map(data => (
              <>
               <div className="card others">
        <Link to={data.appLink}>
            <img src={data.Ban} 
         alt=""   />
         <p className="card_text">
          <span className="card_title">{data.appName} -</span>{data.appBanner}</p>
          </Link>
            </div>
              </>
             )).filter((e,k) => k < 2)}
        </div>
    </div>
    </div>
    </div>
  
  );
};

export default Project;