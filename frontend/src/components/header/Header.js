import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaShoppingCart } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';
const Header = () => {
  //   const [nameTest, setNameTest] = useState('KTC');
  const [show, setShow] = useState(true);
  const [toggle, setToggle] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 4) {
      setShow(false);
      setToggle(true);
    } else {
      setShow(true);
      setToggle(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);
  return (
    <header className={!show ? 'inner' : 'none'}>
      <Helmet>
        <title> KTC Shop</title>
      </Helmet>

      <Container>
        {show && (
          <Row>
            <Col md={{ span: 4, offset: 4 }}>
              <Nav id='brand_nav'>
                <Link to='/'>
                  <Navbar.Brand className='brand'>KTC Shop</Navbar.Brand>
                </Link>
              </Nav>
            </Col>
            <Col md={{ span: 2, offset: 2 }}>
              {/* <Nav>
                <Nav.Link id='log_Link' href='/'>
                  Login
                </Nav.Link>
              </Nav> */}
              <Nav>
                <NavDropdown id='log_Link' title={'nameTest'}>
                  <NavDropdown.Item href=''>My Page</NavDropdown.Item>
                  <NavDropdown.Item href='/orderhistory'>
                    Ore History
                  </NavDropdown.Item>
                  <NavDropdown.Item href=''>Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href=''> 뭔가 더 넣고 </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Col>
          </Row>
        )}
        <Row>
          {toggle && (
            <Col>
              <Nav>
                <Link to='/'>
                  <Navbar.Brand id='small_brand'>KTC Shop</Navbar.Brand>
                </Link>
              </Nav>
            </Col>
          )}

          <Col md={toggle ? { span: 4 } : { span: 4, offset: 4 }}>
            <Nav id='product_link_nav'>
              <Nav.Link className='product_link_list' href='/blouse'>
                Blouse
              </Nav.Link>
              <Nav.Link className='product_link_list' href='/'>
                Dress
              </Nav.Link>
              <Nav.Link className='product_link_list' href='/'>
                Pants
              </Nav.Link>
            </Nav>
          </Col>
          {toggle && (
            <Col>
              <Nav id='log_info_small'>
                {/* <Nav.Link id='log_info_text' href='/'>Login</Nav.Link> */}
                <NavDropdown id='log_info_text' title={'nameTest'}>
                  <NavDropdown.Item href=''>My Page</NavDropdown.Item>
                  <NavDropdown.Item href='/orderhistory'>
                    Ore History
                  </NavDropdown.Item>
                  <NavDropdown.Item href=''>Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href=''> 뭔가 더 넣고 </NavDropdown.Item>
                </NavDropdown>

                <FaShoppingCart size={20} />
              </Nav>
            </Col>
          )}
        </Row>
      </Container>
    </header>
  );
};

export default Header;
