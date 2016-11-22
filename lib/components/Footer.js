import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <div id="contact">
        <a href="mailto:peterspringer829@gmail.com">
          <img className="footer-links" src="../../img/mail.svg"/>
        </a>
        <a href="https://github.com/Peter-Springer">
          <img className="footer-links" src="../../img/social-media.svg"/>
        </a>
        <a href="https://www.linkedin.com/in/peterspringer2016">
          <img className="footer-links" src="../../img/linked.svg"/>
        </a>
      </div>
    )
 }


}

export default Footer;
