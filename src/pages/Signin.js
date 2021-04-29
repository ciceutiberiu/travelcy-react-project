import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <Wrapper>
      <form action="#" className="form-container">
        <h1>Sign in to your account</h1>
        <div className="form-field">
          <label htmlFor="for">Email</label>
          <input type="email" required />
        </div>
        <div className="form-field">
          <label htmlFor="for">Password</label>
          <input type="password" required />
        </div>
        <div className="buttons-container">
          <button type="submit">Continue</button>
          <Link to="#" className="back-btn">
            Forgot password?
          </Link>
          <Link to="/" className="back-btn">
            Back Home
          </Link>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  height: 100vh;
  background: #000428;
  background: -webkit-linear-gradient(to right, #004e92, #000428);
  background: linear-gradient(to right, #004e92, #000428);
  overflow: hidden;

  .form-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #def3f6;
    border-radius: 10px;
    width: 500px;
    padding: 4rem 1rem;
    overflow: hidden;

    @media screen and (max-width: 768px) {
      width: 350px;
    }

    @media screen and (max-width: 320px) {
      width: 280px;
    }

    h1 {
      text-align: center;
      padding: 1rem 0 3rem 0;
      font-size: 2rem;
      color: #004e92;
    }

    .form-field {
      position: relative;
      border-bottom: 2px solid #000428;
      margin: 30px 30px;

      input {
        width: 100%;
        height: 2rem;
        outline: none;
        font-size: 1.2rem;
        border: none;
        background: #def3f6;
      }
    }
  }

  .buttons-container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;

    button {
      padding: 10px 10rem;
      font-size: 1.3rem;
      background: #ff6600;
      color: #fff;
      border: none;
      outline: 0;
      cursor: pointer;

      @media screen and (max-width: 768px) {
        padding: 10px 5rem;
      }
    }
    .back-btn {
      text-decoration: none;
      font-size: 1.1rem;
      color: #004e92;
    }
  }
`;

export default Signin;
