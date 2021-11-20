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
    let genderData = await getData('gender')
    this.setState({genderData})
    let barangayList = await getVaccine('vaccine', this.Callback);
  }

  Callback = (data) => {
    console.log(data, '-----------')
    this.setState({vaccines: data})
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
      birthday,
      contactNum,
      genderData} = this.state;
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
      "typeOfVaccine" : typeOfVaccine,
      contactNum,
      birthday
    }
    let id = new Date().getTime();
    let save = await setData(`vaccinated/${id}`, data);
    console.log(save, data);
    if(save.response == 'success'){
      this.HandleLessVaccineStocks(typeOfVaccine)
      this.HandleAddAge(age)
      if(gender == 'Male'){
        let genData = parseInt(genderData.Male) + 1
        await setData('gender/Male', genData)
        this.props.click()
      }
      if(gender == 'Female'){
        let genData = parseInt(genderData.Female) + 1
        await setData('gender/Female', genData)
        this.props.click();
      }
    }else{
      alert('Something went wrong, Please try again later.')
    }
  }

  HandleLessVaccineStocks = async(typeOfVaccine) => {
    let vacc = await getData(`vaccine/${typeOfVaccine}`),
    data = {
      stock: parseInt(vacc.stock) - 1,
      used: parseInt(vacc.used) + 1,
      total: parseInt(vacc.total)
    }
    let setVacc = await setData(`vaccine/${typeOfVaccine}`, data)
  }

  HandleAddAge = async(age) => {
    let a = [ 1, 2, 3, 4, 5, 6, 7 ,8 ,9, 10],
      b = [11, 12, 13, 14, 15, 16, 17, 18 ,19, 20],
      c = [21, 22, 23, 24, 25, 26, 27, 28 ,29, 30],
      d= [31, 32, 33, 34, 35, 36, 37, 38 ,39, 40],
      e = [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
      f = [51, 52, 53, 54, 55, 56, 57, 58, 59 ,60],
      g =[61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
      h= [71, 72, 73, 74, 75, 76, 77, 78, 79 ,80],
      i = [81, 82, 83, 84, 85, 86, 87, 88, 89, 90];

      console.log(age, 'aaaaaaaaagggggggggeeeeeeeeeee', a.includes(parseInt(age)))
    if(a.includes(parseInt(age))){
      let temp = await getData(`age/1-10`),
       saveAge = parseInt(temp) + parseInt(age)
       let data = await setData('age/1-10', saveAge)
    }
    if(b.includes(parseInt(age))){
      let temp = await getData(`age/11-20`),
       saveAge = parseInt(temp) + 1
       let data = await setData('age/11-20', saveAge)
    }
    if(c.includes(parseInt(age))){
      console.log(age, 'c')
      let temp = await getData(`age/21-30`),
       saveAge = parseInt(temp) + 1
       let data = await setData('age/21-30', saveAge)
    }
    if(d.includes(parseInt(age))){
      console.log(age, 'd')
      let temp = await getData(`age/31-40`),
       saveAge = parseInt(temp) + 1
       let data = await setData('age/31-40', saveAge)
    }
    if(e.includes(parseInt(age))){
      console.log(age, 'e')
      let temp = await getData(`age/41-50`),
       saveAge = parseInt(temp) + 1
       let data = await setData('age/41-50', saveAge)
    }
    if(f.includes(parseInt(age))){
      console.log(age, 'f')
      let temp = await getData(`age/51-60`),
       saveAge = parseInt(temp) + 1
       let data = await setData('age/51-60', saveAge)
    }
    if(g.includes(parseInt(age))){
      console.log(age, 'g')
      let temp = await getData(`age/61-70`),
       saveAge = parseInt(temp) + 1
       let data = await setData('age/61-70', saveAge)
    }
    if(h.includes(parseInt(age))){
      console.log(age, 'h')
      let temp = await getData(`age/71-80`),
       saveAge = parseInt(temp) + 1
       let data = await setData('age/71-80', saveAge)
    }
    if(i.includes(parseInt(age))){
      console.log(age, 'i')
      let temp = await getData(`age/81-90`),
       saveAge = parseInt(temp) + 1
       let data = await setData('age/81-90', saveAge)
    }
    if(age >= 91){
      console.log(age, '91+')
      let temp = await getData(`age/91+`),
       saveAge = parseInt(temp) + 1
       let data = await setData('age/91', saveAge)
    }
  }

  render() {
    let { show ,PWDID, PhilheathID, address,  age, idNumber, name, placeOfVac, vaccines,
        // secondDose,
        // typeOfVaccine,
        contactNum } = this.state;
    return ( 
      <Container className='overflow-auto printme'>
        <p className='listTitle mb-3'>ADD VACCINATED</p>
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
            <select onChange={(e) => this.setState({category: e.target.value})} className="w-100 py-2" id="inlineFormCustomSelect">
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
                // value={contactNum}
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
                // value={firstDose}
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
          <select onChange={(e) => this.setState({gender: e.target.value})} className="w-100 py-2" id="inlineFormCustomSelect">
            <option value=''>Select gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          </InputGroup>
        </Col>
        <Col>
          <p className='mb-0'>Vaccine</p>
          <InputGroup className="mb-3">
          <select  onChange={(e) => this.setState({typeOfVaccine: e.target.value})} className="w-100 py-2" id="inlineFormCustomSelect">
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
              // value={firstDose}
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
              // value={firstDose}
              // placeholder="Enter patient age.."
              aria-describedby="basic-addon1"
              onChange={(e)=> this.setState({secondDose: e.target.value})}
            />
          </InputGroup>
        </Col>
        <Row className='px-3 my-4'>
          <Col>
            <Button className='w-150px height-50px mb-3 float-right' variant="primary" block onClick={()=> this.AddVaccinated()}>
              SAVE
            </Button>
          </Col>
          <Col>
            <Button className='w-150px height-50px mb-3 float-right' variant="danger" block onClick={()=>this.props.click()}>
              CANCEL
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}
 
export default Index;