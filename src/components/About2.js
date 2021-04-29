import React from "react";
import styled from "styled-components";
import Image2 from "../images/info2.jpg";

const About2 = () => {
  return (
    <Wrapper>
      <div className="left-side">
        <img src={Image2} alt="" />
      </div>
      <div className="right-side">
        <h3>Paradise Island</h3>
        <p>
          The Maldives are known as “the tropical paradise” for reasons such as
          its beauty. This tropical country has separated islands and islands
          are surrounded by its own lagoon. Each island has pure white sandy
          beaches. The sea covers 99% of the Maldives and it is where you can
          see beautiful fishes and corals
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  margin: 0 auto 0 auto;
  gap: 2rem;
  height: auto;
  background-color: #def3f6;
  padding: 4rem 8rem;
  overflow: hidden;

  @media screen and (max-width: 1064px) {
    grid-template-columns: repeat(1, 1fr);
  }

  .right-side {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;

    h3 {
      font-size: 2rem;
      margin-bottom: 2rem;
      color: #003366;

      @media screen and (max-width: 1200px) {
        font-size: 1.5rem;
      }

      @media screen and (max-width: 1064px) {
        font-size: 1.5rem;
        margin-bottom: 1.7rem;
      }
    }

    p {
      font-size: 1.4rem;
      margin-bottom: 2rem;
      color: #003366;
      padding: 10px 25px;

      @media screen and (max-width: 1200px) {
        font-size: 1.2rem;
        padding: 8px 16px;
      }

      @media screen and (max-width: 1064px) {
        font-size: 1.2rem;
        margin-bottom: 1.7rem;
      }
    }
  }
  .left-side {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    img {
      width: 880px;
      object-fit: cover;
      border-radius: 10px;
    }
    @media screen and (max-width: 1600px) {
      img {
        width: 600px;
        height: auto;
      }
    }
    @media screen and (max-width: 1200px) {
      img {
        width: 450px;
        height: auto;
      }
    }
    @media screen and (max-width: 1064px) {
      img {
        width: 750px;
        height: auto;
      }
    }
    @media screen and (max-width: 768px) {
      img {
        width: 600px;
        height: auto;
        margin: 0 auto;
      }
    }
    @media screen and (max-width: 620px) {
      img {
        width: 400px;
        height: auto;
        margin: 0 auto;
      }
    }
    @media screen and (max-width: 410px) {
      img {
        width: 250px;
        height: auto;
        margin: 0 auto;
      }
    }
  }
`;

export default About2;
