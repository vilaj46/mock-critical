import React from "react";

import "./BlogNews.css";

import blog1 from "../images/blog1.jpg";
import blog2 from "../images/blog2.jpg";
import blog3 from "../images/blog3.jpg";
import blog4 from "../images/blog4.jpg";
import blog5 from "../images/blog5.jpg";
import blog6 from "../images/blog6.jpg";

const BlogNews = () => {
  const titles = [
    "Oneway Odyssey",
    "Sled Zeppelin",
    "Faking the Moon Landing with Alex Wall",
    "Is it Organic? No it's better",
    "kaius & Sash ~ Kanagawa, Japan",
    "Crate Diggers ~ Critical Slide & Surfstitch",
  ];

  const randomTitle = (max) =>
    titles[Math.floor(Math.random() * Math.floor(max))];

  return (
    <section id="blog-news">
      <a href="/#">
        <h3>Blog News</h3>
      </a>
      <ul id="blog-news-list">
        <li>
          <a href="/#">
            <img src={blog1} alt="Blog Img" className="blog-img" />
            <p className="blog-title">{randomTitle(6)}</p>
          </a>
        </li>
        <li>
          <a href="/#">
            <img src={blog2} alt="Blog Img" className="blog-img" />
            <p className="blog-title">{randomTitle(6)}</p>
          </a>
        </li>
        <li>
          <a href="/#">
            <img src={blog3} alt="Blog Img" className="blog-img" />
            <p className="blog-title">{randomTitle(6)}</p>
          </a>
        </li>
        <li>
          <a href="/#">
            <img src={blog4} alt="Blog Img" className="blog-img" />
            <p className="blog-title">{randomTitle(6)}</p>
          </a>
        </li>
        <li>
          <a href="/#">
            <img src={blog5} alt="Blog Img" className="blog-img" />
            <p className="blog-title">{randomTitle(6)}</p>
          </a>
        </li>
        <li>
          <a href="/#">
            <img src={blog6} alt="Blog Img" className="blog-img" />
            <p className="blog-title">{randomTitle(6)}</p>
          </a>
        </li>
      </ul>
    </section>
  );
};

export default BlogNews;
