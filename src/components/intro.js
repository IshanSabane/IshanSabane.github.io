import Container from 'react-bootstrap/Container';
import { Row, Col, Carousel } from 'react-bootstrap';
import './components.css'

import image from './images/ReadyPlayerMe-Avatar.png'
import fullimage from './images/ReadyPlayerMe-Full.png'
function Intro() { 


    return (
    <Container fluid>
    
        <div id='introbackground' >
        <Row>
            <Col>
                <div className = 'intro' id = 'headline' style={{height: '600px'} }>
                    Hey There! I am Ishan, a second year Masters student in the department of Electrical Engineering at Stanford. I completed by integrated dual degree in Engineering Design with a focus on automotive control systems and Data Science from Indian Institute of Technology, Madras. 
                    <br></br>
                    
                    I am currently working as a student researcher in Stanford Medical School focusing on image simplification, saliency mapping  for artificial vision. I am interested in developing scalable, robust and real-time applications and devices for healthcare, finance and climate change leveraging cloud computing, edge computing,  machine learning and data science.  
                    
                </div>
            </Col>
            
            <Col>
                {/* <img src={image} style={{height: '600px'} } /> */}
                <img src={fullimage} style={{height: '600px'}} alt='myavatar' />

            </Col>    
        </Row>
    
        </div>
        <div className='carousel'>


            {/* <hr style={{ background: '#403D58', color: '#403D58', borderColor: '#403D58', height: '3px', zIndex: 10, width: '100%', opacity: 1, margin: 0}} />

            <hr style={{ background: '#403D58', color: '#403D58', borderColor: '#403D58', height: '3px', zIndex: 10, width: '100%', opacity: 1, marginTop: '1px'}} /> */}
            {/* 
            <hr style={{ background: '#403D58', color: '#403D58', borderColor: '#403D58', height: '3px', zIndex: 10, width: '102%', opacity: 1, marginTop: '1px', marginLeft: '-1%', marginRight: '0%',  padding: '0'}} /> */}

            {/* <Row>
              
            </Row> */}
            {/* <Carousel data-bs-theme="dark" style = {{height: "224px", padding: '0%', opacity: 0.8}} id ='updates'>
                

                <Carousel.Item interval={1000}>
                        <h3>Ongoing Work</h3>
                        <p>Student Researcher working on Image Simplification for Artificial Vision. Scene Segmentation and Understanding for User Navigation in Super Low Resolution Setting.</p>
                </Carousel.Item>

                <Carousel.Item>
                    <h3>Personal Projects</h3>
                    <p> Large Scale Web Scrapper to Dynamically update Image Models.</p>
   
                </Carousel.Item>
            </Carousel> */}
            {/* <hr style={{ background: '#403D58', color: '#403D58', borderColor: '#403D58', height: '3px', zIndex: 10, width: '100%', opacity: 1, margin: 0}} />

            <hr style={{ background: '#403D58', color: '#403D58', borderColor: '#403D58', height: '3px', zIndex: 10, width: '100%', opacity: 1, margin: 0,  marginTop: '1px'}} /> */}
{/* 
{/*            
            <hr style={{ background: '#403D58', color: '#403D58', borderColor: '#403D58', height: '3px', zIndex: 10, width: '103%', opacity: 1, margin: 0, marginLeft: '-2%', marginRight: '-1%',  padding: '0'}} />


            <hr style={{ background: '#403D58', color: '#403D58', borderColor: '#403D58', height: '3px', zIndex: 10, width: '104%', opacity: 1, marginTop:'1px', marginLeft: '-3%', marginRight: '0',  padding: '0'}} /> */}

{/*            
            <hr style={{ background: '#403D58', color: '#403D58', borderColor: '#403D58', height: '3px', zIndex: 10, width: '102%', opacity: 1, margin: 0, marginLeft: '-1%', marginRight: '0%',  padding: '0'}} /> */}

        </div>
    </Container>







    );



}


export default Intro;