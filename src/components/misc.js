import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container } from 'react-bootstrap';
import ImageGrid from './Photography';
function Misc() {
  return (
    
    <Container fluid>    
    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="Travel" id = 'Travel' title="Travel">
        
        
        Tab content for Travel





      </Tab>
      <Tab eventKey="profile" title="Animals">
        Tab content for Animals
      </Tab>
      <Tab eventKey="longer-tab" title="Photography">

        <h4>Photography Portfolio</h4>
        <ImageGrid />
      </Tab>
      <Tab eventKey="contact" title="Blog">
        Blogs
      </Tab>
    </Tabs>


    <hr style={{ background: '#403D58', color: '#403D58', borderColor: '#403D58', height: '3px', zIndex: 10, width: '100%', opacity: 1, margin: 0}} />

    <hr style={{ background: '#403D58', color: '#403D58', borderColor: '#403D58', height: '3px', zIndex: 10, width: '100%', opacity: 1, margin: 0,  marginTop: '1px'}} />

    </Container>
  );
}

export default Misc;