import React, { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import './navbar.scss'
import Logo from '../../assets/images/crown.svg'

const Navbar = () => {
  const navComponents = ["SHOP", "CONTACT", "SIGN IN"];
  return (
    <Fragment>
      <div className="navigation">
        <div>
          <Link className="navlink" to={"/home"}>
            <img src={Logo} alt="logo"/>
          </Link>
        </div>
        <div className="navRightSideLinkContainer">
          {navComponents?.map((i, index) => {
            return (
              <Link className="navlink" to={"/nav"}>
                <div key={index}>{i}</div>
              </Link>
            );
          })}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
