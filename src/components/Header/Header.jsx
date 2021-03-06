import React from "react";

import Logo from '../../images/logo.png'

function Header() {
  return (
    <>
      <nav className="navbar is-black  is-fixed-top">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://zup.com.br">
            <img
              src={Logo}
              alt="Logo Zup Tecnologia"
            />
          </a>
          <div
            className="navbar-burger burger"
            data-target="navbarExampleTransparentExample"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        <div id="navBar" className="navbar-menu">

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="field is-grouped">
                <p className="control">
                  <a
                    className="bd-tw-button button"
                    href="https://github.com/bendevjunior/blog-zuppers"
                  >
                    <span className="icon">
                      <i className="fab fa-twitter"></i>
                    </span>
                    <span>Github</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
