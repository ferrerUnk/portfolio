import React, { Component } from 'react'
import { Col, Container, InputGroup, FormControl, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import '../assets/styling/index.css'
class LoginPage extends Component {
  state = {
    email: 'sample',
    password: 'password',
    icon: 'fa fa-eye-slash',
    inputType: 'password'
  };

  handelLogin = () => {
    const {email,password} = this.state
    if(email === 'user' && password === 'Password' ){
      alert('user logged in')
      localStorage.setItem('loggedIn', true)
      localStorage.setItem('user', 'user')
      window.location.replace('/account')
    }
    else if(email === 'admin' && password === 'adminPass'){
      alert('admin logged in')
      localStorage.setItem('loggedIn', true)
      localStorage.setItem('user', 'admin')
      window.location.replace('/admin')
    }else{
      alert('Enter valid credentials')
    }
  }

  handleShow = () => {
    this.setState({
      icon: this.state.icon === 'fa fa-eye' ? 'fa fa-eye-slash' : 'fa fa-eye',
      inputType: this.state.inputType === 'password' ? 'text' : 'password'
    })
  }

  render() {
    return (
      <Container fluid className='text-center'>
        <Container className='text-center bg pt-5'/>
        <br />
        <br />
        <Col className='login-container py-5'>
          <p className='text-raleway text-30 mt-5 pt-5'>Login to your account</p>
          <Col>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Enter username"
                aria-describedby="basic-addon1"
                onChange={(e)=> this.setState({email: e.target.value})}
              />
            </InputGroup>
          </Col>
          <Col>
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
          <Col>
            <Button variant="primary" block onClick={()=>this.handelLogin()}>
              Login
            </Button>
          </Col>
          <Col>
          <p className='text-raleway'><span className='float-left'><Link to='/forgot'>Forgot Password?</Link></span><span className='float-right'><Link to='/register'>Register Account</Link></span></p>
          </Col>
        </Col>
      </Container>
    )
  }
}

export default(LoginPage);