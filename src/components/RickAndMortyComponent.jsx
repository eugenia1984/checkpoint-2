import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

const RickAndMortyComponent = () => {
  
  return(
    <>
      <Container  className="my-5"> 
        <h2 className="text-center mb-5">Rick and Morty</h2>
        <Row>
        <Col xs={12} md={4}>
          <Card style={{ width: '200px' }}>
            <Card.Img variant="top" src="https://picsum.photos/200/200" />
            <Card.Body>
              <Card.Title>Name: </Card.Title>
              <hr />
              <Card.Text> Specie: </Card.Text>
              <Card.Text> Origen: </Card.Text>
              <Card.Text> Creacion: </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container>
    </>
  );
};

export { RickAndMortyComponent };