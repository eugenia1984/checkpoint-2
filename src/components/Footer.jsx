import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Footer = () => {
  return(
    <Container fluid className="footer">
      <Row className="mb-5">
        <Col xs={12} className=" text-center">Practica realizada por <a href="https://www.linkedin.com/in/maríaeugeniacosta" target="_blank" rel="noreferrer">María Eugenia Costa</a></Col>
      </Row>
    </Container>
  );
};

export {Footer};