import Container from 'react-bootstrap/Container';
import { Row, Col, Card, Carousel } from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';


function playmusic(event) {
    console.log(event)
    
    

}



function Contact() {


    return (


            <Container>
                {/* <Row>
                    <h3>Let's Connect</h3>
                </Row> */}
        
                <Row> 

                    <Col> 
                        <a href='mailto:ishancs@stanford.edu'>
                            <i class="fa fa-envelope fa-2x"></i>
                        </a>

                    </Col>



                    <Col> 
                    <a href='https://github.com/IshanSabane'>
                        <i class="fa fa-github fa-2x"></i>
                    </a>

                    </Col>




                    <Col>
                        <a href='https://www.linkedin.com/in/ishancs/'> 
                            <i class="fa fa-linkedin fa-2x">
                            </i>
                        </a>
                    
                    </Col>


                    <Col> 
                        <a href = "">
                            <i class="fa fa-twitter fa-2x"></i>
                        </a>
                    </Col>


                    <Col> 
                        <a href = "">
                            <i class="fa fa-instagram fa-2x"></i>
                        </a>

                    </Col>

                </Row>

                <Row> 
                    <div style={{padding: '10px'}}>
    
                    </div>
                </Row>

            
            </Container>
    );





}

export default Contact;