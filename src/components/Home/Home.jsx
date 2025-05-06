import React from "react";
import BillerCarousel from "../BillerCarousel/BillerCarousel";
import Footer from "../Footer/Footer";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";

function Home() {
  return (
    <div>
      <BillerCarousel></BillerCarousel>
      <Featured></Featured>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
}

export default Home;
