import React from "react";
import BillerCarousel from "../BillerCarousel/BillerCarousel";
import Footer from "../Footer/Footer";
import Featured from "../Featured/Featured";
import Testimonials from "../Testimonials/Testimonials";
import UpdateProfile from "../UpdateProfile/UpdateProfile";
import HowItWorks from "../HowItWorks/HowItWorks";

function Home() {
  return (
    <div>
      <BillerCarousel></BillerCarousel>
      <Featured></Featured>
      <HowItWorks></HowItWorks>
      <Testimonials></Testimonials>
      {/* <Footer></Footer> */}
    </div>
  );
}

export default Home;
