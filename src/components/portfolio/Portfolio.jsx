import React from "react";
import booki from "../../assets/booki.JPG";
import ohmyfood from "../../assets/ohmyfood.JPG";
import lapanthere from "../../assets/lapanthere.JPG";
import kasa from "../../assets/kasa.JPG"
import pikante from "../../assets/backend-pikante.JPG"
import "./portfolio.css";


const data = [
  {
    id: 1,
    image: booki,
    title: 'Bookim - Frontend HTML et CSS',
    github: 'https://github.com/Manidoux41/booki_v5.git',
    demo: 'https://manidoux41.github.io/booki_v5/'
  },
  {
    id: 2,
    image: ohmyfood,
    title: 'Ohmyfood - un site utilisant SASS',
    github: 'https://github.com/Manidoux41/ohMyfood_v4.git',
    demo: 'https://manidoux41.github.io/ohMyfood_v4/'
  },
  {
    id: 3,
    image: lapanthere,
    title: 'La panthère - optimisation SEO dun site web',
    github: 'https://github.com/Manidoux41/la_panthere_v3.git',
    demo: 'https://la-panthere-v3.vercel.app/'
  },
  {
    id: 4,
    image: pikante,
    title: 'Pikante - Backend utilisant NodeJS et Express',
    // github: 'https://github.com/Manidoux41/backend-pikante-P6.git',
    demo: 'https://la-panthere-v3.vercel.app/'
  },
  {
    id: 5,
    image: kasa,
    title: 'Kasa - Application ReactJS',
    github: 'https://github.com/Manidoux41/kasa_v3.git',
    demo: 'https://kasa-v2.vercel.app/'
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Mes dernières réalisations</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className="portfolio__item-cta">
            <a
              href={github}
              className="btn"
              target="_blank"
            >
              Github
            </a>
            <a
              href={demo}
              className="btn btn-primary"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
            )
          })
        }
        
      </div>
    </section>
  );
};

export default Portfolio;
