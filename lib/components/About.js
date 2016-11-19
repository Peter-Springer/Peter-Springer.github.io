import React from 'react';

class About extends React.Component {
  render() {
    return (
      <section id="about">
        <h1 className="about-name">PETER SPRINGER</h1>
        <h1 className="about-description">Frontend Developer currently located in Denver, CO.</h1>
        <p className="about-resume"> Check out my resume
          <a href="https://resume.creddle.io/resume/91i1d3h8h5p"> HERE</a>
        </p>
      </section>
    )
  }
}

export default About;
