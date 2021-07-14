import React, { Component } from 'react'
import { Col, Container, InputGroup, FormControl, Button } from 'react-bootstrap'
import '../assets/styling/index.css'

class RegisterPage extends Component {
  state = {
    icon: 'fa fa-eye-slash',
    inputType: 'password'
  };

  handleShow = () => {
    this.setState({
      icon: this.state.icon === 'fa fa-eye' ? 'fa fa-eye-slash' : 'fa fa-eye',
      inputType: this.state.inputType === 'password' ? 'text' : 'password'
    })
  }

  render() {
    return (
      <Container className='pt-5'>
        <Container className='bg'/>
        <Col className='register-container pt-5'>
          <p className='text-raleway text-30'>Create Your Account</p>
          <Col>
            <label htmlFor="basic-url">Complete Name</label>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Enter your complete name"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
          <Col>
            <label htmlFor="basic-url">Complete Address</label>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Enter your complete address"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
          <Col>
            <label htmlFor="basic-url">Contact Number</label>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Enter your contact number"
                aria-label="contact"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
          <Col>
            <label htmlFor="basic-url">Email Address</label>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Enter email"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
          <Col>
            <label htmlFor="basic-url">Password</label>
            <InputGroup className="mb-3">
              <FormControl
                type={this.state.inputType}
                placeholder="Enter your password"
                aria-describedby="basic-addon1"
                onChange={(e)=> this.setState({password: e.target.value})}
              />
              <InputGroup.Append>
                <InputGroup.Text id="basic-addon2">
                  <i onClick={()=> this.handleShow()} class={this.state.icon} aria-hidden="true"></i>
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Col>
          <Col md={{span: 6, offset: 3}} className='mb-5'>
            <Button variant="primary" block onClick={()=> alert('Under Development')}>
              Register
            </Button>
          </Col>
        </Col>
      </Container>
    )
  }
}

export default(RegisterPage);