import React, { Component } from 'react';
import { Container, Col, Row, Button, Modal, InputGroup, FormControl } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator';
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import { getStaff, setData } from '../reducer/firebase';

const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total ml-3">
    Showing { from } to { to } of { size } entries
  </span>
)

const columns = [
  {
    dataField: 'name',
    text: 'Staff Name',
    // sort: true,
    csvText: 'CSV Name'
  },
  {
    dataField: 'email',
    text: 'Email',
    // sort: true,
    csvText: 'CSV Name'
  },
];

class Index extends Component {
  state = {
    staffList: [],
    show: false,
    addStaffName: '',
    addStaffEmail: ''
   }
  
  componentDidMount = async() => {
    let staffList = await getStaff('staff', this.Callback);
    console.log(staffList)
  }

  Callback = (data) => {
   console.log(data, '-----------')
   this.setState({staffList: data})
  }

  HandleAddStaff = async() => {
    let { addStaffName, addStaffEmail } = this.state;
    let data = {
      name: addStaffName,
      email: addStaffEmail,
      // total: saveTotal
    }
    let id = new Date().getTime()
    console.log(id)
    let save = await setData(`staff/${id}`, data);
    console.log(save, data);
    if(save.response == 'success'){
      this.setState({show: false})
      await getStaff('staff', this.Callback);
    }else{
      alert('Something went wrong, Please try again later.')
    }
  }


  HandleAddStaffModal = () => {
    let { show ,addStaffName, addStaffEmail } = this.state;
    return(
      <Modal show={show} onHide={()=> this.setState({show: false})}>
        <Modal.Header closeButton>
          <Modal.Title>ADD Staff</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Col>
            <p className='mb-0'>Staff Name</p>
            <InputGroup className="mb-3">
              <FormControl
                value={addStaffName}
                placeholder="Enter stocks available.."
                aria-describedby="basic-addon1"
                onChange={(e)=> this.setState({addStaffName: e.target.value})}
              />
            </InputGroup>
          </Col>
          <Col>
            <p className='mb-0'>Email</p>
            <InputGroup className="mb-3">
              <FormControl
                value={addStaffEmail}
                placeholder="Enter stocks available.."
                aria-describedby="basic-addon1"
                onChange={(e)=> this.setState({addStaffEmail: e.target.value})}
              />
            </InputGroup>
          </Col>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=> this.setState({show: false})}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> this.HandleAddStaff()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    )
  }

  render() {
    let { staffList } = this.state;
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
        text: 'All', value: staffList.length
      }] // A numeric array is also available. the purpose of above example is custom the text
    };

    return ( 
      <Container className='overflow-auto'>
        <p className='listTitle mb-0'>Staff</p>
        <Button className='w-auto mb-3 float-right' variant="primary" block onClick={()=> this.setState({show: true})}>
          <Icon
            name='plus'
            font='FontAwesome'
            color='white'
            size={20}
            style={{marginRight: 10}}
          />ADD STAFF
        </Button>
        <BootstrapTable
          id='customTable'
          bootstrap4 
          keyField='id' 
          data={staffList} 
          columns={ columns } 
          pagination={ paginationFactory(options) } 
          // defaultSorted = { defaultSorted }
          striped
          hover 
          wrapperClasses="table-responsive"
        />
        {this.HandleAddStaffModal()}
      </Container>
    );
  }
}
 
export default Index;