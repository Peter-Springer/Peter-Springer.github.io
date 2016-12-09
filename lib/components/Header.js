import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <section className="header-container">
        <h1 className="header">PETER
          <span className="header-springer">SPRINGER</span>
        </h1>
        <nav className="header-nav">
        <pre><a href="#code">CODE </a>
          <span className='header-slash'>/</span>
        </pre>
        <pre>
          <a href="#about"> ABOUT </a><span className='header-slash'>/</span>
        </pre>
        <pre className="header-contact"><a href="#contact"> CONTACT </a>
          <span className='header-slash'>/ </span>
        </pre>
        <pre className="header-resume">
          <a href="https://resume.creddle.io/resume/91i1d3h8h5p">
           RESUME
          </a>
        </pre>
        </nav>
      </section>
    )
  }
}

export default Header;
