
import React from "react";
// import Blog from "../../images/blog_img.png";
import { Link } from "react-router-dom";
import "./BlogCard.css"
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const BlogCard = ({pics, date, content, author, id}) => {
   console.log(id)
 return (

     <div className="blogCard">
        <LazyLoadImage src={pics} 
        alt="" 
        className="blogList_img"
        effect="blur"
        />
       <Link to={{pathname:`/blogpost/${id}`,
       state: {id: id}
       }}>
        <p className="date">{date}</p>
        <p className="blogTopic">{content}</p>
        <p className="author">{author}</p>
        </Link>
     </div>
  );
};

export default BlogCard;
