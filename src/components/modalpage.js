import React, { Component } from 'react';
import { ___gatsby } from "react-dom";
import { render } from "react-dom";
import { MDBBtn, MDBContainer, MDBModal, MDBModalBody } from 'mdbreact';
import '../css/main.css';
import AppContainer from '../containers/AppContainer';


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

      <MDBContainer >
        <MDBBtn onClick={this.toggle(13)}> Play Game
      </MDBBtn>
        <MDBModal isOpen={this.state.modal13} toggle={this.toggle(13)}>
          {/* <MDBModalHeader toggle={this.toggle(13)}>
          Dodge The Lightening
        </MDBModalHeader> */}
          <MDBModalBody style={{ id: 'root', background: 'white', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
            {render(<AppContainer />, document.getElementById('root'))};
        </MDBModalBody>
          <MDBBtn color="secondary" onClick={this.toggle(13)}>
            Close
          </MDBBtn>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default ModalPage;