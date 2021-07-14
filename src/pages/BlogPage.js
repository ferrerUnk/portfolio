import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap'
import bImg1 from '../assets/images/offroad.jpg'
import bImg2 from '../assets/images/racerider.jpg'
import bImg3 from '../assets/images/halfFace.jpg'
import img from '../assets/images/img.png'
class Index extends Component {
  state = { 
    data: [
      {
          id: 1,
        title: 'OFFROAD HELMETS?',
        subTitle: 'Read below what is offroad helmet is.',
        content: "You have purchased a dirt bike, and now you want to set off on that off-road expedition. However, wait! You will first have to buy an offroad motorbike helmet. Riding your dirt bike is exciting, but there are risks involved. There could be an accident, and this is more common when you are riding your dirt bike. Thus it is essential that you make sure that you buy motorbike helmets and invest in a good quality offroad helmet. The offroad Motorbike helmets protect the most vital part of your body, which is the brain. It would help if you did as much research about buying the helmet as you did to buy your bike",
        img: bImg1, 
        author: 'Admin Name-1',
        date: 'May 20, 2020'
      },
      {
        id: 1,
      title: 'Racetrack HELMETS?',
      subTitle: 'Read below how safe race track helmets.',
      content: "Full faced helmets are, without a doubt the best helmet design that ensures the safety of the rider when he is riding his motorbike. The entire helmet covers the face, and the piece is made into a single item that leaves no hinges of weak points. For those who want to go on a long ride or even for those who have just started to ride a motorbike, there can be no better design than to choose a full-face helmet and buy motorbike helmets. It gives you protection even when you are riding your motorcycle at high speed. The equipment fits snugly on your head and is comfortable to wear for long hours. The full-face helmets get designed such that they are light in weight that does not let the wearer feel uncomfortable because of the extra weight.",
      img: bImg2, 
      author: 'Admin Name-1',
      date: 'June 19, 2020'
    },
    {
      id: 1,
      title: 'Half Face HELMETS?',
      subTitle: 'Read below what is half face helmet is.',
      content: "An open face helmet is a motorbike helmet with no visor blocking your view of the road. They may come with a retractable or removable visor, but the result is the same. You get a glorious, unimpeded, 180-degree view of the scenery on your ride. Open face helmets are so desirable because of the nostalgia they evoke for a bygone time in biking. Full face helmets only started to become popular in the 70s and 80s, with the rising TV audiences and following for motorcycle racing events such as the Isle of Man TT and MotoGP.",
      img: bImg3, 
      author: 'Admin Name-1',
      date: 'July 10, 2020'
    },
    ]
   }
  render() { 
    return ( 
      <Container fluid className='pt-5 px-0'>
        <Col className='mt-3 px-0 blog-head-bg'>
          <img alt='img-banner' className='blog-banner-img' src={img}/>
          <p className='blog-header pt-5 pl-5 ml-5'>Blogs....</p>
          <p className='text-30 line-1 text-raleway text-center'>Want to know more about helmets?</p>
          <p className='text-30 line-1 text-raleway pb-5 text-center'>Read some of our blogs below.</p>
        </Col>
        {
          this.state.data.map((val,ind)=>{
            return(
              <>
                <Row className='my-5 px-3'>
                  <Col>
                    <img className='blogImg' src={val.img} alt={val.title}/>
                  </Col>
                  <Col>
                    <p className='blog-title mb-0'>{val.title}</p>
                    <p className='sub-title'>{val.subTitle}</p>
                    <p>{val.content}</p>
                    <p>Author: {val.author}</p>
                    <p>Date: {val.date}</p>
                    <Col lg={{span: 5, offset: 3}}>
                      <Button variant="primary" block onClick={()=>alert('Under development')}>
                        READ MORE
                      </Button>
                    </Col>
                  </Col>
                </Row>
                <hr className='my-0 bg-hr'/>
              </>
            )
          })
        }
      </Container>
    );
  }
}
 
export default Index;