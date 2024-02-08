import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import './components.css'

import { scroller } from "react-scroll";
// import Scroll from 'react-scroll'
// function onClick(divid) {
//     const anchor = document.getElementById(divid)

//     anchor.scrollIntoView({ behavior: 'smooth', block: 'center' })
//     };

function Navigation_bar() {

    return (
     

        <Navbar sticky = 'top' expand="lg" className="bg-navbar" data-bs-theme="dark" >
        <Container >
            <Navbar.Brand  href = '/'><i class="fa fa-fw fa-home"></i> &nbsp;Ishan Sabane</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
            
            <Nav  className="justify-content-end">
            {/* <Nav.Link  href="/"
            onSelect={() => scroller.scrollTo('Misc', {
                smooth: true,
                offset: 70,
                duration: 500,
            })}
            >
            
            
                <i class="fa fa-info-circle" aria-hidden="true"></i>
                &nbsp;About
            
            </Nav.Link> */}
            <Nav.Link  href="/"><i class="fa fa-briefcase" aria-hidden="true"></i> &nbsp; Work Experience</Nav.Link>
            <Nav.Link href="/"><i class="fa fa-flask" aria-hidden="true"></i> &nbsp;Projects</Nav.Link>
            
            <NavDropdown  title="Misc" id="collasible-nav-dropdown">
              <NavDropdown.Item href="/">Travel</NavDropdown.Item>
              <NavDropdown.Item href="">Animals </NavDropdown.Item>
              <NavDropdown.Item href="">Photography</NavDropdown.Item>
              
              <NavDropdown.Divider />
              
              <NavDropdown.Item  href="/">Blog</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link  href="/">Contact</Nav.Link>

        </Nav>
        </Navbar.Collapse>
        </Container>

    </Navbar>

    );




}


export default Navigation_bar;