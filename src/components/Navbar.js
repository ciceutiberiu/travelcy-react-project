import React, { useState, useEffect } from "react";
import { Link as LinkS } from "react-scroll";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaBars } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import "./navbar.css";

const Navbar = ({ toggle, isOpen }) => {
  const [navbar, setNavbar] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <nav className={navbar ? "navbar active" : "navbar"}>
      <Wrapper isOpen={isOpen}>
        <LinkS to="/" className="logo" onClick={toggleHome}>
          Travelcy
        </LinkS>
        <MobileIcon>
          <FaBars onClick={toggle} />
        </MobileIcon>
        <ul className="nav-menu">
          <LinkS
            to="about"
            smooth={true}
            duration={1500}
            offset={-80}
            className="nav-item"
            spy={true}
          >
            About
          </LinkS>
          <LinkS
            to="discover"
            smooth={true}
            duration={1500}
            className="nav-item"
            offset={-80}
            spy={true}
          >
            Discover
          </LinkS>
          <LinkS
            to="prices"
            smooth={true}
            duration={1500}
            offset={-80}
            className="nav-item"
            spy={true}
          >
            Prices
          </LinkS>
          <Link to="/signin" className="nav-item">
            Register
          </Link>
        </ul>
        <Link to="signin" className="btn">
          Sign In
        </Link>
      </Wrapper>
    </nav>
  );
};

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  padding: 0 24px;
  max-width: 1064px;
  z-index: 1;

  .logo {
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
  }

  .nav-menu {
    display: flex;
    align-items: center;
    color: #bfd7ed;
    text-align: center;
    margin-right: -23px;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .nav-item {
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    font-size: 1.3rem;
    color: #fff;

    &:hover {
      color: #ff6600;
      transition: all 0.4s ease;
    }

    &.active {
      border-bottom: 4px solid #ff6600;
    }
  }

  .btn {
    color: #fff;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 50%;
    margin-top: 20px;
    font-size: 1.3rem;
    background: #ff6600;
    border: none;
    padding: 10px 20px;
    border-radius: 50px;
    outline: none;
    cursor: pointer;

    &:hover {
      transition: all 0.4s ease;
      background: #fff;
      border: none;
      color: #ff6600;
    }

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
`;

const MobileIcon = styled.div`
  display: none;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: block;
    color: #fff;
    position: absolute;
    top: 45px;
    right: 40px;
    font-size: 1.8rem;
    transform: translate(-50%, -50%);
  }
`;

export default Navbar;
