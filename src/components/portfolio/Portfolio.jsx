import React from "react";
import booki from "../../assets/booki.JPG";
import ohmyfood from "../../assets/ohmyfood.JPG";
import lapanthere from "../../assets/lapanthere.JPG";
import kasa from "../../assets/kasa.JPG"
import pikante from "../../assets/backend-pikante.JPG"
import "./portfolio.css";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Mes dernières réalisations</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={booki} alt="booki.com" />
          </div>
          <h3>Booki.com</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Manidoux41/booki_v5.git"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://manidoux41.github.io/booki_v5/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={ohmyfood} alt="booki.com" />
          </div>
          <h3>OhMyFood</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Manidoux41/ohMyfood_v4.git"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://manidoux41.github.io/ohMyfood_v4/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={lapanthere} alt="La panthere" />
          </div>
          <h3>La Panthère</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Manidoux41/la_panthere_v3.git"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://la-panthere-v3.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={pikante} alt="booki.com" />
          </div>
          <h3>Pikante</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Manidoux41/backend-pikante-P6.git"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            {/* <a
              href="https://manidoux41.github.io/booki_v5/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a> */}
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={kasa} alt="kasa" />
          </div>
          <h3>Kasa</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/Manidoux41/kasa_v3.git"
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://la-panthere-v3.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
