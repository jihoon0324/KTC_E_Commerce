import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaShoppingCart } from 'react-icons/fa';

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
      <Container>
        {show && (
          <Row>
            <Col md={{ span: 4, offset: 4 }}>
              <Nav>
                <Link to='/'>
                  <Navbar.Brand className='brand'>KTC Shop</Navbar.Brand>
                </Link>
              </Nav>
            </Col>
            <Col md={{ span: 2, offset: 2 }}>
              <Nav>
                <Nav.Link id='logInfo_Link' href='/'>
                  Login
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
        )}
        <Row>
          {toggle && (
            <Col>
              <Nav>
                <Link to='/'>
                  <Navbar.Brand>KTC Shop</Navbar.Brand>
                </Link>
              </Nav>
            </Col>
          )}

          <Col id='product_link_main' md={{ span: 5, offset: 4 }}>
            <Nav>
              <Nav.Link className='product_link_list' href='/'>
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
              <Nav>
                {/* <Nav.Link href='/'>Login</Nav.Link> */}
                <NavDropdown title={'nameTest'} id='basic-nav-dropdown'>
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
