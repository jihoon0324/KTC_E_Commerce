import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaRegCopyright } from 'react-icons/fa';
const Footer = () => {
  return (
    <Container>
      <Row>
        <Col sm={8}>KTC Shop</Col>
        <Col sm={4}>Contact Us</Col>
      </Row>
      <Row>
        <Col>
          <FaRegCopyright />
          KTC Shop All rights reserved
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
