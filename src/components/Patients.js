import React, { Component } from 'react';
import { Container, Col, Row, Button, Modal, InputGroup, FormControl, Form } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator';
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import { getBarangayName, getPatient, setData } from '../reducer/firebase';

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
    dataField: 'status',
    text: 'Status',
    // sort: true,
    csvText: 'CSV Name'
  },
  {
    dataField: 'age',
    text: 'Age',
    // sort: true,
    csvText: 'CSV Name'
  },
  {
    dataField: 'barangay',
    text: 'Barangay',
    // sort: true,
    csvText: 'CSV Name'
  },
];

class Index extends Component {
  state = {
    patientList: [],
    barangayNames: [],
    show: false,  
    addPatientStatus: '',
    addPatientName: '',
    addPatientAge: '',
    addPatientBarangay: ''
   }
  
  componentDidMount = async() => {
    // let patientList = await getBarangay('barangay', this.Callback);
    // console.log(patientList)
    await getPatient('barangay', this.Callback)
    await getBarangayName('barangay', this.ReturnBarabgay)
  }

  ReturnBarabgay = (data => {
    this.setState({barangayNames: data})
  })

  Callback = (data) => {
   console.log(data, '-----------')
   this.setState({patientList: data})
  }

  HandleSavePatient = async() => {
    let { show ,addPatientAge, addPatientName, addPatientBarangay, addPatientStatus } = this.state;
    let data = {
      age: addPatientAge,
      name: addPatientName,
      status: addPatientStatus
    }
    let id = new Date().getTime()
    console.log(id)
    let save = await setData(`barangay/${addPatientBarangay}/Patients/${id}`, data);
    console.log(save, data);
    if(save.response == 'success'){
      this.setState({show: false})
      await getPatient('barangay', this.Callback);
    }else{
      alert('Something went wrong, Please try again later.')
    }
  }

  HandleAddPatientModal = () => {
    let { show ,addPatientAge, addPatientName, addPatientBarangay, addPatientStatus, barangayNames } = this.state;
    return(
      <Modal show={show} onHide={()=> this.setState({showData: false})}>
        <Modal.Header closeButton>
          <Modal.Title>ADD COVID PATIENT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col>
            <p className='mb-0'>Name</p>
            <InputGroup className="mb-3">
              <FormControl
                value={addPatientName}
                placeholder="Enter stocks available.."
                aria-describedby="basic-addon1"
                onChange={(e)=> this.setState({addPatientName: e.target.value})}
              />
            </InputGroup>
          </Col>
          <Col>
            <p className='mb-0'>Age</p>
            <InputGroup className="mb-3">
              <FormControl
                value={addPatientAge}
                placeholder="Enter stocks available.."
                aria-describedby="basic-addon1"
                onChange={(e)=> this.setState({addPatientAge: e.target.value})}
              />
            </InputGroup>
          </Col>
          <Col>
            <p className='mb-0'>Status</p>
            <InputGroup className="mb-3">
            <select onChange={(e) => this.setState({addPatientStatus: e.target.value})} className="w-100 py-2" id="inlineFormCustomSelect">
              <option value="Positive">Positive</option>
              <option value="Negative">Negative</option>
              <option value="Recovered">Recovered</option>
              <option value="Dead">Dead</option>
            </select>
            </InputGroup>
          </Col>
          <Col>
            <p className='mb-0'>Baranggay</p>
            <InputGroup className="mb-3">
            <select  onChange={(e) => this.setState({addPatientBarangay: e.target.value})} className="w-100 py-2" id="inlineFormCustomSelect">
              {barangayNames.map((item) => {
              return(
              <option value={item.value}>{item.name}</option>
              )})}
            </select>
            </InputGroup>
          </Col>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=> this.setState({show: false})}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> this.HandleSavePatient()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }

  render() {
    let { patientList } = this.state;
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
        text: 'All', value: patientList.length
      }] // A numeric array is also available. the purpose of above example is custom the text
    };
    return ( 
      <Container className='overflow-auto'>
        <p className='listTitle mb-0'>List of Patients</p>
        <Button className='w-auto mb-3 float-right' variant="primary" block onClick={()=>this.setState({show: true})}>
          <Icon
            name='user-plus'
            font='FontAwesome'
            color='white'
            size={20}
            style={{marginRight: 10}}
          />ADD PATIENT
        </Button>
        <BootstrapTable
          id='customTable'
          bootstrap4 
          keyField='id' 
          data={patientList} 
          columns={ columns } 
          pagination={ paginationFactory(options) } 
          // defaultSorted = { defaultSorted }
          striped
          hover 
          wrapperClasses="table-responsive"
        />
        {this.HandleAddPatientModal()}
      </Container>
    );
  }
}
 
export default Index;