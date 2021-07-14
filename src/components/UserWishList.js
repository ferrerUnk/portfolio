import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator';

const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total ml-3">
    Showing { from } to { to } of { size } entries
  </span>
)

const buttonsClick = () => {
  return (
    <>
      <Button name={'pencil'} variant='outline-success' size="sm">
        <i class="fa fa-cart-plus" aria-hidden="true"></i> 
      </Button>{' '}
      <Button name={'trash'} variant='outline-danger' size="sm">
        <i class="fa fa-trash" aria-hidden="true"></i>
      </Button>
    </>
  )
}

const columns = [{
  dataField: 'stock',
  text: 'Stock Available',
  // sort: true,
  csvText: 'CSV ID'
}, {
  dataField: 'name',
  text: 'Item Name',
  // sort: true,
  csvText: 'CSV Name'
}, {
  dataField: 'price',
  text: 'Total Amount',
  // sort: true,
  csvText: 'CSV Name'
}, {
  dataField: '',
  text: 'Action',
  // sort: true,
  formatter: buttonsClick
}];

const transactionData = [
  { stock: '5', name: 'Sample Item 1', price: 'Php 15,546' },
  { stock: '4', name: 'Sample Item 2', price: 'Php 12,234' },
  { stock: '7', name: 'Sample Item 3', price: 'Php 13,257' },
  { stock: '8', name: 'Sample Item 4', price: 'Php 11,765' },
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
      <Container>
        <p className='listTitle'>Wish List</p>
        <BootstrapTable
          id='customTable'
          bootstrap4 
          keyField='id' 
          data={transactionData } 
          columns={ columns } 
          pagination={ paginationFactory(options) } 
          // defaultSorted = { defaultSorted }
          striped
          hover 
          wrapperClasses="table-responsive"
        />
      </Container>
    );
  }
}
 
export default Index;