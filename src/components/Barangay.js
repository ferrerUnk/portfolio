import React, { Component } from 'react';
import { Container, Col, Row, Modal, Button } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator';
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import { getBarangay, getPatient } from '../reducer/firebase';

const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total ml-3">
    Showing { from } to { to } of { size } entries
  </span>
)

const columns = [
  {
    dataField: 'barangay',
    text: 'Barangay',
    // sort: true,
    csvText: 'CSV Name'
  },
  {
    dataField: 'new',
    text: 'New Cases',
    // sort: true,
    csvText: 'CSV Name'
  },
  {
    dataField: 'active',
    text: 'Active Cases',
    // sort: true,
    csvText: 'CSV Name'
  },
  {
    dataField: 'recovered',
    text: 'Recovered',
    // sort: true,
    csvText: 'CSV Date'
  },
  {
    dataField: 'death',
    text: 'Death',
    // sort: true,
    csvText: 'CSV Name'
  },
];


class Index extends Component {
  state = {
    barangayList: [],
    show: false,
    rowData: {}
   }
  
  componentDidMount = async() => {
    let barangayList = await getBarangay('barangay', this.Callback);
    console.log(barangayList)
    // let patient = await getPatient('barangay', this.Patientcallback)
  }

  Patientcallback = (data) => {
    console.log(data, 'Patient');
    // console.log(Object.values(data), 'sample')
  }

  Callback = (data) => {
   console.log(data, '-----------')
   this.setState({barangayList: data})
  }

  HandleModal = () => {
    let { show } =this.state;
    return(
      <Modal show={show} onHide={()=> alert('hide')}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=> this.setState({show: false})}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> alert('hide')}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }

  HandleRowEvents = (e) => {
    console.log(e)
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
    const rowEvents = {
      onClick: (e, row, rowIndex) => {
        console.log(row)
        this.setState({rowData: row, show: true})
      }
    };
    return ( 
      <Container className='overflow-auto'>
        <p className='listTitle mb-0'>Barangay</p>
        <Button className='w-auto mb-3 float-right' variant="primary" block onClick={()=>alert('sample')}>
          <Icon
            name='plus'
            font='FontAwesome'
            color='white'
            size={20}
            style={{marginRight: 10}}
          />ADD BARANGAY
        </Button>
        <BootstrapTable
          id='customTable'
          rowEvents={ rowEvents }
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
        {this.HandleModal()}
      </Container>
    );
  }
}
 
export default Index;