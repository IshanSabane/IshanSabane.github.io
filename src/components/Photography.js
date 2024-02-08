import React, { useState, useEffect } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import img1 from './images/ReadyPlayerMe-Full.png'
import './components.css'

const totalImages = 20; // Total number of images

const getRandomSize = () => {
  const sizes = ['small', 'medium', 'large'];
  return sizes[Math.floor(Math.random() * sizes.length)];
};

const generateGrid = (numImages) => {
  const grid = [];

  for (let i = 1; i <= numImages; i++) {
    const size = getRandomSize();
    const imageUrl = img1; // Assuming images are named image1.jpg, image2.jpg, ...
    grid.push({ size, imageUrl });
  }

  return grid;
};

const ImageGrid = () => {
  const [grid, setGrid] = useState([]);

  useEffect(() => {
    setGrid(generateGrid(totalImages));
  }, []);

  return (
    
    <Row className="image-grid">
      {grid.map((card, index) => (
        <Col key={index} sm={4} md={3} lg={2}>
          <Card className={'card-small'}>
            <Card.Img variant="top" src={(card.imageUrl)} alt={`Image ${index}`} />
        <Card.Body>

            {/* <img src = {(card.imageUrl)}>
            </img> */}

        </Card.Body>
          
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ImageGrid;
