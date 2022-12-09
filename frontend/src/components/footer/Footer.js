import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaRegCopyright } from 'react-icons/fa';
import './Footer.css';
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col id="footer_brand"sm={8}>KTC Shop</Col>
          <Col id='contactUs' sm={4}>
            Contact Us
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 4 }}>
            <FaRegCopyright />
            KTC Shop All rights reserved
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
