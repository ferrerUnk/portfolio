import React, { Component } from 'react'
import { Col, Container, InputGroup, FormControl, Button } from 'react-bootstrap'
import '../assets/styling/index.css'

class LoginPage extends Component {
  state = {
    email: 'sample',
    sent: false
  };

  handelReset = () => {
//    alert('Reset password')
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(String(this.state.email))){
      this.setState({sent: true})
      setTimeout(()=>{
        this.setState({sent: false})
      }, 3000);
    }else{
      alert('Invalid email address')
    }
  }

  render() {
      const {sent}= this.state
    return (
      <Container className='text-center '>
        <Container className='text-center bg'/>
        <Col className='forgot-container pt-5'>
          <p className='text-raleway text-30 mt-5 pt-5'>Reset your password</p>
          <p>Enter your registered email you wish to reset password.</p>
          <Col>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Enter your email address"
                aria-describedby="basic-addon1"
                onChange={(e)=> this.setState({email: e.target.value})}
              />
            </InputGroup>
          </Col>
          <Col>
            <Button variant="primary" block onClick={()=>this.handelReset()}>
              Send Email
            </Button>
          </Col>
          <p className={sent ? 'mt-3 color-red text-18' : 'd-none'}>Email has been sent to you email. Please check.</p>
        </Col>
      </Container>
    )
  }
}

export default(LoginPage);