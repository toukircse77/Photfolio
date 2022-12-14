import React from 'react';
import './Hero.css'
import myImg from '../../../img/toukir.JPG'
import Navagation from './../Navagation/Navagation';
import { Typewriter } from 'react-simple-typewriter'
import Particles from "react-tsparticles";
const Hero = () => {
  const particlesInit = (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
  };
  return (
    <div id="hero">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{

          fpsLimit: 60,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              bubble: {
                distance: 400,
                duration: 2,
                opacity: 0.8,
                size: 40,
              },
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#fff",
            },
            links: {
              color: "#fff",
              distance: 150,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            collisions: {
              enable: true,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: .5,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                value_area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      {/* <Particles /> */}
      <div className="container">
        <Navagation></Navagation>
        <div className="row">
          <div className="col-md-4 img-fluid d-sm-block d-none" >
            <img className="img-fluid profilePic" src={myImg} alt="" data-aos="fade-up"
              data-aos-duration="500" />
          </div>
          <div className="col-md-8 text-white hero-details" data-aos="fade-up"
            data-aos-duration="500">
            <p className="personal-profile__name">Md Toukir Ahmed</p>
            <p className="personal-profile__work">I'm <span style={{ fontWeight: 'bold' }}>
              {/* Style will be inherited from the parent element */}
              <Typewriter
                words={['A MERN Stack Web Developer ???', 'Fronted-end Developer !', 'A Self Believer ??????']}
                loop={5}
                cursor
                cursorStyle='_'
                typeSpeed={50}
                deleteSpeed={20}
                delaySpeed={1000}
              />
            </span></p>
            <div className="personal-profile__contacts">
              <dl className="contact-list contact-list__opacity-titles">
                <dt>Age:</dt>
                <dd>23</dd>
                <dt>Phone:</dt>
                <dd><a href="tel:82344563333"> (+880)-1701092782</a></dd>
                <dt>Email:</dt>
                <dd><a href="mailto:toukircse777@gmail.com">toukircse777@gmail.com</a></dd>
                <dt>Address:</dt>
                <dd>Bogura, Bangladesh</dd>
              </dl>
            </div>
            <div className="personal-profile__social">
              <a href="https://github.com/toukircse77" target="_blank"><i className="fa fa-github"></i></a>
              <a href="https://www.linkedin.com/in/toukircse777/" target="_blank"><i className="fa fa-linkedin-square"></i></a>
              <a href="https://www.facebook.com/profile.php?id=100029985392696" target="_blank"><i className="fa fa-facebook-square"></i></a>
              <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;