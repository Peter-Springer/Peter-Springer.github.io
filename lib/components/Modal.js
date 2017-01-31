import React from 'react';
import { Modal, Button } from 'react-bootstrap';

class MySmallModal extends React.Component {
  render() {
    return (
      <Modal {...this.props} bsSize="small" aria-labelledby="contained-modal-title-sm">
        <Modal.Header>
          <Modal.Title id="contained-modal-title-sm">Your message has been sent!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>I will respond as soon as possible.</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
};

export default MySmallModal
