import React, { Component } from 'react';
import {Container,Tab,Row,Col,Nav} from 'react-bootstrap'
import UserList from '../components/AdminUserList'
import ItemList from '../components/AdminItemLIst'
import TransactionList from '../components/AdminTransactionList'
import CreateBlog from '../components/AdminCreateBlog'
import AddItem from '../components/AdminCreateItem'

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
      <Tab.Container defaultActiveKey='users' data-test='test' className='mb-2 pt-1'>
        <Row className='mx-0'>
          <Col lg={2} xl={2} className='customerSidenavBg px-0'>
            {
              <Container id='customerSidenavLinks' fluid className='px-0 py-5'>
              <br/>
              <br/>
              <Col>
                <span className='text-white'>ADMIN ACCOUNT</span>
              </Col>
              <Nav variant="pills" className="flex-column py-2">
                <Nav.Item>
                  <Nav.Link eventKey='users' id='users' >
                    <span>User List</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='item' id='item' >
                    <span>Item List</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='add' id='add'>
                    <span>Add Item</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='trans' id='trans' >
                    <span>List of All Transactions</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item eventKey='blog' id='blog'>
                  <Nav.Link eventKey='blog' id='blog'>
                    <span>Create Blog</span>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link id='logout'>
                    <span onClick={()=>this.handleLogout()}>Logout</span>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </Container>}
          </Col>
          <Col lg={10} xl={10} className='py-5 mt-5 height-auto'>
            <Tab.Content>
              <Tab.Pane eventKey="users">
                <UserList />
              </Tab.Pane>
              <Tab.Pane eventKey="item">
                <ItemList />
              </Tab.Pane>
              <Tab.Pane eventKey="add">
                <AddItem />
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