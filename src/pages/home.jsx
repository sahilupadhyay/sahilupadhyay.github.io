import React from "react";
import Navbar from "../components/Navbar";
import Landing from "../components/landing";
import AboutMe from "../components/aboutme";
import Contact from "../components/contact";
import Footer from "../components/footer";
import Qualification from "../components/qualification";

function Home() {
  return (
    <>
      <Navbar />
        <Landing />
        <AboutMe />
        <Qualification/>
        {/*<Projects />*/}
        <Contact />
        <Footer />
    </>
  );
}

export default Home;