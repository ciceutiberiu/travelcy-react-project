import React from "react";
import styled from "styled-components";

const Prices = () => {
  return (
    <Wrapper id="prices">
      <div className="upperline"></div>
      <h1 className="title">Prices</h1>
      <div className="prices-container">
        <div className="single-price">
          <h1>Basic</h1>
          <div className="price">
            <h2>$1750</h2>
          </div>
          <div className="offers">
            <h4>Lorem ipsum dolor sit amet consectetur</h4>
            <h4>Lorem ipsum dolor sit amet consectetur</h4>
            <h4>Lorem ipsum dolor sit amet consectetur</h4>
            <h4>Lorem ipsum dolor sit amet consectetur</h4>
            <h4>Lorem ipsum dolor sit amet consectetur</h4>
          </div>
          <button className="price-btn">Select</button>
        </div>
        <div className="single-price">
          <h1>Standard</h1>
          <div className="price">
            <h2>$2200</h2>
          </div>
          <div className="offers">
            <h4>Lorem ipsum dolor sit amet consectetur</h4>
            <h4>Lorem ipsum dolor sit amet consectetur</h4>
            <h4>Lorem ipsum dolor sit amet consectetur</h4>
            <h4>Lorem ipsum dolor sit amet consectetur</h4>
            <h4>Lorem ipsum dolor sit amet consectetur</h4>
          </div>
          <button className="price-btn">Select</button>
        </div>
        <div className="single-price">
          <h1>Premium</h1>
          <div className="price">
            <h2>$2750</h2>
          </div>
          <div className="offers">
            <h4>Lorem ipsum dolor sit amet consectetur</h4>
            <h4>Lorem ipsum dolor sit amet consectetur</h4>
            <h4>Lorem ipsum dolor sit amet consectetur</h4>
            <h4>Lorem ipsum dolor sit amet consectetur</h4>
            <h4>Lorem ipsum dolor sit amet consectetur</h4>
          </div>
          <button className="price-btn">Select</button>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  background: #def3f6;
  margin: 0 auto;

  .title {
    text-align: center;
    font-size: 2rem;
    padding: 2rem 0 0 0;
    color: #003366;
    margin-bottom: 1rem;
  }

  .upperline {
    height: 3px;
    background: #003366;
    max-width: 800px;
    margin: 0 auto;
  }

  .prices-container {
    width: 80vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    height: 90vh;

    @media screen and (max-width: 868px) {
      display: grid;
      grid-template-columns: repeat(1fr);
      gap: 2rem;
      height: auto;
      place-items: center;
      align-items: center;
      margin: 0 auto;
      justify-content: center;
    }
  }

  .single-price {
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    flex-direction: column;
    align-items: center;
    padding: 30px 20px;
    border: 1px solid #003366;
    gap: 1.5rem;
    box-shadow: 0 20px 50px rgba(10, 20, 45, 0.7);
    text-align: center;
    background: #003366;
    color: #fff;

    @media screen and (max-width: 868px) {
      height: auto;
    }

    &:hover {
      transition: all 0.4s ease;
      background: #ff6600;
      border-radius: 10px;
      border: 1px solid #ff6600;
      transform: scale(1.1);

      @media screen and (max-width: 868px) {
        transform: scale(0.98);
      }

      .price-btn {
        background: #003366;
        color: #ff6600;
      }

      .price {
        border: 2.5px solid #003366;
      }
    }

    h1 {
      font-size: 1.5rem;
    }
  }

  .price {
    border-radius: 50%;
    border: 2.5px solid #ff6600;
    margin: 5% auto 0 auto;
    text-align: center;
    padding: 40px;
    font-size: 1.8rem;

    @media screen and (max-width: 868px) {
      font-size: 1rem;
      padding: 20px;
    }
  }

  .offers {
    margin-top: 1rem;
  }

  .offers h4 {
    margin-bottom: 1rem;
    font-size: 16px;

    @media screen and (max-widht: 868px) {
      font-size: 10px;
    }
  }

  .price-btn {
    cursor: pointer;
    padding: 15px 30px;
    font-size: 1.1rem;
    color: #003366;
    background: #ff6600;
    border: none;
    text-transform: uppercase;
    font-weight: bold;
    border-radius: 5px;
  }
`;

export default Prices;
