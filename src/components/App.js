import React, { useEffect } from "react";
import Unsplash, { toJson } from "unsplash-js";

import useLoaded from "../hooks/useLoaded";
import useImages from "../hooks/useImages";

import Header from "./Header";
import SlideShow from "./SlideShow";
import NewIn from "./NewIn";
import BlogNews from "./BlogNews";
import Footer from "./Footer";

import "./App.css";

const accessKey = "";
const secretKey = "";

const App = () => {
  const [images, setImages] = useImages();
  const [loaded, load] = useLoaded();

  // eslint-disable-next-line
  useEffect(() => {
    if (!loaded) {
      load();

      if (!localStorage.getItem("images")) {
        const unsplash = new Unsplash({
          applicationId: process.env.REACT_APP_UNSPLASH_ID || accessKey,
          secret: process.env.REACT_APP_UNSPLASH_SECRET || secretKey,
        });
        unsplash.photos
          .listPhotos(2, 15, "latest")
          .then(toJson)
          .then((json) => {
            const unsplashedImages = [
              json[0].urls.regular,
              json[1].urls.regular,
              json[2].urls.regular,
            ];
            setImages(unsplashedImages);
            localStorage.setItem("images", JSON.stringify(unsplashedImages));
          });
      } else {
        const unsplashedImages = JSON.parse(localStorage.getItem("images"));
        setImages(unsplashedImages);
      }
    }
  });

  return (
    <main>
      <Header />
      <SlideShow slideShowImages={images} />
      <NewIn />
      <BlogNews />
      <hr />
      <Footer />
    </main>
  );
};

export default App;
