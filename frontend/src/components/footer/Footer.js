import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaRegCopyright } from 'react-icons/fa';
import './Footer.css';
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col id='footer_brand'>KTC Shop</Col>
          <Col id='contactUs'>Contact Us</Col>
        </Row>
        <Row>
          <Col>
            <FaRegCopyright />
            KTC Shop All rights reserved
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
