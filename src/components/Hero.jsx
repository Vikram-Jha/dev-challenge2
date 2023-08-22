import React from 'react';

import './styles/Hero.css';
import { useNavigate } from 'react-router';

const Hero = ({ title }) => {
  const navigate = useNavigate();
  return (
    <section className="hero hero-slide-1">
      <div className="hero-container">
        <article className="hero-container__text-box">
          <h1>{title}</h1>
          <p>
            A clear mind and very cold beer! Come and discover the best beers from the asian world.
          </p>
          <button onClick={() => navigate("/products")}
            className="button-primary"
          >
            Purchase
          </button>
        </article>
      </div>
    </section>
  );
};

export default Hero;
