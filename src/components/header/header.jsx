import React from 'react';
import basketLogo from "../../images/2.png";

import './header.css'
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">


        <div className="siteName">
          <Link to = "/" >
          MAGAZINE
          </Link>
        </div>
          <Link to = "/basket" >
          <img className="basketLogoImg" src={basketLogo} alt="none"/>
          <div className="basketCounter">
            1
          </div>
          <div className="headerText">Корзина</div>
          </Link>
        </div>

  );
};

export default Header;