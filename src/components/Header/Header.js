import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import Navbar from 'reactstrap/lib/Navbar';
import NavbarBrand from 'reactstrap/lib/NavbarBrand';
import NavbarToggler from 'reactstrap/lib/NavbarToggler';
import Nav from 'reactstrap/lib/Nav';
import NavItem from 'reactstrap/lib/NavItem';
import Collapse from 'reactstrap/lib/Collapse';
import { Link } from 'react-router-dom';
import StyledHeader from './StyledHeader';

const Header = (_props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <StyledHeader>
            <Navbar expand='md'>
                <NavbarBrand href='/'>Scoutbase</NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} />
                <Collapse isOpen={isOpen} navbar={true}>
                    <Nav navbar={true}>
                        <NavItem>
                            <Link to='/'>Home</Link>
                        </NavItem>
                        <NavItem>
                            <Link to='/countries'>Countries</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </StyledHeader>
    )
};

export default Header;