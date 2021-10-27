import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator';

import fh1 from '../assets/images/fh1.jpg'
import fh2 from '../assets/images/fh2.jpg'
import fh3 from '../assets/images/fh3.jpg'
import fh4 from '../assets/images/fh4.jpg'
import fh5 from '../assets/images/fh5.jpg'
import fh6 from '../assets/images/fh6.jpg'
import fh7 from '../assets/images/fh7.jpg'
import fh8 from '../assets/images/fh8.jpg'
import fh9 from '../assets/images/fh9.jpg'
import fh10 from '../assets/images/fh10.jpg'

import hfh1 from '../assets/images/hfh1.jpg'
import hfh2 from '../assets/images/hfh2.jpeg'
import hfh3 from '../assets/images/hfh3.jpg'
import hfh4 from '../assets/images/hfh4.webp'
import hfh5 from '../assets/images/hfh5.jpg'
import hfh6 from '../assets/images/hfh6.jpg'
import hfh7 from '../assets/images/hfh7.jpg'
import hfh8 from '../assets/images/hfh8.jpg'
import hfh9 from '../assets/images/hfh9.jpg'
import hfh10 from '../assets/images/hfh10.jpg'

import bh1 from '../assets/images/bh1.jpg'
import bh2 from '../assets/images/bh2.jpg'
import bh3 from '../assets/images/bh3.jpg'
import bh4 from '../assets/images/bh4.jpg'
import bh5 from '../assets/images/bh5.jpg'
import bh6 from '../assets/images/bh6.jpg'
import bh7 from '../assets/images/bh7.jpg'
import bh8 from '../assets/images/bh8.jpg'
import bh9 from '../assets/images/bh9.jpg'
import bh10 from '../assets/images/bh10.png'

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
  dataField: 'quantity',
  text: 'Quantity',
  // sort: true,
  csvText: 'CSV Name'
}, {
  dataField: 'name',
  text: 'Item Name',
  // sort: true,
  csvText: 'CSV Name'
}, {
  dataField: 'price',
  text: 'Price',
  // sort: true,
  csvText: 'CSV Date'
}];
const data= [
  {id: 1, img: fh1, name: 'Shoe1 X-Spirit III', quantity: '5', price: 'php 7,038'},
  {id: 2, img: fh2, name: 'SH-FF0016', quantity: '7', price: 'php 5,350'},
  {id: 3, img: fh3, name: 'Vega Cliff CLF-LK-M', quantity: '3', price: 'php 4,100'},
  {id: 4, img: fh4, name: 'Revolver Evo', quantity: '4', price: 'php 4,500'},
  {id: 5, img: fh5, name: 'Mt Helmets Atom SV Transcend', quantity: '2', price: 'php 4,600'},
  {id: 6, img: fh6, name: 'HJC F70 MAGA MC&SF', quantity: '8', price: 'php 3,800'},
  {id: 7, img: fh7, name: 'Spartan 1.2 Priona', quantity: '7', price: 'php 4,200'},
  {id: 8, img: fh8, name: 'Bolt Full Face Helmet', quantity: '5', price: 'php 3,800'},
  {id: 9, img: fh9, name: 'Mt Thunder3 SV Turbine', quantity: '4', price: 'php 3,500'},
  {id: 10, img: fh10, name: 'Street-X Helmet', quantity: '7', price: 'php 17,600'},
  {id: 1, img: hfh1, name: 'Half Face H618', quantity: '5', price: 'php 7,038'},
  {id: 2, img: hfh2, name: 'Spyder Open-face', quantity: '7', price: 'php 5,350'},
  {id: 3, img: hfh3, name: 'SEC 01003', quantity: '3', price: 'php 4,100'},
  {id: 4, img: hfh4, name: 'GXT Helmet', quantity: '4', price: 'php 4,500'},
  {id: 5, img: hfh5, name: 'Studds Cubs Half Face', quantity: '2', price: 'php 4,600'},
  {id: 6, img: hfh6, name: 'HJC Half Face', quantity: '8', price: 'php 3,800'},
  {id: 7, img: hfh7, name: 'Studds Cubs Half Face', quantity: '2', price: 'php 4,600'},
  {id: 8, img: hfh8, name: 'Vega Half Face Helmet', quantity: '5', price: 'php 3,800'},
  {id: 9, img: hfh9, name: 'NHK Half Face Helmet', quantity: '4', price: 'php 3,500'},
  {id: 10, img: hfh10, name: 'K-5 JET E2205 Top', quantity: '7', price: 'php 17,600'},
  {id: 1, img: bh1, name: 'Sample Bike Helmet 1', quantity: '5', price: 'php 7,038'},
  {id: 2, img: bh2, name: 'Sample Bike Helmet 2', quantity: '7', price: 'php 5,350'},
  {id: 3, img: bh3, name: 'Sample Bike Helmet 3', quantity: '3', price: 'php 4,100'},
  {id: 4, img: bh4, name: 'Sample Bike Helmet 4', quantity: '4', price: 'php 4,500'},
  {id: 5, img: bh5, name: 'Sample Bike Helmet 5', quantity: '2', price: 'php 4,600'},
  {id: 6, img: bh6, name: 'Sample Bike Helmet 6', quantity: '8', price: 'php 3,800'},
  {id: 7, img: bh7, name: 'Sample Bike Helmet 7', quantity: '7', price: 'php 4,200'},
  {id: 8, img: bh8, name: 'Sample Bike Helmet 8', quantity: '5', price: 'php 3,800'},
  {id: 9, img: bh9, name: 'Sample Bike Helmet 9', quantity: '4', price: 'php 3,500'},
  {id: 10, img: bh10, name: 'Sample Bike Helmet 10', quantity: '7', price: 'php 17,600'},
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
    text: 'All', value: data.length
  }] // A numeric array is also available. the purpose of above example is custom the text
};

class Index extends Component {
  state = {
   }
  render() { 
    return ( 
      <Container>
        <p className='listTitle'>Patient List</p>
        <BootstrapTable
          id='customTable'
          bootstrap4 
          keyField='id' 
          data={data } 
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