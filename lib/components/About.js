import React from 'react';

class About extends React.Component {
  render() {
    return (
      <section id="about">
        <h1 className="about-name">Front-end</h1>
        <h1 className="about-name">Developer</h1>
        <h1 className="about-description">Currently located in Denver, CO 🏂</h1>
        <p className="about-resume"> Check out my resume
          <a className="body-links" href="https://resume.creddle.io/resume/91i1d3h8h5p"> HERE</a>
        </p>
      </section>
    )
  }
}

export default About;
