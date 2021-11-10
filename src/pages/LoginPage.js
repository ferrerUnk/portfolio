import React, { Component } from 'react'
import { Col, Container, InputGroup, FormControl, Button } from 'react-bootstrap'
import {Link} from 'react-router-dom'
import logo from '../assets/images/calLogo.png';
import Header from '../components/Header';
import {auth} from '../reducer/firebase';

import '../assets/styling/index.css'
class LoginPage extends Component {
  state = {
    // email: '',
    // password: '',
    email: 'adminvaccination@gmail.com',
    password: 'Password@123',
    icon: 'fa fa-eye-slash',
    inputType: 'password'
  };

  handelLogin = async() => {
    const {email,password} = this.state
    let login = await auth(email, password)
    console.log(login)
    if(email == '' || password == ''){
      alert('Please fill up all fields.')
    }else{
      if(login.response == 'success'){
        window.location.replace('/admin')
      }else{
        alert('Please make sure you are logging in correct credentials.')
      }
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
      <>
      {/* <Header /> */}
      <Container fluid className='vh-100 justify-content-center d-flex align-items-center w-35'>
        <Col className='login-container py-5'>
          <Col className='d-flex justify-content-center'>
            <img className='login-logo' src={logo}  alt='banner'/>
          </Col>
          <p className='text-center text-raleway text-30 pt-5'>Calasiao Vaccination Record Management System</p>
          <Col>
            <p>Username</p>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Enter username"
                aria-describedby="basic-addon1"
                onChange={(e)=> this.setState({email: e.target.value})}
              />
            </InputGroup>
          </Col>
          <Col>
          <p>Password</p>
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
          <Col className='justify-content-center align-items-center d-flex mt-4'>
            <Button className='w-75' variant="primary" block onClick={()=>this.handelLogin()}>
              Login
            </Button>
          </Col>
          {/* <Col>
          <p className='text-raleway'><span className='float-left'><Link to='/forgot'>Forgot Password?</Link></span><span className='float-right'><Link to='/register'>Register Account</Link></span></p>
          </Col> */}
        </Col>
      </Container>
      </>
    )
  }
}

export default(LoginPage);