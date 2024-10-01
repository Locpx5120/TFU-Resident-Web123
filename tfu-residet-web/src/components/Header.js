import React from 'react';
import '../styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="user-info">
        <h2>JSX Computer</h2>
        {/* <img src="vietnam-flag.png" alt="Vietnam Flag" className="flag" /> */}
      </div>
    </header>
  );
};

export default Header;