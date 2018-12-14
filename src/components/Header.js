import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div>
      {/* c'est un header */}
      <header className="header">
        <img
          src="http://www.arigoni-avocat.com/img/team-02.png"
          className="avatar"
          alt="avatar"
        />
        <a className="deconnexion" href="http://www.google.com">
          Déconnexion
        </a>
      </header>
    </div>
  );
};

export default Header;
