import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './components.css';
import { Container } from 'react-bootstrap';
import sample from './backgroundnetwork.mp4'
import RApng from './images/RA.png'
import Mislabels from './images/AICC.png'
import IOT from './images/DDP.png'
var titles = Array("Image Simplification for Prosthetic Vision", 
                   'Automated Mislabel Detection in Real World Vision Datasets',
                   'Machine Learning Network Anomaly Detection Framework');
 
var images = Array(RApng, Mislabels, IOT);

var details = {
  "Image Simplification for Prosthetic Vision":"", 
  'Automated Mislabel Detection in Real World Vision Dataset':"",
  'Machine Learning Network Anomaly Detection Framework':""
}; 

function Research() {
  return (

    <Container fluid  style = {{backgroundColor:'linear-gradient(0.25turn, #FC7753, #ebf8e1)', margin: 0 }}>
    {/* <br></br>  */}
        
   
    {/* <Container> */}
    <div id = 'workbackground'> 
    <Container>
    <h4>Research Projects</h4>     
    
    

    <Row xs={1} md={3} className="g-6">
      {Array.from({ length: 3 }).map((_, idx) => (
        <Col key={idx}>
          <Card  bsPrefix="customcard">
            <Card.Body>
              <Card.Title>{titles[idx]}</Card.Title>
              
            </Card.Body>
            <Card.Text>
              
              {details[titles[idx]]}
              
              </Card.Text>
            <Card.Img src = {images[idx]} style ={{"height":"224px"}}>
            </Card.Img>
        
          </Card>
        </Col>
      ))}
    </Row>
    
    {/* <hr style={{ background: 'lime', color: 'lime', borderColor: 'lime', height: '3px',}} /> */}
  
    {/* </Container> */}
    <video className='background-video' autoPlay loop muted>
        <source src={sample} type='video/mp4' />
    </video>


{/* 
    <hr style={{ background: '#403D58', color: '#403D58', borderColor: '#403D58', height: '3px', zIndex: 10, width: '100%', opacity: 1, margin: 0}} />

    <hr style={{ background: '#403D58', color: '#403D58', borderColor: '#403D58', height: '3px', zIndex: 10, width: '100%', opacity: 1, margin: 0,  marginTop: '1px'}} /> */}

    </Container>
    </div>
    </Container>
    
  );
}

export default Research;