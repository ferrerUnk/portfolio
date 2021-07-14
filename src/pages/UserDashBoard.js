import React, { Component } from 'react';
import {Container,Tab,Row,Col,Nav} from 'react-bootstrap'
import UserDetails from '../components/UserAccountDetails'
import CompletedTrans from '../components/UserCompletedTrans'
import PendingTrans from '../components/UserPendingTransaction'
import WishList from '../components/UserWishList'

class Index extends Component {
  state = { 
    tab: '',
    widthDisplay: 'd-none',
    withMobile: 400
   }

  handleNav = (tab) => {
    console.log(tab)
    this.setState({tab: tab})
    // window.location.search = `tab=${tab}`
    // parent.location.hash = `/${tabLocation}`
    // this.state.widthDisplay ? this.setState({widthDisplay: 'd-none'}) : ''
  }

  handleLogout = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('loggedIn')
    window.location.replace('/')
  }

  render() { 
    return ( 
      <Container fluid className='px-0 pt-0'>
      <Tab.Container defaultActiveKey='dashboard' data-test='test' className='mb-2 pt-1'>
        <Row className='mx-0'>
          <Col lg={2} xl={2} className='customerSidenavBg px-0'>
            <Container id='customerSidenavLinks' fluid className='px-0 py-5'>
              <br/>
              <br/>
              <Col>
                <span className='text-white'>USER ACCOUNT</span>
              </Col>
              <Nav variant="pills" className="flex-column py-2">
                <Nav.Item>
                  <Nav.Link eventKey='dashboard' id='dashboard' >
                    <span>Account Details</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='completed' id='completed' >
                    <span>Completed Transactions</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='pending' id='pending' >
                    <span>Pending Transactions</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='wish' id='wish'>
                    <span>Wish List</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link id='logout'>
                    <span onClick={()=>this.handleLogout()}>Logout</span>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Container>
          </Col>
          <Col lg={10} xl={10} className='py-5 mt-5 height-auto'>
            <Tab.Content>
              <Tab.Pane eventKey="dashboard">
                <UserDetails />
              </Tab.Pane>
              <Tab.Pane eventKey="completed">
                <CompletedTrans/>
              </Tab.Pane>
              <Tab.Pane eventKey="pending">
                <PendingTrans />
              </Tab.Pane>
              <Tab.Pane eventKey="wish">
                <WishList />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      </Container>
    );
  }
}
 
export default Index;