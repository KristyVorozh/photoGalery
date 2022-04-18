import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import './style.sass';
import Logo from './img/photo_2022-04-18 19.41.12.jpeg'
const Header = () => {

    return (
        <div>
            <Navbar className='header' bg="dark" variant="dark">
                <Navbar.Brand href="/">
                    Mitra
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse>
                    <Nav>
                        <Nav.Link href="/">Main</Nav.Link>
                        <Nav.Link href="/about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Nav>
                    <Navbar.Brand>Email: <a href="mailto:kristina.vorojejkina@yandex.ru">kristina.vorojejkina@yandex.ru</a> </Navbar.Brand>
                    <Navbar.Brand>Кристина</Navbar.Brand>
                    <Navbar.Brand href="/">
                        <img
                            src={Logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                </Nav>
            </Navbar>
        </div>
    );
};

export default Header;