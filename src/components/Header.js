import React, {Component} from 'react'
import { Container, Row, Col, Navbar, Nav, Image} from 'react-bootstrap';
import logo from '../assets/images/logo.png'

class index extends Component {
  state = {
    loggedIn: false
  }

  componentDidMount(){
    let ifLogin = localStorage.getItem('loggedIn')
    this.setState({loggedIn: ifLogin})
  }

  handleClick = () => {
    let user = localStorage.getItem('user')
    if(this.state.loggedIn){
      // localStorage.removeItem('loggedIn')
      if(user === 'user'){
        window.location.replace('/account')
      }else{
        window.location.replace('/admin')
      }
    }else{
      window.location.replace('/login')
    }
  }

  render() { 
    const {loggedIn}= this.state
    return ( 
      <Container fluid className='head-bg'>
        <Row className='m-0'>
          <Col className='px-0'>
            <Navbar id='menuIcon' className='mx-xl-5' expand='lg'>
              <Navbar.Brand href='/'>
                <Image className='logo' src={logo} />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls='basic-navbar-nav' />
              <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ml-auto mr-xl-4 mr-lg-3 mr-0'>
                  <Nav.Link className='headertext mr-3' href='/'>Home</Nav.Link>
                  <Nav.Link className='headertext mr-3' href='/blog'>Blog</Nav.Link>
                  <Nav.Link className='headertext mr-3' href='/contact'>Contact Us</Nav.Link>
                  <Navbar.Brand className='headertext mr-3' onClick={()=> this.handleClick()}>{loggedIn ? 'Account' : 'Login'}</Navbar.Brand>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
        </Row>
      </Container>
     );
  }
}
 
export default index;