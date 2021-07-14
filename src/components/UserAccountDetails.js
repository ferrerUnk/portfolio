import React, { Component } from 'react'
import { Col, Container, InputGroup, FormControl } from 'react-bootstrap'
import '../assets/styling/index.css'

class Index extends Component {
  state = {
    icon: 'fa fa-eye-slash',
    inputType: 'password',
    name: 'Sample User',
    address: '#12 Baranggay Sample Town, Pangsainan',
    number: '09999999999',
    email: 'sample_email@gmail.com'
  };

  handleShow = () => {
    this.setState({
      icon: this.state.icon === 'fa fa-eye' ? 'fa fa-eye-slash' : 'fa fa-eye',
      inputType: this.state.inputType === 'password' ? 'text' : 'password'
    })
  }

  render() {
    const {name,address,number,email} = this.state
    return (
      <Container className=''>
        <Container className='bg'/>
        <Col className='register-container'>
          <p className='text-center text-270'><i class="fa fa-user-circle" aria-hidden="true"></i></p>
          <Col>
            <label htmlFor="basic-url">Complete Name</label>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Enter your complete name"
                value={name}
                onChange={(e)=>this.setState({name: e.target.value})}
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
                value={address}
                onChange={(e)=>this.setState({address: e.target.value})}
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
                value={number}
                onChange={(e)=>this.setState({number: e.target.value})}
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
                value={email}
                onChange={(e)=>this.setState({email: e.target.value})}
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
        </Col>
      </Container>
    )
  }
}

export default(Index);