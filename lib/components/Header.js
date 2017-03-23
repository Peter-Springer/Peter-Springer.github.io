import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <section className="header-container">
        <h1 className="header">PETER
          <span className="header-springer">SPRINGER</span>
        </h1>
        <nav className="header-nav">
          <a className="header-links" href="#code">CODE </a>
          <span className='header-slash'>/</span>
          <a className="header-links" href="#contact"> CONTACT </a>
          <span className='header-slash'>/ </span>
          <a className="header-links header-resume" target="_blank" href="https://resume.creddle.io/resume/91i1d3h8h5p">
           RESUME
          </a>
        </nav>
      </section>
    )
  }
}

export default Header;
