import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import styled from "styled-components";
import data from "../data";

const Discover = () => {
  const [images, setImages] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = images.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, images]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => clearInterval(slider);
  }, [index]);

  return (
    <Wrapper id="discover">
      <div className="upperline"></div>
      <h1>Discover</h1>
      <div className="photo-section">
        {images.map((photo, imageIndex) => {
          const { id, image } = photo;
          let position = "next";
          if (imageIndex === index) {
            position = "active";
          }
          if (
            imageIndex === index - 1 ||
            (index === 0 && imageIndex === images.length - 1)
          ) {
            position = "last";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt="" className="place-img" />
            </article>
          );
        })}
        <button className="prev-btn" onClick={() => setIndex(index - 1)}>
          <FiChevronLeft />
        </button>
        <button className="next-btn" onClick={() => setIndex(index + 1)}>
          <FiChevronRight />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin: 0 auto;
  background: #def3f6;

  h1 {
    text-align: center;
    font-size: 2rem;
    padding: 2rem 0 0 0;
    color: #003366;
  }

  .upperline {
    height: 3px;
    background: #003366;
    max-width: 800px;
    margin: 0 auto;
  }

  .photo-section {
    margin: 0 auto;
    margin-top: 4rem;
    width: 70vw;
    height: 500px;
    text-align: center;
    position: relative;
    display: flex;
    overflow: hidden;
  }

  .place-img {
    width: 800px;
    height: 425px;
    object-fit: cover;
    box-shadow: 5px 5px 10px;

    @media screen and (max-width: 768px) {
      width: 400px;
      height: 425px;
      object-fit: cover;
    }
  }

  .prev-btn,
  .next-btn {
    position: absolute;
    top: 200px;
    transform: translateY(-50%);
    width: 2rem;
    height: 2rem;
    display: grid;
    place-items: center;
    border: none;
    color: #ff6600;
    background: #003366;
    cursor: pointer;
    opacity: 0.8;
    font-size: 1.5rem;
    transition: all 0.8s ease-in-out;
  }

  .prev-btn {
    left: 0;
  }
  .next-btn {
    right: 0;
  }

  article {
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: auto;
    opacity: 0;
    background: transparent;
    transition: all 0.6s ease-in-out;
  }

  article.active {
    opacity: 1;
    transform: translateX(0);
  }
  article.last {
    transform: translateX(-100%);
  }
  article.next {
    transform: translateX(100%);
  }
`;

export default Discover;
