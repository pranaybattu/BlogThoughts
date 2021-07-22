import React, { useState,Fragment } from 'react';
import Link from 'next/link'
import Router from 'next/router'
import {signout, isAuth} from '../actions/auth'
import { APP_NAME } from '../config';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <Link href="/">
          <NavLink style={{ cursor: 'pointer' }} className="font-weight-bold">{APP_NAME}</NavLink>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            { !isAuth() && (
              <Fragment>
                <NavItem style={{ cursor: 'pointer' }} >
                  <Link href="/Signin">
                    <NavLink>Signin</NavLink>
                  </Link>
                </NavItem>

                <NavItem style={{ cursor: 'pointer' }} >
                  <Link href="/Signup">
                    <NavLink>Signup</NavLink>
                  </Link>
                </NavItem>

              </Fragment>
            )}
            
            {isAuth() && (
              <NavItem>
                <NavLink 
                  style={{ cursor: 'pointer' }} 
                  onClick={() => signout(() => Router.replace(`/Signin`))}>
                  Signout
                </NavLink>
              </NavItem>
            )}

          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Header;
