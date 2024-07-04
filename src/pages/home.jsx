import React from "react";
import Navbar from "../components/Navbar";
import Landing from "../components/landing";
import AboutMe from "../components/aboutme";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Qualification from "../components/qualification";
import Project from "../components/projects";

function Home() {
  return (
    <>
      <Navbar />
      <Landing />
      <AboutMe />
      <Qualification />
      <Project />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
