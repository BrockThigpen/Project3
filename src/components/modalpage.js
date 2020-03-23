import React, { Component } from 'react';
import { MDBBtn, MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';
import draw from './app';
class ModalPage extends Component {
state = {
  modal13: false
}

toggle = nr => () => {
  let modalNumber = 'modal' + nr
  this.setState({
    [modalNumber]: !this.state[modalNumber]
  });
}

render() {
  return (
  <MDBContainer>
      <MDBBtn onClick={this.toggle(13)}> Play Game
      </MDBBtn>
      <MDBModal isOpen={this.state.modal13} toggle={this.toggle(13)}>
        <MDBModalHeader toggle={this.toggle(13)}>
          Dodge The Lightening
        </MDBModalHeader>
        <MDBModalBody>
        <canvas id='canvas' width='608' height='608' ref={draw}></canvas>
        </MDBModalBody>
        <MDBModalFooter>
          <MDBBtn color="secondary" onClick={this.toggle(13)}>
            Close
          </MDBBtn>
          <MDBBtn color="primary">Save changes</MDBBtn>
        </MDBModalFooter>
      </MDBModal>
    </MDBContainer>
    );
  }
}

export default ModalPage;