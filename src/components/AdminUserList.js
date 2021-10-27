import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator';
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';

const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total ml-3">
    Showing { from } to { to } of { size } entries
  </span>
)

const columns = [{
  dataField: 'id',
  text: 'ID',
  // sort: true,
  csvText: 'CSV ID'
}, {
  dataField: 'name',
  text: 'Name',
  // sort: true,
  csvText: 'CSV Name'
}, {
  dataField: 'email',
  text: 'Email',
  // sort: true,
  csvText: 'CSV Name'
}, {
  dataField: 'number',
  text: 'Contact Number',
  // sort: true,
  csvText: 'CSV Name'
}, {
  dataField: 'address',
  text: 'Address',
  // sort: true,
  csvText: 'CSV Date'
}];

const transactionData = [
  { id: 1, name: 'Sample User 1', email: 'sample@gmail.com', number: '09123456789', address: 'Sample Manaoag, Pangasinan' },
  { id: 2, name: 'Sample User 2', email: 'user@gmail.com', number: '09124656689', address: 'Sample Dau, Pampanga' },
  { id: 3, name: 'Sample User 3', email: 'test@gmail.com', number: '09773636467', address: 'Sample Subic, Zambales' },
  { id: 4, name: 'Sample User 4', email: 'email@gmail.com', number: '09817364646', address: 'Sample Camiling, Tarlac' },
  { id: 5, name: 'Sample User 5', email: 'newUser@gmail.com', number: '09132747584', address: 'Sample Dagupan, Pangasinan' }
]

const options = {
  paginationSize: 4,
  pageStartIndex: 1,
  alwaysShowAllBtns: true, // Always show next and previous button
  withFirstAndLast: false, // Hide the going to First and Last page button
  // hideSizePerPage: true, // Hide the sizePerPage dropdown always
  // hidePageListOnlyOnePage: true, // Hide the pagination list when only one page
  firstPageText: 'First',
  prePageText: '<',
  nextPageText: '>',
  lastPageText: 'Last',
  nextPageTitle: 'First page',
  prePageTitle: 'Pre page',
  firstPageTitle: 'Next page',
  lastPageTitle: 'Last page',
  showTotal: true,
  paginationTotalRenderer: customTotal,
  disablePageTitle: true,
  sizePerPageList: [{
    text: '5', value: 5
  }, {
    text: '10', value: 10
  }, {
    text: 'All', value: transactionData.length
  }] // A numeric array is also available. the purpose of above example is custom the text
};

class Index extends Component {
  state = {
   }
  render() { 
    return ( 
      <Container className='overflow-auto'>
        <p className='listTitle py-3'>Dashboard</p>
        <Row>
          <Col lg={3} className='mr-3'>
            <Row>
              <Col lg={4} className='icon-container d-flex justify-content-center align-items-center'>
                <Icon
                  name='users'
                  font='FontAwesome'
                  color='white'
                  size={40}
                  style={{marginRight: 10}}
                />
              </Col>
              <Col className='bg-white'>
                <p>Total Patient</p>
                <p>3</p>
              </Col>
            </Row>
          </Col>
          <Col lg={3} className='mr-3'>
            <Row>
              <Col lg={4} className='icon-container d-flex justify-content-center align-items-center'>
                <Icon
                  name='home'
                  font='FontAwesome'
                  color='white'
                  size={40}
                />
              </Col>
              <Col className='bg-white'>
                <p>Total Activity</p>
                <p className='pb-0'>3</p>
              </Col>
            </Row>
          </Col>
          <Col lg={3} className='mr-3'>
            <Row>
              <Col lg={4} className='icon-container d-flex justify-content-center align-items-center'>
                <Icon
                  name='user-md'
                  font='FontAwesome'
                  color='white'
                  size={40}
                  style={{marginRight: 10}}
                />
              </Col>
              <Col className='bg-white'>
                <p>Total Staff</p>
                <p>3</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
 
export default Index;