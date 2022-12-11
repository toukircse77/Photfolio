import React from 'react';
import './About.css'
import downloadResume from '../../../src/img/img_btn_icon.png'
import resume from '../../img/TOUKIR_AHMED.pdf'
const About = () => {
  return (
    <section id="about" className="container section">
      <div className="row">
        <div className="col-md-10" data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500">
          <h2 id="hello_header" className="section__title">Hi_</h2>
          <p className="section__description pe-lg-5">
            I am Toukir, a Junior <b>MERN</b> Stack Web developer.I have extensive knowledge of React.js, Express.js, Node.js, NoSQL databases. Combined with Responsive Design sense and problem-solving skills.I have always been passionate about web development, which led me to pursue a Diploma of Computer Science degree. I am constantly seeking out new technologies and staying up-to-date on trends in the industry.
          </p>
          <a href={resume} target="_blank" className="section_btn site-btn" data-aos="zoom-in"
            data-aos-easing="linear"
            data-aos-duration="500"><img src={downloadResume} alt="" />Download Resume</a>
        </div>
      </div>
    </section>
  );
};

export default About;