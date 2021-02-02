import React from "react";

const Header = () => {
  return (
    <header>
      <ul>
        <li>
          <a href="/">Movies</a>
        </li>
        <li>
          <a href="/tv">tv</a>
        </li>
        <li>
          <a href="/search">search</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
