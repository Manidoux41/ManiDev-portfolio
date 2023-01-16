import React from "react";
import "./about.css";
import Avatar from '../../assets/IMG_1644.JPEG';
import {FaAward} from 'react-icons/fa';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Quelques chiffres</h5>
      <h2>Qui suis-je ?</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Avatar} alt="avatar of me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward  className="about__icon"/>
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers  className="about__icon"/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary  className="about__icon"/>
              <h5>Projects</h5>
              <small>20+ completed</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam atque assumenda maxime soluta labore voluptate debitis dignissimos magnam facilis praesentium nam vel, rem voluptas ipsa nihil magni distinctio officiis quo?</p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
};

export default About;
