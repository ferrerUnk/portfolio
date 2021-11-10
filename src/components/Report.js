import React, { Component } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import BootstrapTable from 'react-bootstrap-table-next'
import paginationFactory from 'react-bootstrap-table2-paginator';
import Icon, { FontAwesome, Feather } from 'react-web-vector-icons';
import BarChart from 'react-bar-chart';
import { PieChart } from 'react-minimal-pie-chart';
import { Doughnut, Line } from 'react-chartjs-2';
import { getStaff, getData } from '../reducer/firebase';

const customTotal = (from, to, size) => (
  <span className="react-bootstrap-table-pagination-total ml-3">
    Showing { from } to { to } of { size } entries
  </span>
)

const data = [
    {text: 'Man', value: 500}, 
    {text: 'Woman', value: 300} 
  ];

  const testdata = [
    {text: '0-9', value: 10}, 
    {text: '10-20', value: 20},
    {text: '21-30', value: 150},
    {text: '31-40', value: 170},
    {text: '41-50', value: 255},
    {text: '51-60', value: 130},
    {text: '61-70', value: 413},
    {text: '71-80', value: 88},
    {text: '81-90', value: 10000},
    {text: '91-100', value: 110},
  ];
   
const margin = {top: 20, right: 20, bottom: 30, left: 90};

const columns = [
  {
    dataField: 'name',
    text: 'Barangay',
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
    barangayList: [],
    gender: {},
    genderData: []
   }
  
  componentDidMount = async() => {
    let barangayList = await getStaff('staff', this.Callback);
    console.log(barangayList)
    let getGender = await getData('gender')
    console.log(getGender, '///////////////')
    this.setState({gender: getGender})
    let temp = [
      {text: 'Male', value: getGender.Male},
      {text: 'Female', value: getGender.Female}
    ]
    this.setState({genderData: temp})
  }
  

  Callback = (data) => {
   console.log(data, '-----------')
   this.setState({barangayList: data})
  }

  render() {
    let { barangayList, genderData } = this.state;
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
    const data2 ={
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    }

    const linedata = {
      labels: ['1', '2', '3', '4', '5', '6'],
      datasets: [
        {
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          fill: false,
          backgroundColor: 'rgb(255, 99, 132)',
          borderColor: 'rgba(255, 99, 132, 0.2)',
        },
      ],
    };
    
    const lineoptions = {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    };

      return ( 
      <Container className='overflow-auto'>
        <p className='listTitle py-3'>Reports for Vaccinated Persons</p>
        {/* <BootstrapTable
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
        /> */}
        <Row>
          <Col lg={6}>
        <Doughnut data={data2} />
        </Col>
        <BarChart ylabel='Quantity'
          width={500}
            height={500}
            margin={margin}
            data={genderData}
            onBarClick={this.handleBarClick}/>
        </Row>
        <BarChart ylabel='Quantity'
            width={1000}
            height={500}
            margin={margin}
            data={testdata}
            onBarClick={this.handleBarClick}/>
      </Container>
    );
  }
}
 
export default Index;