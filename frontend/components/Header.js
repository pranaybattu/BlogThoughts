import React, { useState,Fragment } from 'react';
import Link from 'next/link'
import Router from 'next/router'
import NProgress from 'nprogress';
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


Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

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
          <Fragment>
              <NavItem>
                <Link href="/blogs">
                  <NavLink>Blogs</NavLink>
                </Link>
              </NavItem>
            </Fragment>

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

            {isAuth() && isAuth().role ===0 && (
              <NavItem>
                <Link href="/user">
                  <NavLink>
                    {`${isAuth().name}'s Dashboard`}
                  </NavLink>
                </Link>
              </NavItem>
            )}

            {isAuth() && isAuth().role === 1 && (
              <NavItem>
                <Link href="/admin">
                  <NavLink>
                    {`${isAuth().name}'s Dashboard`}
                  </NavLink>
                </Link>
              </NavItem>
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
