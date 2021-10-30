import React, { Component } from 'react';
import { Container, Col, Row, Modal, Button, InputGroup, FormControl } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator';
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import { getBarangay, getPatient, updateData, setData } from '../reducer/firebase';

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
    rowData: {},
    showData: false,
    brgyNew: 0,
    brgyActive: 0,
    brgyRecoveries: 0,
    brgyDeaths: 0,

    saveBrgyName: '',
    saveNew: 0,
    saveActive: 0,
    saveRecoveries: 0,
    saveDeath: 0
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

  HandleSaveBarangay = async() => {
    let { saveBrgyName, saveNew, saveActive, saveRecoveries, saveDeath } = this.state;
    let data = {
      new: saveNew,
      active: saveActive,
      death: saveDeath,
      recovered: saveRecoveries,
      Patients: {}
    }
    let saveBarangay = await setData(`barangay/${saveBrgyName}`, data);
    if(saveBarangay.response == 'success'){
      this.setState({show: false})
      await getBarangay('barangay', this.Callback);
    }else{
      alert('Something went wrong, Please try again later.')
    }
  }

  HandleUpdateBrgy = async() => {
    let {rowData, brgyNew, brgyActive, brgyDeaths, brgyRecoveries} = this.state;
    let data = {
      new: brgyNew,
      active: brgyActive,
      death: brgyDeaths,
      recovered: brgyRecoveries,
      Patients: this.state.rowData.Patients ? this.state.rowData.Patients : {}
    }
    let save = await updateData(`barangay/${rowData.barangay}`, data);
    console.log(save, data);
    if(save.response == 'success'){
      this.setState({showData: false})
      await getBarangay('barangay', this.Callback);
    }else{
      alert('Something went wrong, Please try again later.')
    }
  }

  HandleDataModal = () => {
    let { rowData, showData, brgyActive, brgyDeaths, brgyNew, brgyRecoveries } =this.state;
    return(
      <Modal show={showData} onHide={()=> this.setState({showData: false})}>
        <Modal.Header closeButton>
          <Modal.Title>{rowData.barangay}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col>
            <p className='mb-0'>New covid case</p>
            <InputGroup className="mb-3">
              <FormControl
                value={brgyNew}
                placeholder="Enter new covid case.."
                aria-describedby="basic-addon1"
                onChange={(e)=> this.setState({brgyNew: e.target.value})}
              />
            </InputGroup>
          </Col>
          <Col>
            <p className='mb-0'>Active covid case</p>
            <InputGroup className="mb-3">
              <FormControl
                value={brgyActive}
                placeholder="Enter active covid case.."
                aria-describedby="basic-addon1"
                onChange={(e)=> this.setState({brgyActive: e.target.value})}
              />
            </InputGroup>
          </Col>
          <Col>
            <p className='mb-0'>Recoveries of covid</p>
            <InputGroup className="mb-3">
              <FormControl
                value={brgyRecoveries}
                placeholder="Enter recoveries from covid.."
                aria-describedby="basic-addon1"
                onChange={(e)=> this.setState({brgyRecoveries: e.target.value})}
              />
            </InputGroup>
          </Col>
          <Col>
            <p className='mb-0'>Deaths due to covid</p>
            <InputGroup className="mb-3">
              <FormControl
                value={brgyDeaths}
                placeholder="Enter deaths due covid.."
                aria-describedby="basic-addon1"
                onChange={(e)=> this.setState({brgyDeaths: e.target.value})}
              />
            </InputGroup>
          </Col>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=> this.setState({showData: false})}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> this.HandleUpdateBrgy()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }

  HandleModal = () => {
    let { show } =this.state;
    return(
      <Modal show={show} onHide={()=> this.setState({show: false})}>
        <Modal.Header closeButton>
          <Modal.Title>ADD NEW BARANGAY</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Col>
            <p className='mb-0'>Barangay Name</p>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Enter barangay name.."
                aria-describedby="basic-addon1"
                onChange={(e)=> this.setState({saveBrgyName: e.target.value})}
              />
            </InputGroup>
          </Col>
          <Col>
            <p className='mb-0'>New covid case</p>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Enter new covid case.."
                aria-describedby="basic-addon1"
                onChange={(e)=> this.setState({saveNew: e.target.value})}
              />
            </InputGroup>
          </Col>
          <Col>
            <p className='mb-0'>Active covid case</p>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Enter active covid case.."
                aria-describedby="basic-addon1"
                onChange={(e)=> this.setState({saveActive: e.target.value})}
              />
            </InputGroup>
          </Col>
          <Col>
            <p className='mb-0'>Recoveries of covid</p>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Enter recoveries from covid.."
                aria-describedby="basic-addon1"
                onChange={(e)=> this.setState({saveRecoveries: e.target.value})}
              />
            </InputGroup>
          </Col>
          <Col>
            <p className='mb-0'>Deaths due to covid</p>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Enter deaths due covid.."
                aria-describedby="basic-addon1"
                onChange={(e)=> this.setState({saveDeath: e.target.value})}
              />
            </InputGroup>
          </Col>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=> this.setState({show: false})}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> this.HandleSaveBarangay()}>
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
        this.setState({rowData: row, showData: true,
          brgyNew: row.new,
          brgyActive: row.active,
          brgyRecoveries: row.recovered,
          brgyDeaths: row.death
        })
      }
    };
    return ( 
      <Container className='overflow-auto'>
        <p className='listTitle mb-0'>Barangay</p>
        <Button className='w-auto mb-3 float-right' variant="primary" block onClick={()=>this.setState({show: true})}>
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
        {this.HandleDataModal()}
      </Container>
    );
  }
}
 
export default Index;