import React, { Component } from 'react';
import { Container, Col, Row, Button, Modal, InputGroup, FormControl } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator';
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import { getVaccine, updateData } from '../reducer/firebase';

const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total ml-3">
    Showing { from } to { to } of { size } entries
  </span>
)

const columns = [
  {
    dataField: 'vaccine',
    text: 'Vaccine Name',
    // sort: true,
    csvText: 'CSV Name'
  },
  {
    dataField: 'stock',
    text: 'Stocks',
    // sort: true,
    csvText: 'CSV Name'
  },
  {
    dataField: 'used',
    text: 'Used',
    // sort: true,
    csvText: 'CSV Name'
  },
  {
    dataField: 'total',
    text: 'Total',
    // sort: true,
    csvText: 'CSV Date'
  },
];

class Index extends Component {
  state = {
    barangayList: [],
    rowData: {},
    vacStocks: 0,
    vacUsed: 0,
    vacTotal: 0,
    showData: false,

    saveVaccineName: '',
    saveStocks: 0,
    saveUsed: 0,
    saveTotal: 0,
    show: false
   }
  
  componentDidMount = async() => {
    let barangayList = await getVaccine('vaccine', this.Callback);
    console.log(barangayList)
  }

  Callback = (data) => {
   console.log(data, '-----------')
   this.setState({barangayList: data})
  }

  HandleSaveVaccine = async() => {
    let {saveVaccineName, saveStocks, saveUsed, saveTotal} = this.state;
    let data = {
      stock: saveStocks,
      used: saveUsed,
      total: saveTotal
    }
    let save = await updateData(`vaccine/${saveVaccineName}`, data);
    console.log(save, data);
    if(save.response == 'success'){
      this.setState({show: false})
      await getVaccine('vaccine', this.Callback);
    }else{
      alert('Something went wrong, Please try again later.')
    }
  }


  HandleAddVaccine = () => {
    let { show ,saveStocks, saveTotal, saveUsed, saveVaccineName } = this.state;
    return(
      <Modal show={show} onHide={()=> this.setState({show: false})}>
        <Modal.Header closeButton>
          <Modal.Title>ADD VACCINE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col>
            <p className='mb-0'>Vaccine Name</p>
            <InputGroup className="mb-3">
              <FormControl
                value={saveVaccineName}
                placeholder="Enter stocks available.."
                aria-describedby="basic-addon1"
                onChange={(e)=> this.setState({saveVaccineName: e.target.value})}
              />
            </InputGroup>
          </Col>
          <Col>
            <p className='mb-0'>Stocks</p>
            <InputGroup className="mb-3">
              <FormControl
                value={saveStocks}
                placeholder="Enter stocks available.."
                aria-describedby="basic-addon1"
                onChange={(e)=> this.setState({saveStocks: e.target.value})}
              />
            </InputGroup>
          </Col>
          <Col>
            <p className='mb-0'>Used</p>
            <InputGroup className="mb-3">
              <FormControl
                value={saveUsed}
                placeholder="Enter total used vaccine.."
                aria-describedby="basic-addon1"
                onChange={(e)=> this.setState({saveUsed: e.target.value})}
              />
            </InputGroup>
          </Col>
          <Col>
            <p className='mb-0'>Total</p>
            <InputGroup className="mb-3">
              <FormControl
                value={saveTotal}
                placeholder="Enter total number of vaccine.."
                aria-describedby="basic-addon1"
                onChange={(e)=> this.setState({saveTotal: e.target.value})}
              />
            </InputGroup>
          </Col>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=> this.setState({show: false})}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> this.HandleSaveVaccine()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }

  HandleUpdateVaccine = async() => {
    let {rowData, vacStocks, vacTotal, vacUsed} = this.state;
    let data = {
      stock: vacStocks,
      used: vacUsed,
      total: vacTotal
    }
    let save = await updateData(`vaccine/${rowData.vaccine}`, data);
    console.log(save, data);
    if(save.response == 'success'){
      this.setState({showData: false})
      await getVaccine('vaccine', this.Callback);
    }else{
      alert('Something went wrong, Please try again later.')
    }
  }

  HandleDataModal = () => {
    let { rowData, showData,vacStocks, vacTotal, vacUsed } =this.state;
    return(
      <Modal show={showData} onHide={()=> this.setState({showData: false})}>
        <Modal.Header closeButton>
          <Modal.Title>{rowData.vaccine}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col>
            <p className='mb-0'>Stocks</p>
            <InputGroup className="mb-3">
              <FormControl
                value={vacStocks}
                placeholder="Enter stocks available.."
                aria-describedby="basic-addon1"
                onChange={(e)=> this.setState({vacStocks: e.target.value})}
              />
            </InputGroup>
          </Col>
          <Col>
            <p className='mb-0'>Used</p>
            <InputGroup className="mb-3">
              <FormControl
                value={vacUsed}
                placeholder="Enter total used vaccine.."
                aria-describedby="basic-addon1"
                onChange={(e)=> this.setState({vacUsed: e.target.value})}
              />
            </InputGroup>
          </Col>
          <Col>
            <p className='mb-0'>Total</p>
            <InputGroup className="mb-3">
              <FormControl
                value={vacTotal}
                placeholder="Enter total number of vaccine.."
                aria-describedby="basic-addon1"
                onChange={(e)=> this.setState({vacTotal: e.target.value})}
              />
            </InputGroup>
          </Col>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=> this.setState({showData: false})}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> this.HandleUpdateVaccine()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
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
        this.setState({rowData: row, showData: true,
          vacStocks: row.stock,
          vacUsed: row.used,
          vacTotal: row.total
        })
      }
    };

    return ( 
      <Container className='overflow-auto'>
        <p className='listTitle mb-0'>Vaccine</p>
        <Button className='w-auto mb-3 float-right' variant="primary" block onClick={()=> this.setState({show: true})}>
          <Icon name='plus' font='FontAwesome' color='white' size={20} style={{marginRight: 10}} />
          ADD VACCINE
        </Button>
        <BootstrapTable
          id='customTable'
          bootstrap4 
          keyField='id' 
          data={barangayList} 
          columns={ columns } 
          rowEvents={ rowEvents }
          pagination={ paginationFactory(options) } 
          // defaultSorted = { defaultSorted }
          striped
          hover 
          wrapperClasses="table-responsive"
        />
        {this.HandleDataModal()}
        {this.HandleAddVaccine()}
      </Container>
    );
  }
}
 
export default Index;