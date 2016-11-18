import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <h1 className="header">PETER
          <span className="header-springer">SPRINGER</span>
        </h1>
        <nav className="header-nav">
        <pre><a href="#parallax">CODE </a><span className='header-slash'>/</span></pre>
        <pre><a href="#about">ABOUT </a><span className='header-slash'>/</span></pre>
        <pre className="header-contact"><a href="#footer-container">CONTACT </a></pre>
        </nav>
      </div>
    )
 }

}

export default Header;
