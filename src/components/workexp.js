
import { Container, Row, Col, Card} from "react-bootstrap";
import './components.css';
import snowflake from './images/snowflake.svg';
import philips from './images/philips.png';
import prodapt from './images/prodapt.jpg';


// import sample from './space_travel.mp4';

function Workexp(){


    return (

    <Container fluid style = {{backgroundColor:'linear-gradient(0.25turn, #FC7753, #ebf8e1)', margin: 0 }}> 
        
        <div id = 'workbackground' >
        <Container>
        <br></br>
        <h4>Work Experience</h4>     
        {/* <Container> */}
        <Row className="g-6">
            <Col>
            <Card bsPrefix="customcard">
                
                <Card.Title>
                    Snowflake Inc.
                </Card.Title>
                
                <Card.Body>
                    <Card.Text>
                        Data Science Intern
                    </Card.Text>
                </Card.Body>
                
                <Card.Img src= {snowflake} bsPrefix="clogo" className="text-center"> 
                </Card.Img>
                
                <Card.Footer>
                    Jul-Sep 2023
                </Card.Footer>
            </Card>
            </Col>

            <Col>
            <Card bsPrefix="customcard">
                <Card.Title>Philips Inc.</Card.Title>
                
                <Card.Body>

                <Card.Text>
                    Data Science Intern                
                </Card.Text>

                 
             
                </Card.Body>
                <Card.Img src= {philips} bsPrefix="clogo"></Card.Img>

                <Card.Footer>Dec-Jun 2021</Card.Footer>
               
            </Card>
            </Col>

            <Col>
            <Card bsPrefix="customcard">
                <Card.Title>Prodapt Solutions</Card.Title>

                <Card.Body>
                <Card.Text>
                   Machine Learning Intern                
                </Card.Text>
                </Card.Body>
                <Card.Img src= {prodapt} bsPrefix="clogo"></Card.Img>
                <Card.Footer>Jul-Sep 2020</Card.Footer>
               
            </Card>
            </Col>
        </Row>
       

        </Container>
        </div>
        {/* <hr style={{ background: '#403D58', color: '#403D58', borderColor: '#403D58', height: '3px', zIndex: 10, width: '100%', opacity: 1, margin: 0,  marginTop: '1px'}} />
        */}
        {/* <hr style={{ background: '#403D58', color: '#403D58', borderColor: '#403D58', height: '3px', zIndex: 10, width: '100%', opacity: 1, margin: 0}} />

        <hr style={{ background: '#403D58', color: '#403D58', borderColor: '#403D58', height: '3px', zIndex: 10, width: '100%', opacity: 1, margin: 0,  marginTop: '1px'}} /> */}

    </Container>



    );


}


export default Workexp;

