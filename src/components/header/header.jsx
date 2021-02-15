import React from "react";
import { Link } from "react-router-dom";
import { Container, Icon, Image, Menu, Sticky } from "semantic-ui-react";
import "./header.css";
import logo from "./logo.png";

import ThemeButton from "../theme-button/theme-button";

const Header = (props) => {
  return (
    <Sticky>
      <Menu className="menu-mrg" inverted>
        <Container>
          {<Image size="medium" src={logo} />}
          <Menu.Item as={Link} to="/">
            <Icon size="big" name="home" />
            <span>Главная</span>
          </Menu.Item>
          <Menu.Item as={Link} to={`/basket/${props.sum}/${props}`}>
            <div className={props.sum ? "sum-logo" : "sum-logo-off"}>
              {props.sum}
            </div>
            <Icon size="big" name="shopping cart" />

            <span>Корзина</span>
          </Menu.Item>
          <Menu.Item position={"right"}>
            <ThemeButton />
          </Menu.Item>
        </Container>
      </Menu>
    </Sticky>
  );
};

export default Header;
