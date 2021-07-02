import React, { useEffect, useState } from "react";
import {
  faAngleDown,
  faTimes,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Navigation = ({ onNav, addAnimation, isLogin}) => {
  const [LoggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    const isLoggedInEmail = localStorage.getItem("email");
    if (isLoggedInEmail) {
      setLoggedIn(true);
    } else if (isLoggedInEmail === null) {
      setLoggedIn(false);
    }
  }, [LoggedIn]);
  return (
    <div>
      <div onClick={onNav} className="background-black"></div>
      <nav>
        <ul className="nav-list">
          <FontAwesomeIcon
            className="button-click-close"
            onClick={onNav}
            icon={faTimes}
          />
          <Link to="/">
            <li className={addAnimation} onClick={onNav}>
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className={addAnimation} onClick={onNav}>
              About us
            </li>
          </Link>
          <Link to="/services">
            <li className={addAnimation} onClick={onNav}>
              Services
            </li>
          </Link>
          <li className={`${addAnimation} list-2`}>
            <Link
              className={`${addAnimation} title-navbar`}
              onClick={onNav}
              to="/shop"
            >
              Shop <FontAwesomeIcon icon={faAngleDown} />
            </Link>
            <ul className="list-inside list-inside-2">
              <Link to="/shop/collection/male">
                <li className={addAnimation} onClick={onNav}>
                  Men Collection
                </li>
              </Link>
              <Link to="/shop/collection/female">
                <li className={addAnimation} onClick={onNav}>
                  Women Collection
                </li>
              </Link>
              <Link to="/shop/checkout">
                <li className={addAnimation} onClick={onNav}>
                  Checkout
                </li>
              </Link>
            </ul>
          </li>
          <Link to="/blog">
            <li className={addAnimation} onClick={onNav}>
              Blog
            </li>
          </Link>
          <Link to="/contact">
            <li className={addAnimation} onClick={onNav}>
              Contact
            </li>
          </Link>
          <Link to="/shop/cart">
            <FontAwesomeIcon
              style={{ left: "12px", transform: "translate(-50%, -50%)" }}
              icon={faShoppingCart}
            />
            <li className={addAnimation} onClick={onNav}>
              Cart
            </li>
          </Link>
          {(LoggedIn === false && isLogin === false) ? (
            <li className={`${addAnimation} list-2`}>
              <Link
                className={`${addAnimation} title-navbar`}
                onClick={onNav}
                to="/account"
              >
                Account <FontAwesomeIcon icon={faAngleDown} />
              </Link>
              <ul className="list-inside">
                <Link to="/account">
                  <li className={addAnimation} onClick={onNav}>
                    Sign in
                  </li>
                </Link>
                <Link to="/account/register">
                  <li className={addAnimation} onClick={onNav}>
                    Register
                  </li>
                </Link>
              </ul>
            </li>
          )
          :
          ''
          }
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
