import React, { Component } from 'react';
import { Container, InputGroup , FormControl, Col, Button, Form} from 'react-bootstrap';

class Index extends Component {
  state = { 
    title: '',
    price: '',
    desc: ''
   }
  render() { 
    const {title, price, desc} = this.state
    return ( 
      <Container>
        <p className='listTitle'>Add Item</p>
        <Col className='py-3'>
          <Form.File id="formcheck-api-regular">
            <Form.File.Label>Choose image for the item</Form.File.Label>
            <Form.File.Input />
          </Form.File>
        </Col>
        <Col>
          <label htmlFor="basic-url">Item Name</label>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Enter blog Title"
              value={title}
              onChange={(e)=>this.setState({title: e.target.value})}
              aria-label="title"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
        <Col>
          <label htmlFor="basic-url">Item Price</label>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Enter blog Title"
              value={price}
              onChange={(e)=>this.setState({price: e.target.value})}
              aria-label="title"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
        <Col>
          <label htmlFor="basic-url">Item Description</label>
          <InputGroup className="mb-3">
            <FormControl
              as='textarea'
              rows='5'
              value={desc}
              placeholder="Enter content here"
              onChange={(e)=>this.setState({desc: e.target.value})}
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
        <Col md={{span: 3,offset: 5}}>
          <Button variant="primary" block onClick={()=> alert('Under Development')}>
            Add Item
          </Button>
        </Col>
      </Container>
    );
  }
}
 
export default Index;