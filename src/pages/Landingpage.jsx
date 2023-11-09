import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';

function Landingpage() {

  const navigativeByUrl = useNavigate()

  return (
    <> 
        <Row>
        <Col></Col>
    
        <Col lg={5}>
          <h2 className='mt-5'>Welcome to <span className='text-warning'> Media player</span> </h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint architecto debitis eveniet non officia atque numquam blanditiis quasi obcaecati. Commodi dolorem, totam assumenda quas esse molestiae repellendus placeat at doloribus!
           <p style={{textAlign:'justify'}}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi corporis facilis quaerat. Voluptates vero laudantium quis ullam architecto at quasi hic blanditiis quo sequi animi, commodi expedita illo quae officiis.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, quibusdam aliquam amet nesciunt aliquid rerum autem doloremque, officia assumenda in, non illum adipisci! Vel commodi illo rerum quos! Est, facilis!
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore magnam molestiae nisi, esse consequuntur in laudantium aspernatur aliquid, dolorum perspiciatis corporis, neque rerum dolorem cupiditate at vitae ducimus nulla ab?
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem quo dolore tempora vitae ex qui itaque ea voluptas eos reprehenderit, fugiat quos expedita, adipisci, amet inventore illum quasi! Sed, quisquam.
           </p>
           <button onClick={()=>navigativeByUrl('/homepage')} className='btn btn-info mt-5 ' >Get Started</button>
          
        </Col>
    
        <Col></Col>
    
        <Col lg={5} className='mt-4'>
          <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" />
        </Col>
    
        </Row>
    
        <div className="container d-flex  justify-content-center alighn-items-center w-100 mt-5 mb-5 flex-column">
            <h2 className=' d-flex  justify-content-center alighn-items-center '>Features</h2>
            <div className="cards  d-flex justify-content-center alighn-items-center mt-5">
    
        <Card className='p-4 me-4' style={{ width: '22rem' }}>
          <Card.Img style={{width:'100%',height:'300px'}} variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
          <Card.Body>
            <Card.Title>Managing Video</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
    
        <Card className='p-4 me-4' style={{ width: '22rem' }}>
          <Card.Img  style={{width:'100%',height:'300px'}} variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
          <Card.Body>
            <Card.Title>Categorized Video</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
    
        <Card className='p-4 me-4' style={{ width: '22rem' }}>
          <Card.Img  style={{width:'100%',height:'300px'}} variant="top" src="https://i.pinimg.com/originals/48/c6/12/48c61262980bb7dbf2557940d41c7d0b.gif" />
          <Card.Body>
            <Card.Title>Watch History</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
    
       
            </div>
            
          </div>
    
        <div className="container border border-2 rounded border-secondary p-5 mt-5 mb-5">
          <Row>
            <Col></Col>
            <Col lg={5}>
              <h3 className='text-warning'>Simple fast and powerful</h3>
              <p><span className='fs-5 fw-bolder'>Play Everything</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque omnis harum corporis fugiat dolore nisi. Cupiditate eos, sit atque, vero distinctio quidem esse necessitatibus quisquam velit neque ut ullam sint! Lorem ipsum dolor sit amet consectetur, adipisicing elit.  </p>
              <p><span className='fs-5 fw-bolder'>Play Everything</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque omnis harum corporis fugiat dolore nisi. Cupiditate eos, sit atque, vero distinctio quidem esse necessitatibus quisquam velit neque ut ullam sint! Lorem ipsum dolor sit amet consectetur, adipisicing elit.  </p>
              <p><span className='fs-5 fw-bolder'>Play Everything</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque omnis harum corporis fugiat dolore nisi. Cupiditate eos, sit atque, vero distinctio quidem esse necessitatibus quisquam velit neque ut ullam sint! Lorem ipsum dolor sit amet consectetur, adipisicing elit.  </p>
            </Col>
            <Col></Col>
            <Col lg={6}>
            <iframe className='mt-3' width="580" height="360" src="https://www.youtube.com/embed/WWr9086eWtY?si=DJz4fG1QrGBiNc6R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Col>
          </Row>
    
        </div>
    </>
  )
}

export default Landingpage