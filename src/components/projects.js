import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './components.css';
import { Container } from 'react-bootstrap';
import NLP from './images/NLP.png';
import MLG from './images/MLG.png';
import N3DG from './images/3DG.png';
import IC from './images/IC.png'
import RL from './images/RLTask.png'
import DB from './images/Database.png'
import sample from './backgroundnetwork.mp4'

var titles = Array( "Natural Language Processing", "Machine Learning With Graphs", "Neural Networks for 3D Generation", "Deep Reinforcement Learning", "Data Base Systems", "Image Classification");

var images = Array(NLP, MLG, N3DG,RL,DB,IC);

var details = {
 
  "Deep Reinforcement Learning": "Training a Robotic Arm to complete different tasks in a single life without any resets to original position.",
  
  "Neural Networks for 3D Generation": "Size Aware 3D reconstruction of Garments. Training SizerNet for predictiong garment fit on SMPL bodies.",
 
  "Natural Language Processing": "Multitasking Using BerT and Robust Embeddings for Sentiment Analysis, Paraphrase Detection and Semantic Textual Similarity",

  "Machine Learning With Graphs": "Quantization Aware Training for Graph Neural Networks. Implementing Degree Quant Method in PyG.",

  "Data Base Systems": "Processing Large Scale Air Quality for Data Predicting Anomalous Climate Change Events based on air contents present in a given location", 

  "Image Classification": "Scalable Real-Time Optical Character Recognition of Devnagri Characters for Captioning leveraging image feature engineering techniques."
}; 


function Projects() {
  return (
    <Container fluid >
  
   
    
    <div id='workbackground'>
    <Container>
      <h4>Academic Projects</h4>     
   
    

    <Row xs={1} md={3} className="g-6">
      {Array.from({ length: 6 }).map((_, idx) => (
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
  
    </Container>
    {/* <video className='background-video' autoPlay loop muted>
        <source src={sample} type='video/mp4' />
    </video> */}

    </div>
{/* 
    <hr style={{ background: '#403D58', color: '#403D58', borderColor: '#403D58', height: '3px', zIndex: 10, width: '100%', opacity: 1, margin: 0}} />

    <hr style={{ background: '#403D58', color: '#403D58', borderColor: '#403D58', height: '3px', zIndex: 10, width: '100%', opacity: 1, margin: 0,  marginTop: '1px'}} /> */}



    </Container>
  );
}

export default Projects;