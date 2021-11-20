import React, { Component } from 'react';
import { Container, Col, Row, Button, Modal, InputGroup, FormControl, NavItem } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator';
import AddVaccinated from './AddVacinated';
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import { setData, getPatient, getVaccinated } from '../reducer/firebase';
import Details from '../pages/Details';

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
    barangayList: [],
    show: false,
    PWDID   : 0,
    PhilheathID  : 1234567,
    address : '',
    age : '',
    category : '',
    firstDose : '',
    gender : 'Male',
    idNumber : '',
    name : '',
    placeOfVac : '',
    secondDose : '',
    typeOfVaccine : '',
    contactNum: '',
    addVacinated: false,
    id: ''
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

  AddVaccinated = async() => {
    let { show ,PWDID, PhilheathID,
      address,
      age,
      category,
      firstDose,
      gender,
      idNumber,
      name,
      placeOfVac,
      secondDose,
      typeOfVaccine,
      contactNum} = this.state;
    let data = {
      "PWDID" : PWDID,
      "PhilheathID" : PhilheathID,
      "address" : address,
      "age" : age,
      "category" : category,
      "firstDose" : firstDose,
      "gender" : gender,
      "idNumber" : idNumber,
      "name" : name,
      "placeOfVac" : placeOfVac,
      "secondDose" : secondDose,
      "typeOfVaccine" : typeOfVaccine
    }
    let id = new Date().getTime();
    let save = await setData(`vaccinated/${id}`, data);
    console.log(save, data);
    if(save.response == 'success'){
      this.setState({show: false})
      await getVaccinated('vaccinated', this.Callback);
    }else{
      alert('Something went wrong, Please try again later.')
    }
    console.log(data)
  }

  // HandleAddVaccinatedModal = () => {
  //   let { show ,PWDID, PhilheathID,
  //     address,
  //     age,
  //     // category,
  //     // firstDose,
  //     // gender,
  //     idNumber,
  //     name,
  //     placeOfVac,
  //     // secondDose,
  //     // typeOfVaccine,
  //     contactNum} = this.state;
  //   return(
  //     <Modal show={show} onHide={()=> this.setState({show: false})}>
  //       <Modal.Header closeButton>
  //         <Modal.Title>ADD VACCINATED</Modal.Title>
  //       </Modal.Header>
  //       <Modal.Body>
  //         <Col>
  //           <p className='mb-0'>Name</p>
  //           <InputGroup className="mb-3">
  //             <FormControl
  //               value={name}
  //               placeholder="Enter name.."
  //               aria-describedby="basic-addon1"
  //               onChange={(e)=> this.setState({name: e.target.value})}
  //             />
  //           </InputGroup>
  //         </Col>
  //         <Col>
  //           <p className='mb-0'>Age</p>
  //           <InputGroup className="mb-3">
  //             <FormControl
  //               value={age}
  //               placeholder="Enter age.."
  //               aria-describedby="basic-addon1"
  //               onChange={(e)=> this.setState({age: e.target.value})}
  //             />
  //           </InputGroup>
  //         </Col>
  //         <Col>
  //           <p className='mb-0'>Address</p>
  //           <InputGroup className="mb-3">
  //             <FormControl
  //               value={address}
  //               placeholder="Enter address.."
  //               aria-describedby="basic-addon1"
  //               onChange={(e)=> this.setState({address: e.target.value})}
  //             />
  //           </InputGroup>
  //         </Col>
  //         <Col>
  //           <p className='mb-0'>Contact Number</p>
  //           <InputGroup className="mb-3">
  //             <FormControl
  //               value={contactNum}
  //               placeholder="Enter contact number.."
  //               aria-describedby="basic-addon1"
  //               onChange={(e)=> this.setState({contactNum: e.target.value})}
  //             />
  //           </InputGroup>
  //         </Col>
  //         <Col>
  //           <p className='mb-0'>Gender</p>
  //           <InputGroup className="mb-3">
  //           <select onChange={(e) => this.setState({gender: e.target.value})} className="w-100 py-2" id="inlineFormCustomSelect">
  //             <option value="Male">Male</option>
  //             <option value="Female">Female</option>
  //           </select>
  //           </InputGroup>
  //         </Col>
  //         <Col>
  //           <p className='mb-0'>Category</p>
  //           <InputGroup className="mb-3">
  //           <select onChange={(e) => this.setState({category: e.target.value})} className="w-100 py-2" id="inlineFormCustomSelect">
  //             <option value="A1">A1</option>
  //             <option value="A2">A2</option>
  //             <option value="A3">A3</option>
  //             <option value="A4">A4</option>
  //             <option value="A5">A5</option>
  //           </select>
  //           </InputGroup>
  //         </Col>
  //         <Col>
  //           <p className='mb-0'>Place of vaccination</p>
  //           <InputGroup className="mb-3">
  //           <FormControl
  //               value={placeOfVac}
  //               placeholder="Place of vaccination.."
  //               aria-describedby="basic-addon1"
  //               onChange={(e)=> this.setState({placeOfVac: e.target.value})}
  //             />
  //           </InputGroup>
  //         </Col>
  //         <Col>
  //           <p className='mb-0'>Vaccine</p>
  //           <InputGroup className="mb-3">
  //           <select  onChange={(e) => this.setState({typeOfVaccine: e.target.value})} className="w-100 py-2" id="inlineFormCustomSelect">
  //             {/* {barangayNames.map((item) => {
  //             return( */}
  //             <option value={'sinovac'}>{'sinovac'}</option>
  //             {/* )})} */}
  //           </select>
  //           </InputGroup>
  //         </Col>
  //         <Col>
  //           <p className='mb-0'>First Dose</p>
  //           <InputGroup className="mb-3">
  //             <input
  //               type='date'
  //               className='w-100 py-1'
  //               // value={firstDose}
  //               // placeholder="Enter patient age.."
  //               aria-describedby="basic-addon1"
  //               onChange={(e)=> this.setState({firstDose: e.target.value})}
  //             />
  //           </InputGroup>
  //         </Col>
  //         <Col>
  //           <p className='mb-0'>Second Dose</p>
  //           <InputGroup className="mb-3">
  //             <input
  //               type='date'
  //               className='w-100 py-1'
  //               // value={firstDose}
  //               // placeholder="Enter patient age.."
  //               aria-describedby="basic-addon1"
  //               onChange={(e)=> this.setState({secondDose: e.target.value})}
  //             />
  //           </InputGroup>
  //         </Col>
  //         <Col>
  //           <p className='mb-0'>ID Number</p>
  //           <InputGroup className="mb-3">
  //             <FormControl
  //               // value={contactNum}
  //               placeholder="Enter ID number.."
  //               aria-describedby="basic-addon1"
  //               onChange={(e)=> this.setState({idNumber: e.target.value})}
  //             />
  //           </InputGroup>
  //         </Col>
  //         <Col>
  //           <p className='mb-0'>Philhealth ID</p>
  //           <InputGroup className="mb-3">
  //             <FormControl
  //               value={PhilheathID}
  //               placeholder="Enter PhilHealth ID.."
  //               aria-describedby="basic-addon1"
  //               onChange={(e)=> this.setState({PhilheathID: e.target.value})}
  //             />
  //           </InputGroup>
  //         </Col>
  //         <Col>
  //           <p className='mb-0'>PWD ID</p>
  //           <InputGroup className="mb-3">
  //           <FormControl
  //               value={PWDID}
  //               placeholder="Enter PWD ID.."
  //               aria-describedby="basic-addon1"
  //               onChange={(e)=> this.setState({PWDID: e.target.value})}
  //             />
  //           </InputGroup>
  //         </Col>
  //       </Modal.Body>
  //       <Modal.Footer>
  //         <Button variant="secondary" onClick={()=> this.setState({show: false})}>
  //           Close
  //         </Button>
  //         <Button variant="primary" onClick={()=> this.AddVaccinated()}>
  //           Save Changes
  //         </Button>
  //       </Modal.Footer>
  //     </Modal>
  //   )
  // }

  HandleSave = async() => {
    this.setState({addVacinated: false})
  }

  HandleClick = async() => {
    this.setState({addVacinated: false})
    let patient = await getVaccinated('vaccinated', this.Callback)
  }

  render() {
    let { barangayList, addVacinated, id } = this.state;
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
        this.setState({id: row.id, addVacinated: true})
      }
    };

    return ( 
      <Container className='overflow-auto'>
        {
          addVacinated ? 
          <Details id={id} back={() => this.setState({addVacinated: false})}/>
          :
          <>
            <p className='listTitle mb-0'>List of Vaccinated Person</p>
            <Button className='w-auto mb-3 float-right' variant="primary" block onClick={()=>this.setState({addVacinated: true})}>
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
              rowEvents={ rowEvents }
              data={barangayList} 
              columns={ columns } 
              pagination={ paginationFactory(options) } 
              // defaultSorted = { defaultSorted }
              striped
              hover 
              wrapperClasses="table-responsive"
            />
          </>
        }
      </Container>
    );
  }
}
 
export default Index;