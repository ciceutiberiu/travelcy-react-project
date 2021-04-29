import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from "react-icons/ai";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-container">
        <div className="footer-links-container">
          <Link to="/" className="footer-link">
            About us
          </Link>
          <Link to="signin" className="footer-link">
            Rooms and Villas
          </Link>
          <Link to="signin" className="footer-link">
            Experiences
          </Link>
          <Link to="signin" className="footer-link">
            Spa & Fitness
          </Link>
        </div>
        <div className="footer-social-container">
          <Link to="signin" className="footer-link">
            Contact
          </Link>
          <Link to="signin" className="footer-link">
            Terms of Service
          </Link>
          <Link to="signin" className="footer-link">
            Activities
          </Link>
          <Link to="signin" className="footer-link">
            FAQ
          </Link>
        </div>
        <div className="footer-social-media">
          <Link to="#" className="social-media-icon">
            <AiFillFacebook />
          </Link>
          <Link to="#" className="social-media-icon">
            <AiFillInstagram />
          </Link>
          <Link to="#" className="social-media-icon">
            <AiFillTwitterSquare />
          </Link>
        </div>
      </div>
      <h4>
        <i>Travelcy &copy; all rights reserved</i>
      </h4>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background: #003366;

  h4 {
    font-weight: 400;
    padding-bottom: 1rem;
    text-align: center;
    color: #fff;
    text-transform: italic;
  }

  .footer-container {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    width: 80vw;
    margin: 0 auto;
    padding: 50px 30px;

    @media screen and (max-width: 860px) {
      padding: 30px 15px;
      gap: 3rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      align-items: center;
      text-align: center;
    }
  }

  .footer-links-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .footer-link {
    color: #fff;
    cursor: pointer;
    text-decoration: none;
    padding: 8px 5px;
    font-size: 1.3rem;
    align-items: center;

    @media screen and (max-width: 860px) {
      padding: 30px 15px;
      font-size: 16px;
    }

    &:hover {
      color: #ff6600;
      transition: 0.4s ease;
    }
  }

  .footer-social-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .footer-social-media {
    display: flex;
    gap: 1.5rem;
    font-size: 1.8rem;

    @media screen and (max-width: 868px) {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto;
    }
  }

  .social-media-icon {
    color: #fff;

    &:hover {
      color: #ff6600;
      transition: 0.4s ease;
    }
  }
`;

export default Footer;
