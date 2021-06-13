import React, { useState, useEffect } from "react";
import Logo from "../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMobileAlt, faSignInAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebookF,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
const Header = ({ onNavBar, isLogin, validate, onSetAdmin }) => {
  const [classAccess, setClass] = useState("box-signin");
  const [changesAccess, setChange] = useState("unvalid-notification");
  const [userName, setUser] = useState("");
  const [classUser, setClassUser] = useState("user");
  const [admin, setAdmin] = useState(false);
  useEffect(() => {
    setClassUser("user");
    if (validate === true) {
      setClass("box-signin remove-border-signin");
      setChange("none-item");
    } else {
      setClass("box-signin");
      setChange("unvalid-notification");
    }
  }, [validate]);

  useEffect(() => {
    if (localStorage.getItem("email") !== null) {
      fetch("http://localhost:3001/information/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: JSON.parse(localStorage.getItem("email")),
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.id) {
            setUser(data.name);
          }
        })
        .catch((err) => console.log(err));
    }
    if (validate === true) {
      fetch("http://localhost:3001/dashboard/admin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: JSON.parse(localStorage.getItem("email")),
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.priority === true) {
            setAdmin(true);
            onSetAdmin(data.name);
          } else {
            setAdmin(false);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [validate, onSetAdmin]);

  const showUser = () => {
    classUser === "user"
      ? setClassUser("user show-user")
      : setClassUser("user");
  };

  return (
    <div>
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
        <div className="middle-header">
          <p>
            <FontAwesomeIcon icon={faMobileAlt} /> 123 456 7890
          </p>
          <p>
            <FontAwesomeIcon icon={faEnvelope} />
            info@gmail.com
          </p>
        </div>
        <div className="contact-social">
          <div className="box-icon">
            <a href="facebook">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
          </div>
          <div className="box-icon">
            <a href="twitter">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </div>
          <div className="box-icon">
            <a href="youtube">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
          </div>
        </div>
        <div onClick={onNavBar} className="hamburger">
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={classAccess}>
          <FontAwesomeIcon className={changesAccess} icon={faSignInAlt} />
          <div className="signin-link">
            {validate === true ? (
              <div className="user-load">
                <div onClick={showUser} className="font-awesome-user">
                  <FontAwesomeIcon icon={faUser} />
                </div>
                <div className={classUser}>
                  <p>{userName}</p>
                  <p onClick={() => isLogin("signout")}>Sign out</p>
                  <p onClick={showUser}>
                    <Link to="/account/customer">Information</Link>
                  </p>
                  {admin === true && (
                    <p onClick={showUser}>
                      <Link to="/dashboard/admin/app">Dashboard</Link>
                    </p>
                  )}
                </div>
              </div>
            ) : (
              <Link style={{ marginLeft: "10px" }} to="/shop/account">
                Sign in
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
