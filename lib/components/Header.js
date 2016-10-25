import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <div className="header-container">
        <h1 className="header">FRONT
          <span className="header-end">END</span>
          DEVELOPER</h1>
        <nav className="header-nav">
        <pre>ABOUT <span className='header-slash'>/</span> </pre>
        <pre>CODE <span className='header-slash'>/</span> </pre>
        <pre>CONTACT</pre>
        </nav>
      </div>
    )
 }

}

export default Header;
