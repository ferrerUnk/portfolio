import React, { Component } from 'react';
import {Container,Tab,Row,Col,Nav} from 'react-bootstrap'
import UserList from '../components/AdminUserList'
import Barangay from '../components/Barangay';
import Staff from '../components/Staff';
import ItemList from '../components/AdminItemLIst';
import Vaccine from '../components/Vaccine';
import Report from '../components/Report';
import Patients from '../components/Patients';
import Vaccinated from '../components/Vaccinated';
import TransactionList from '../components/AdminTransactionList'
import CreateBlog from '../components/AdminCreateBlog'
import AddItem from '../components/AdminCreateItem'
import Icon, { FontAwesome, Fontisto } from 'react-web-vector-icons';

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
      <Tab.Container defaultActiveKey='staff' data-test='test' className='mb-2 pt-1'>
        <Row className='mx-0'>
          <Col lg={2} xl={2} className='customerSidenavBg px-0 no-print'>
            <Container id='customerSidenavLinks' fluid className='px-0 py-5'>
              <Col>
                <span className='text-white'>ADMIN ACCOUNT</span>
              </Col>
              <Nav variant="pills" className="flex-column py-2">
                <Nav.Item>
                  <Nav.Link eventKey='users' id='users' >
                    <Icon
                      name='dashboard'
                      font='FontAwesome'
                      color='white'
                      size={20}
                      style={{marginRight: 10}}
                    />
                    <span>Dashboard</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='patients' id='patients'>
                    <Icon
                      name='users'
                      font='FontAwesome'
                      color='white'
                      size={20}
                      style={{marginRight: 10}}
                    />
                    <span>Covid Patient</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='vaccinated' id='vaccinated'>
                    <Icon
                      name='user'
                      font='FontAwesome'
                      color='white'
                      size={20}
                      style={{marginRight: 10}}
                    />
                    <span>Vaccinated</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='brgy' id='brgy'>
                    <Icon
                      name='map-pin'
                      font='FontAwesome'
                      color='white'
                      size={20}
                      style={{marginRight: 10}}
                    />
                    <span>Barangay</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='staff' id='staff'>
                    <Icon
                      name='user-md'
                      font='FontAwesome'
                      color='white'
                      size={20}
                      style={{marginRight: 10}}
                    />
                    <span>Staff</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='vaccine' id='vaccine' >
                    <Icon
                      name='medkit'
                      font='FontAwesome'
                      color='white'
                      size={20}
                      style={{marginRight: 10}}
                    />
                    <span>Vaccine</span>
                  </Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                  <Nav.Link eventKey='activity' id='activity' >
                    <Icon
                      name='calendar'
                      font='FontAwesome'
                      color='white'
                      size={20}
                      style={{marginRight: 10}}
                    />
                    <span>Activity</span>
                  </Nav.Link>
                </Nav.Item> */}
                <Nav.Item>
                  <Nav.Link eventKey='report' id='report'>
                    <Icon
                      name='file'
                      font='FontAwesome'
                      color='white'
                      size={20}
                      style={{marginRight: 10}}
                    />
                    <span>Report</span>
                  </Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                  <Nav.Link eventKey='logs' id='logs'>
                    <Icon
                      name='rotate-left'
                      font='FontAwesome'
                      color='white'
                      size={20}
                      style={{marginRight: 10}}
                    />
                    <span>Logs</span>
                  </Nav.Link>
                </Nav.Item> */}
                {/* <Nav.Item>
                  <Nav.Link id='logout'>
                    <span onClick={()=>this.handleLogout()}>Logout</span>
                  </Nav.Link>
                </Nav.Item> */}
              </Nav>
            </Container>
          </Col>
          <Col lg={10} xl={10} className='px-0 h-auto overflow-auto'>
            <div className='pt-3 no-print' style={{background: 'white', height: 75}}>
              <Row className='justify-content-between px-5'>
                <div>
                  <Icon
                    name='bars'
                    font='FontAwesome'
                    color='black'
                    size={20}
                    style={{marginRight: 10}}
                  />
                </div>
                <div>
                  <Row>
                    <Icon
                      name='user'
                      font='FontAwesome'
                      color='black'
                      size={20}
                      style={{marginRight: 10}}
                    />
                    <p>Administrator</p>
                    <Icon
                      name='caret-down'
                      font='FontAwesome'
                      color='black'
                      size={20}
                      style={{marginRight: 10}}
                    />
                  </Row>
                </div>
              </Row>
            </div>
            <Tab.Content>
              <Tab.Pane eventKey="users">
                <UserList />
              </Tab.Pane>
              <Tab.Pane eventKey="patients">
                <Patients />
              </Tab.Pane>
              <Tab.Pane eventKey="staff">
                <Staff />
              </Tab.Pane>
              <Tab.Pane eventKey="vaccine">
                <Vaccine />
              </Tab.Pane>
              <Tab.Pane eventKey="vaccinated">
                <Vaccinated />
              </Tab.Pane>
              <Tab.Pane eventKey="brgy">
                <Barangay />
              </Tab.Pane>
              <Tab.Pane eventKey="report">
                <Report />
              </Tab.Pane>
              <Tab.Pane eventKey="trans">
                <TransactionList />
              </Tab.Pane>
              <Tab.Pane eventKey="blog">
                <CreateBlog />
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