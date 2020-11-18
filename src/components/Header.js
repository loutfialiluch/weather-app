import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <p>Weather App</p>
        <nav>
          <ul>
            <a
              href="https://github.com/loutfialiluch"
              target="_blank"
              rel="noreferrer"
            >
              <li>
                <i className="fab fa-github"></i>
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/loutfi-aliluch-540bbb196/"
              target="_blank"
              rel="noreferrer"
            >
              <li>
                <i className="fab fa-linkedin"></i>
              </li>
            </a>
            <a
              href="https://loutfialiluch.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <li>
                <i className="fas fa-mouse-pointer"></i>
              </li>
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
