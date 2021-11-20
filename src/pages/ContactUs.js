import React, { Component } from 'react';
import { Button, Row, Container, Col, FormControl, InputGroup } from 'react-bootstrap';


class Contactus extends Component {
  state = {  }


  componentDidMount = () => {
   let id = this.props.match.params.id
   console.log(id)
  }
  render() { 
    return ( 
      <Container id='contact' fluid className='contact-us padding-container pt-5'>
        <Row className='justify-content-md-center py-5 mt-5'>
          <Col lg={5} xl={4} className='pt-4'>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Name"
                aria-label="Name"
                aria-describedby="basic-addon1"
                onChange={(e)=>this.setState({name: e.target.value})}
                required
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Email"
                aria-label="Name"
                aria-describedby="basic-addon1"
                onChange={(e)=>this.setState({name: e.target.value})}
                required
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                as="textarea"
                rows={6}
                placeholder="Your message.."
                aria-label="Name"
                aria-describedby="basic-addon1"
                onChange={(e)=>this.setState({name: e.target.value})}
                required
              />
            </InputGroup>
            <Col className='text-center px-0'>
              <Button id='sendButton' block className='send-btn'>SEND</Button>
            </Col>
          </Col>
          <Col lg={5} xl={6} className='text-center mt-5 mb-md-5'>
            <p className='dark-blue first-line mt-4'>Send us your</p>
            <p className='dark-blue second-line'> comments, suggestions,</p>
            <p className='dark-blue third-line'>and even complains.</p>
          </Col>
        </Row>
      </Container>
    );
  }
}
 
export default Contactus;