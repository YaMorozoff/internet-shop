import React from 'react';
import HeaderBtn from "../headerBtn/HeaderBtn";
import listLogo from "../../images/1.png";
import userLogo from "../../images/3.png";
import basketLogo from "../../images/2.png";
import searchLogo from "../../images/4.png";
import './header.css'
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className="Header">

      <div className="headerUp" >
        <HeaderBtn name="Каталог"/>
        <HeaderBtn name="Доставка"/>
        <HeaderBtn name="Контакты"/>
        <HeaderBtn name="О нас"/>
      </div>

      <div className="headerDown">
        <div className="listImageBtn">
          <img className="listImage" src={listLogo} alt="none"/>
        </div>
        <div className="searchLogo">
          <img className="searchLogoImg" src={searchLogo} alt="none"/>
          <div className="headerText">Найти</div>
        </div>
        <div className="siteName">
          <Link to = "/" >
          MAGAZINE
          </Link>
        </div>
        <div className="userLogo">
          <img className="userLogoImg" src={userLogo} alt="none"/>
          <div className="headerText">Войти</div>
        </div>
        <div className="basketLogo">
          <Link to = "/basket" >
          <img className="basketLogoImg" src={basketLogo} alt="none"/>
          <div className="basketCounter">
            1
          </div>
          <div className="headerText">Корзина</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;