import React from "react";
import About from "../../components/home/about";
import Header from "../../components/home/header";
import Images from "../../components/home/images";
import Business from "../../components/home/business";
import In from "../../components/home/Principles";
import Count from "../../components/home/counter";
import SimpleSlider from "../../components/home/Partner";
import Global from "../../components/home/Global";
import Slideee from "../../components/home/News"
import Footer from "../../components/home/footer";

function Homee() {
  return (
    <div>
      <Header />
      <About />
      <Images />
      <Business />
      <In />
      <Count />
      <SimpleSlider />
      <Global />
      <Slideee />
      <Footer />
    </div>
  );
}

export default Homee;
