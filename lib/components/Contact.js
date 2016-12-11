import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <section id="contact">
        <h1 className='contact-header'>Contact</h1>
        <form action="https://formspree.io/peterspringer829@gmail.com"
              method="POST">
            <input type="text" name="_gotcha" hidden='true' />
            <input type="hidden" name="_next" value="http://localhost:8080/#contact" />
            <input placeholder='name' type="text" name="name"/>
            <input placeholder='email' type="email" name="_replyto"/>
            <textarea placeholder='message' type='text' name="message"></textarea>
            <input type="submit" value="Send"/>
        </form>
      </section>
    )
  }
}

export default Contact;
