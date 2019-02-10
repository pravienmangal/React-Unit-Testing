import React from 'react';
import Logo from '../../assets/logo.png';

const Header = () => {
  return(
    <header className="header">
      <div className="container header-content">
        <a
          href="/"
          className="logo">
            Unit Testing App
        </a>
        <div className="nav">
          <img src={Logo} alt="Logo"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
