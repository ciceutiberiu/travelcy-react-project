import React from "react";
import { Link as LinkS } from "react-scroll";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Sidebar = ({ toggle, isOpen }) => {
  return (
    <Wrapper isOpen={isOpen}>
      <ul className="sidebar-menu">
        <LinkS
          to="about"
          smooth={true}
          duration={1000}
          spy={true}
          offset={-80}
          className="sidebar-item"
          onClick={toggle}
        >
          About
        </LinkS>
        <LinkS
          to="discover"
          smooth={true}
          duration={1000}
          spy={true}
          offset={-80}
          className="sidebar-item"
          onClick={toggle}
        >
          Discover
        </LinkS>
        <LinkS
          to="prices"
          smooth={true}
          duration={1000}
          spy={true}
          offset={-80}
          className="sidebar-item"
          onClick={toggle}
        >
          Prices
        </LinkS>
      </ul>
      <Link to="signin" className="sidebar-btn">
        Sign In
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  position: fixed;
  width: 100%;
  height: 100%;
  background: #003366;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 999;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};

  .sidebar-menu {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 3.5rem;
  }

  .sidebar-item {
    margin: 2rem;
    text-decoration: none;
    text-transform: capitalize;
    color: #fff;
    font-size: 1.8rem;
    cursor: pointer;

    &:hover {
      color: #ff6600;
      transition: all 0.2s ease-in-out;
    }

    @media screen and (max-width: 480px) {
      font-size: 1.3rem;
    }
  }

  .sidebar-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    font-size: 1.5rem;
    color: #fff;
    background: #ff6600;
    border-radius: 50px;
    white-space: nowrap;
    padding: 16px 64px;
    outline: none;
    border: none;
    width: 20%;
    margin: 0 auto;

    @media screen and (max-width: 480px) {
      font-size: 1.3rem;
    }

    &:hover {
      background: #fff;
      color: #ff6600;
      transition: 0.4s ease;
    }
  }
`;

export default Sidebar;
