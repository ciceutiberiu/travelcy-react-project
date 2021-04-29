import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import About2 from "../components/About2";
import Discover from "../components/Discover";
import Prices from "../components/Prices";
import Footer from "../components/Footer";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <Hero />
      <About />
      <About2 />
      <Discover />
      <Prices />
      <Footer />
    </>
  );
};

export default Home;
