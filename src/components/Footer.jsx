import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Footer = () => {
  return(
    <Container fluid>
      <Row className="mb-5">
        <Col xs={12} md={4} className="text-uppercase text-center">Users</Col>
        <Col xs={12} md={4} className="text-uppercase text-center">API Rick & Morty</Col>
        <Col xs={12} md={4} className="text-uppercase text-center">Formulario de Contacto</Col>
      </Row>

      
            
            
    </Container>
  );
};

export {Footer};