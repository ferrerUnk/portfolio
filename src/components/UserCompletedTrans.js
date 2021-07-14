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
  { id: 118, ref: '874973152', name: 'Sample Item 1', date: 'May 17, 2020', price: 'Php 15,546' },
  { id: 217, ref: '875685768', name: 'Sample Item 2', date: 'April 20, 2020', price: 'Php 12,234' },
  { id: 316, ref: '928475649', name: 'Sample Item 3', date: 'April 10, 2020', price: 'Php 13,257' },
  { id: 415, ref: '124368475', name: 'Sample Item 4', date: 'March 30, 2020', price: 'Php 11,765' },
  { id: 514, ref: '983527465', name: 'Sample Item 5', date: 'March 25, 2020', price: 'Php 10,432' },
  { id: 613, ref: '104958576', name: 'Sample Item 6', date: 'March 21, 2020', price: 'Php 19,108' },
  { id: 712, ref: '645384957', name: 'Sample Item 7', date: 'March 12, 2020', price: 'Php 17,238' },
  { id: 811, ref: '126484709', name: 'Sample Item 8', date: 'March 10, 2020', price: 'Php 19,659' },
  { id: 910, ref: '726354846', name: 'Sample Item 9', date: 'Febrauary 27, 2020', price: 'Php 15,873' },
  { id: 109, ref: '723647464', name: 'Sample Item 10', date: 'Febrauary 15, 2020', price: 'Php 12,981' },
  { id: 118, ref: '346879432', name: 'Sample Item 11', date: 'Febrauary 14, 2020', price: 'Php 14,918' },
  { id: 127, ref: '871258292', name: 'Sample Item 12', date: 'Febrauary 11, 2020', price: 'Php 16,387' },
  { id: 136, ref: '123243561', name: 'Sample Item 13', date: 'Febrauary 2, 2020', price: 'Php 11,739' },
  { id: 145, ref: '152437475', name: 'Sample Item 14', date: 'January 30, 2020', price: 'Php 10,546' },
  { id: 154, ref: '165364945', name: 'Sample Item 15', date: 'January 20, 2020', price: 'Php 12,173' },
  { id: 163, ref: '983648596', name: 'Sample Item 16', date: 'January 10, 2020', price: 'Php 10,176' },
  { id: 172, ref: '163850786', name: 'Sample Item 17', date: 'January 9, 2020', price: 'Php 14,333' },
  { id: 181, ref: '153749558', name: 'Sample Item 18', date: 'January 2, 2020', price: 'Php 13,576' },
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
        <p className='listTitle'>Completed Transactions</p>
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