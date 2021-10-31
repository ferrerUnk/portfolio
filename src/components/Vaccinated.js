import React, { Component } from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator';
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import { getBarangay, getPatient, getVaccinated } from '../reducer/firebase';

const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total ml-3">
    Showing { from } to { to } of { size } entries
  </span>
)

const columns = [
  {
    dataField: 'name',
    text: 'Name',
    // sort: true,
    csvText: 'CSV Name'
  },
  {
    dataField: 'typeOfVaccine',
    text: 'Vaccine',
    // sort: true,
    csvText: 'CSV Name'
  },
  {
    dataField: 'address',
    text: 'Address',
    // sort: true,
    csvText: 'CSV Name'
  },
  {
    dataField: 'gender',
    text: 'Gender',
    // sort: true,
    csvText: 'CSV Name'
  },
  {
    dataField: 'age',
    text: 'Age',
    // sort: true,
    csvText: 'CSV Name'
  },
];

class Index extends Component {
  state = {
    barangayList: []
   }
  
  componentDidMount = async() => {
    // let barangayList = await getBarangay('barangay', this.Callback);
    // console.log(barangayList)
    let patient = await getVaccinated('vaccinated', this.Callback)
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
        <p className='listTitle mb-0'>List of Vaccinated Person</p>
        <Button className='w-auto mb-3 float-right' variant="primary" block onClick={()=>alert('sample')}>
          <Icon
            name='user-plus'
            font='FontAwesome'
            color='white'
            size={20}
            style={{marginRight: 10}}
          />ADD VACCINATED
        </Button>
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