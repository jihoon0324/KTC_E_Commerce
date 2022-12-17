import React, { useEffect, useState } from 'react';
import { Navbar, Container, Nav, NavDropdown, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import { FaShoppingCart } from 'react-icons/fa';
import { Helmet } from 'react-helmet-async';

const Header = () => {
  const [nameTest, setNameTest] = useState(true);

  const [scrollActive, setScrollActive] = useState(false);
  const navigate = useNavigate();

  const controlNavbar = () => {
    if (window.scrollY > 4) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, []);

  const navigateToCart = () => {
    navigate('/cart');
  };

  return (
    <header className={scrollActive ? 'active_header' : 'default_header'}>
      <Helmet>
        <title> KTC Shop</title>
      </Helmet>

      <Container>
        <Row>
          <Col
            className={scrollActive ? 'active_brand' : 'default_brand'}
            lg={scrollActive ? { span: 2 } : '8'}
          >
            <Nav className='test'>
              <Link to='/'>
                <Navbar.Brand
                  className={
                    scrollActive ? 'active_brand_Icon' : 'default_brand_Icon'
                  }
                >
                  KTC Shop
                </Navbar.Brand>
              </Link>
            </Nav>
          </Col>

          <Col
            className={scrollActive ? '' : 'default_product'}
            lg={scrollActive ? '6' : { span: 6, offset: 3 }}
          >
            <Nav className='product_list'>
              <Nav.Link className='product_list_link' href='/dress'>
                Dress
              </Nav.Link>
              <Nav.Link className='product_list_link' href='/blouse'>
                Blouse
              </Nav.Link>
              <Nav.Link className='product_list_link' href='/pants'>
                Pants
              </Nav.Link>
            </Nav>
          </Col>

          <Col
            className={scrollActive ? 'active_userInfo' : 'default_userInfo'}
            lg={nameTest ? '3' : '1'}
          >
            <Nav className='userInfo_nav'>
              {nameTest ? (
                <NavDropdown
                  className='userInfo'
                  id='user_loggedIn'
                  title={'nameTest'}
                >
                  <NavDropdown.Item href=''>My Page</NavDropdown.Item>
                  <NavDropdown.Item href='/orderhistory'>
                    Ore History
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href='/'>Log out</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <Nav.Link className='userInfo' href='/login'>
                  Login
                </Nav.Link>
              )}

              {nameTest ? (
                <Nav.Link
                  className='userInfo'
                  id='user_cart_info'
                  onClick={navigateToCart}
                >
                  <FaShoppingCart
                    id='user_cart_icon'
                    size={20}
                  ></FaShoppingCart>{' '}
                  <span className='cart_badge'>1</span>
                </Nav.Link>
              ) : (
                ''
              )}
            </Nav>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
