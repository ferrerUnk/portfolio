import React, { Component } from 'react';
import { Col, Row} from 'react-bootstrap';

class Index extends Component {
  state = {
  }
  render() { 
    const {data}=this.props;
    console.log(data)
    return ( 
      <Row className='bg-white my-5'>
        <Col xs={12} md={5} lg={4}>
          <img className='img-size mx-5 mx-lg-2' src={data.img} alt={data.name}/>
        </Col>
        <Col xs={12} md={6} lg={7} className='ml-5 ml-md-2 ml-lg-2'>
          <p className='name'>{data.name}</p>
          <p className='text-30'>Price: {data.price}</p>
          <p className='text-30'>Quantity: {data.quantity}</p>
          <p className='text-30'><i onClick={()=> alert('Under Development.')} class="fa fa-cart-plus mr-5" aria-hidden="true"></i><i onClick={()=> alert('Under Development.')} class="fa fa-list-alt ml-5" aria-hidden="true"></i></p>
        </Col>
      </Row>
    );
  }
}
 
export default Index;