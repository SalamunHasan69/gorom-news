// import { Button } from 'bootstrap';
import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown'
import { FaBorderNone, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/Auth';
import LeftSideNav from './LeftSideNav';
import Button from 'react-bootstrap/Button';


const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {

      })
      .catch(error => console.error(error))
  }

  // console.log(user);
  return (
    <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand><Link style={{ textDecoration: 'none' }} to={'/'}> <h3>Gorom News</h3> </Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav> */}
          <Nav className='ms-auto d-flex align-items-center'>
            <>
              {
                user?.uid ?
                  <>
                    <span>{user?.displayName}</span>
                    <Button className='text-primary' variant="outline" onClick={handleLogOut}>Log Out</Button>
                  </>
                  :
                  <>
                    <Link to='/login'>Login</Link>
                    <Link className='mx-3' to='/register'>Register</Link>
                  </>
              }

            </>
            <Nav.Link eventKey={2} href="#memes">
              {
                user?.photoURL ?
                  <Image
                    style={{ height: '30px' }} roundedCircle
                    src={user?.photoURL}
                  ></Image>
                  : <FaUser></FaUser>
              }
            </Nav.Link>
          </Nav>
          <div className='d-lg-none'>
            <LeftSideNav></LeftSideNav>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;