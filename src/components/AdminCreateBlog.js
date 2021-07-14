import React, { Component } from 'react';
import { Container, InputGroup , FormControl, Col, Button, Form} from 'react-bootstrap';

class Index extends Component {
  state = { 
    title: '',
    sub: '',
    content: ''
   }
  render() { 
    const {title, content, sub} = this.state
    return ( 
      <Container>
        <p className='listTitle'>Create Blog</p>
        <Col className='py-3'>
          <Form.File id="formcheck-api-regular">
            <Form.File.Label>Choose image for your blog</Form.File.Label>
            <Form.File.Input />
          </Form.File>
        </Col>
        <Col>
          <label htmlFor="basic-url">Blog Title</label>
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
          <label htmlFor="basic-url">Blog Sub Title</label>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Enter blog Title"
              value={sub}
              onChange={(e)=>this.setState({sub: e.target.value})}
              aria-label="title"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
        <Col>
          <label htmlFor="basic-url">Blog Content</label>
          <InputGroup className="mb-3">
            <FormControl
              as='textarea'
              rows='5'
              value={content}
              placeholder="Enter content here"
              onChange={(e)=>this.setState({content: e.target.value})}
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
        <Col md={{span: 3,offset: 5}}>
          <Button variant="primary" block onClick={()=> alert('Under Development')}>
            Create Blog
          </Button>
        </Col>
      </Container>
    );
  }
}
 
export default Index;