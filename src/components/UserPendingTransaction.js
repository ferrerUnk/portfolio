import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator';

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
  dataField: 'ref',
  text: 'Reference No',
  // sort: true,
  csvText: 'CSV Name'
}, {
  dataField: 'price',
  text: 'Total Amount',
  // sort: true,
  csvText: 'CSV Name'
}, {
  dataField: 'name',
  text: 'Schedule',
  // sort: true,
  csvText: 'CSV Name'
}, {
  dataField: 'date',
  text: 'Date',
  // sort: true,
  csvText: 'CSV Date'
}];

const transactionData = [
  { id: 232, ref: '874973152', name: 'Sample Item 1', date: 'Aug 17, 2020', price: 'Php 15,546' },
  { id: 455, ref: '875685768', name: 'Sample Item 2', date: 'Aug 20, 2020', price: 'Php 12,234' },
  { id: 143, ref: '928475649', name: 'Sample Item 3', date: 'Aug 22, 2020', price: 'Php 13,257' },
  { id: 415, ref: '124368475', name: 'Sample Item 4', date: 'Aug 25, 2020', price: 'Php 11,765' },
  { id: 514, ref: '983527465', name: 'Sample Item 5', date: 'Aug 30, 2020', price: 'Php 10,432' }
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
        <p className='listTitle'>Pending Transactions</p>
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