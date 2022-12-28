import React, { useContext } from 'react';
import { Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import Button from 'react-bootstrap/Button';
const Header = () => {
    const { user, Logout } = useContext(AuthContext);

    const handleLogOut=()=>{
        Logout() 
        .then(()=>{})
        .catch(error=>console.log(error));
    }
    return (
        <Navbar className='mb-4' bg="dark" variant='dark' expand="lg">
            <Container>
                <Navbar.Brand><Link to='/'>Dragon News</Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">All news</Nav.Link>
                        <Nav.Link href="#link">pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
                    </Nav>
                    <Nav>
                        <Nav.Link href='#'>
                            {
                                user?.uid ?
                                    <>
                                        <span>{user?.displayName}</span>
                                         <Button variant="light" onClick={handleLogOut}>Log Out</Button>
                                    </>

                                    :
                                    <>
                                        <Link to='/login'>Login</Link>
                                        <Link to='/registration'>Registration</Link>
                                    </>
                            }

                        </Nav.Link>
                        <Nav.Link eventKey={2} href='#'>

                            {user?.photoURL ?
                                <Image
                                    style={{ height: '45px' }} roundedCircle
                                    src={user?.photoURL}
                                >
                                </Image>
                                :
                                <FaUser></FaUser>
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