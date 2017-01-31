import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import MySmallModal from './Modal';

class Contact extends React.Component {
  constructor(){
    super();
    this.state = {
      name: '',
      email: '',
      message: '',
      formMessage: true,
      smShow: false
    };
  }

  nameField(e) {
    this.setState({name: e.target.value});
  }

  emailField(e) {
    this.setState({email: e.target.value});
  }

  messageField(e) {
    this.setState({message: e.target.value});
  }

  enableSubmit() {
    if (this.state.name === '' ||
        this.state.email.indexOf('@') === -1 ||
        this.state.message === '') {
      return true;
    }
  }

  prevent(e) {
    e.preventDefault()
    axios.post('https://formspree.io/peterspringer829@gmail.com', {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message
    }).then(function () {
      document.getElementById("myForm").reset();
    })
  }

  //need message to let user know form was sent
  formMessage() {
    return this.setState({ formMessage: false });
  }

  render() {
    let smClose = () => this.setState({ smShow: false });
    return (
      <section id="contact">
        <h1 className='contact-header'>Contact me</h1>
        <form id='myForm' onSubmit={(e)=>this.prevent(e)}>
          <input type="text" name="_gotcha" hidden='true' />
          <input type="hidden" name="_next" value="https://peter-springer.github.io/#contact"/>
          <input onKeyUp={(e)=>this.nameField(e)} className='name'
          placeholder='name*' type="text" name="name"/>
          <input onKeyUp={(e)=>this.emailField(e)} className='email'
          placeholder='email*' type="email" name="_replyto"/>
          <textarea onKeyUp={(e)=>this.messageField(e)} className='message'
          placeholder='message*' type='text' name="message"></textarea>
          <Button
            bsStyle="primary"
            onClick={()=>this.setState({ smShow: true })}
            type="submit"
            disabled={this.enableSubmit()}
            >
            Submit
          </Button>
          <MySmallModal show={this.state.smShow} onHide={smClose} />
        </form>
      </section>
    )
  }
}

export default Contact;
