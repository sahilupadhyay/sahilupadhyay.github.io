import { useState } from "react";
import './navbar.style.scss';
import XMark from '../../images/icons/xmark-solid.svg'
import Staggeredbar from '../../images/icons/bars-staggered-solid.svg'
function Navbar() {
  const [hamburger, setHamburger] = useState(false);

  const hamburgerMenu = () => {
    setHamburger(!hamburger);
  };

  const pageUp = () => {
    window.scrollTo({ top: (0, 0), behavior: "smooth" });
  };

  return (
    <>
      <nav>
        <h3 onClick={pageUp} className="logo">
          Sahil Upadhyay
        </h3>

        <ul>
          <li>
            <a href="#home">Home</a>
          </li>

          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#qualification">Qualification</a>
          </li>

      {/*    <li>
            <a href="#projects">Projects</a>
          </li>*/}

          <li>
            <a href="#contact">Contact</a>
          </li>

          <li onClick={() => hamburgerMenu()}>
            <img className='mobile-menu' src={Staggeredbar} alt='menu' width='25px' height='25px'/>
          </li>
        </ul>
      </nav>

      {/* mobile nav */}
      <div className={`mobile-nav ${hamburger ? "open-menu" : "closed-menu"}`}>
        <span onClick={() => hamburgerMenu()}>
          <img src={XMark} alt='closemenu' width='25px' height='25px'/>
        </span>

        <ul>
          <li onClick={() => hamburgerMenu()}>
            <a href="#home">Home</a>
          </li>

          <li onClick={() => hamburgerMenu()}>
            <a href="#about">About</a>
          </li>

          <li onClick={() => hamburgerMenu()}>
            <a href="#qualification">Qualification</a>
          </li>

{/*
          <li onClick={() => hamburgerMenu()}>
            <a href="#projects">Projects</a>
          </li>
*/}

          <li onClick={() => hamburgerMenu()}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
