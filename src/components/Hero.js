import React from "react";
import Video from "../video/video.mp4";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight } from "react-icons/ai";

const Hero = () => {
  return (
    <Wrapper>
      <video
        src={Video}
        type="video/mp4"
        className="video"
        autoPlay
        loop
        muted
      ></video>
      <div className="hero-container">
        <h1>Paradise Island - Maldive Resort</h1>
        <h3>
          Sign up for a new account today and recieve $150 discount for your
          holiday in Maldives.
        </h3>
        <Link to="signin" className="hero-btn">
          Claim Now <AiOutlineArrowRight className="arrow" />
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  height: 100vh;

  .video {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    --o-object-fit: cover;
    object-fit: cover;
  }

  .hero-container {
    z-index: 99;
    max-width: 1164px;
    position: absolute;
    top: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px 24px;

    h1 {
      color: #003366;
      font-size: 2rem;
      margin-bottom: 2rem;
      font-weight: bold;
      text-align: center;

      @media screen and (max-width: 768px) {
        font-size: 1.5rem;
      }

      @media screen and (max-width: 468px) {
        font-size: 1.2rem;
      }
    }

    h3 {
      text-align: center;
      color: #003366;
      font-weight: bold;
      font-size: 1.5rem;

      @media screen and (max-width: 768px) {
        font-size: 1.2rem;

        @media screen and (max-width: 468px) {
          font-size: 1rem;
        }
      }
    }
    .hero-btn {
      text-align: center;
      text-decoration: none;
      color: #fff;
      font-size: 1.3rem;
      background-color: #ff6600;
      border-radius: 50px;
      padding: 10px 20px;
      margin-top: 2rem;

      &:hover {
        background: #fff;
        color: #ff6600;
        transition: all 0.4s ease;
      }

      @media screen and (max-width: 768px) {
        font-size: 1.1rem;
        padding: 8px 15px;
      }
    }
  }
`;

export default Hero;
