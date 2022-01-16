import React from 'react';
import { FaBars } from 'react-icons/fa';
import {Nav, NavbarContainer, MobileIcon, NavMenu, NavItem, Logo, StyledLink} from "./NavbarElements";
import pic from "/Users/reem/lirumalaundromat-website/src/newlogo.png";

const Navbar = ({ toggle }) => {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <Logo src={pic} alt="" />
                
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <StyledLink href='#about'>ABOUT</StyledLink>
                    </NavItem>
                    <NavItem>
                        <StyledLink href='#policy'>POLICY</StyledLink>
                    </NavItem>
                    <NavItem>
                        <StyledLink href='#location'>LOCATION</StyledLink>
                    </NavItem>
                    <NavItem>
                        <StyledLink href='#contact'>CONTACT</StyledLink>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </>
    );
};

export default Navbar;
