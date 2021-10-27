import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator';
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import { getVaccine } from '../reducer/firebase';

const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total ml-3">
    Showing { from } to { to } of { size } entries
  </span>
)

const columns = [
  {
    dataField: 'vaccine',
    text: 'Vaccine',
    // sort: true,
    csvText: 'CSV Name'
  },
  {
    dataField: 'stock',
    text: 'New Cases',
    // sort: true,
    csvText: 'CSV Name'
  },
  {
    dataField: 'used',
    text: 'Active Cases',
    // sort: true,
    csvText: 'CSV Name'
  },
  {
    dataField: 'total',
    text: 'Recovered',
    // sort: true,
    csvText: 'CSV Date'
  },
];

class Index extends Component {
  state = {
    barangayList: []
   }
  
  componentDidMount = async() => {
    let barangayList = await getVaccine('vaccine', this.Callback);
    console.log(barangayList)
  }

  Callback = (data) => {
   console.log(data, '-----------')
   this.setState({barangayList: data})
  }

  render() {
    let { barangayList } = this.state;
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
        text: 'All', value: barangayList.length
      }] // A numeric array is also available. the purpose of above example is custom the text
    };
    return ( 
      <Container className='overflow-auto'>
        <p className='listTitle py-3'>Vaccine</p>
        <BootstrapTable
          id='customTable'
          bootstrap4 
          keyField='id' 
          data={barangayList} 
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