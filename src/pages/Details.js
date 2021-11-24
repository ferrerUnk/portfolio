import React, { Component } from 'react';
import { Container, Col, Row, Button, Modal, InputGroup, FormControl, NavItem } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator';
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import { setData, getData, getVaccine } from '../reducer/firebase';

class Index extends Component {
  state = {
    barangayList: [],
    show: false,
    PWDID   : '',
    PhilheathID : '',
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
    birthday: '',
    genderData: {},
    vaccines: []
   }
  
  componentDidMount = async() => {
    let id = this.props.id
    let data = await getData(`vaccinated/${id}`),
    { PWDID,
    PhilheathID,
    address,
    age,
    birthday,
    category,
    contactNum,
    firstDose,
    gender,
    idNumber,
    name,
    placeOfVac,
    secondDose,
    typeOfVaccine,
  } = data;
  this.setState({PWDID,
    PhilheathID,
    address,
    age,
    birthday,
    category,
    contactNum,
    firstDose,
    gender,
    idNumber,
    name,
    placeOfVac,
    secondDose,
    typeOfVaccine})
    console.log(data)
    let barangayList = await getVaccine('vaccine', this.Callback);

  }

  Callback = (data) => {
    console.log(data, '-----------')
    this.setState({vaccines: data})
   }

  render() {
    let { show ,PWDID, PhilheathID, gender, address,  age, idNumber, name, placeOfVac, vaccines,
        secondDose,
        category,
        firstDose,
        typeOfVaccine,
        birthday,
        contactNum } = this.state;
    return ( 
      <Container className='overflow-auto printme'>
        <p className='listTitle mb-3'>VACCINATED DETAILS</p>
        <Col>
          <p className='mb-0'>Place of vaccination</p>
          <InputGroup className="mb-3">
          <FormControl
              value={placeOfVac}
              placeholder="Place of vaccination.."
              aria-describedby="basic-addon1"
              onChange={(e)=> this.setState({placeOfVac: e.target.value})}
            />
          </InputGroup>
        </Col>
        <Row className='px-3'>
          <Col>
            <p className='mb-0'>Category</p>
            <InputGroup className="mb-3">
            <select value={category} onChange={(e) => this.setState({category: e.target.value})} className="w-100 py-2" id="inlineFormCustomSelect">
              <option value="A1">A1</option>
              <option value="A2">A2</option>
              <option value="A3">A3</option>
              <option value="A4">A4</option>
              <option value="A5">A5</option>
            </select>
            </InputGroup>
          </Col>
          <Col>
            <p className='mb-0'>Philhealth ID</p>
            <InputGroup className="mb-3">
              <FormControl
                value={PhilheathID}
                placeholder="Enter PhilHealth ID.."
                aria-describedby="basic-addon1"
                onChange={(e)=> this.setState({PhilheathID: e.target.value})}
              />
            </InputGroup>
          </Col>
        </Row>
        <Row className='px-3'>
          <Col>
            <p className='mb-0'>ID Number</p>
            <InputGroup className="mb-3">
              <FormControl
                value={idNumber}
                placeholder="Enter ID number.."
                aria-describedby="basic-addon1"
                onChange={(e)=> this.setState({idNumber: e.target.value})}
              />
            </InputGroup>
          </Col>
          <Col>
            <p className='mb-0'>PWD ID</p>
            <InputGroup className="mb-3">
            <FormControl
                value={PWDID}
                placeholder="Enter PWD ID.."
                aria-describedby="basic-addon1"
                onChange={(e)=> this.setState({PWDID: e.target.value})}
              />
            </InputGroup>
          </Col>
        </Row>
        <Col>
          <p className='mb-0'>Name</p>
          <InputGroup className="mb-3">
            <FormControl
              value={name}
              placeholder="Enter name.."
              aria-describedby="basic-addon1"
              onChange={(e)=> this.setState({name: e.target.value})}
            />
          </InputGroup>
        </Col>
        <Row className='px-3'>
          <Col>
            <p className='mb-0'>Age</p>
            <InputGroup className="mb-3">
              <FormControl
                value={age}
                placeholder="Enter age.."
                aria-describedby="basic-addon1"
                onChange={(e)=> this.setState({age: e.target.value})}
              />
            </InputGroup>
          </Col>
          <Col>
            <p className='mb-0'>Birthday</p>
            <InputGroup className="mb-3">
              <input
                type='date'
                className='w-100 py-1'
                value={birthday}
                // placeholder="Enter patient age.."
                aria-describedby="basic-addon1"
                onChange={(e)=> this.setState({birthday: e.target.value})}
              />
            </InputGroup>
          </Col>
        </Row>
        <Col>
          <p className='mb-0'>Address</p>
          <InputGroup className="mb-3">
            <FormControl
              value={address}
              placeholder="Enter address.."
              aria-describedby="basic-addon1"
              onChange={(e)=> this.setState({address: e.target.value})}
            />
          </InputGroup>
        </Col>
        <Col>
          <p className='mb-0'>Contact Number</p>
          <InputGroup className="mb-3">
            <FormControl
              value={contactNum}
              placeholder="Enter contact number.."
              aria-describedby="basic-addon1"
              onChange={(e)=> this.setState({contactNum: e.target.value})}
            />
          </InputGroup>
        </Col>
        <Col>
          <p className='mb-0'>Gender</p>
          <InputGroup className="mb-3">
          <select value={gender} onChange={(e) => this.setState({gender: e.target.value})} className="w-100 py-2" id="inlineFormCustomSelect">
            <option value=''>Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          </InputGroup>
        </Col>
        <Col>
          <p className='mb-0'>Vaccine</p>
          <InputGroup className="mb-3">
          <select value={typeOfVaccine} onChange={(e) => this.setState({typeOfVaccine: e.target.value})} className="w-100 py-2" id="inlineFormCustomSelect">
            <option value=''>Select Vaccine</option>
            {vaccines.map((item,ind)=>{
              return(
                <option disabled={parseInt(item.stock) <= 0} value={item.vaccine}>{item.vaccine}</option>
              )
            })}
          </select>
          </InputGroup>
        </Col>
        <Col>
          <p className='mb-0'>First Dose</p>
          <InputGroup className="mb-3">
            <input
              type='date'
              className='w-100 py-1'
              value={firstDose}
              // placeholder="Enter patient age.."
              aria-describedby="basic-addon1"
              onChange={(e)=> this.setState({firstDose: e.target.value})}
            />
          </InputGroup>
        </Col>
        <Col>
          <p className='mb-0'>Second Dose</p>
          <InputGroup className="mb-3">
            <input
              type='date'
              className='w-100 py-1'
              value={secondDose}
              // placeholder="Enter patient age.."
              aria-describedby="basic-addon1"
              onChange={(e)=> this.setState({secondDose: e.target.value})}
            />
          </InputGroup>
        </Col>
        <Row className='px-3 my-4'>
          <Col>
            <Button className='w-150px height-50px mb-3 float-right no-print' variant="primary" block onClick={()=> window.print()}>
              Print
            </Button>
          </Col>
          <Col>
            <Button className='w-150px height-50px mb-3 float-right no-print' variant="primary" block onClick={()=> this.props.back()}>
              Back
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
 
export default Index;