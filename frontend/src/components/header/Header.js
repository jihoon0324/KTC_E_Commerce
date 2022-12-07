import React, { useState } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';
import { FaShoppingCart } from 'react-icons/fa';
const Header = () => {
  const [nameTest, setNameTest] = useState('KTC');
  return (
    <>
      <Navbar style={{ border: '1px  solid red' }}>
        <Container>
          <Nav>
            <Link to='/'>
              <Navbar.Brand>KTC Shop</Navbar.Brand>
            </Link>
          </Nav>
          <Nav>
            <Nav.Link href='/'>Blouse</Nav.Link>
            <Nav.Link href='/'>Dress</Nav.Link>
            <Nav.Link href='/'>Pants</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href='/'>Login</Nav.Link>
            <NavDropdown title={nameTest} id='basic-nav-dropdown'>
              <NavDropdown.Item href=''>My Page</NavDropdown.Item>
              <NavDropdown.Item href='/orderhistory'>
                Ore History
              </NavDropdown.Item>
              <NavDropdown.Item href=''>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href=''> 뭔가 더 넣고 </NavDropdown.Item>
            </NavDropdown>
            <div>
              <FaShoppingCart size={20} />
            </div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
