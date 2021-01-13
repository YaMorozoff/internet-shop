import React from "react";
import { Link } from "react-router-dom";
import { Container, Icon, Image, Menu, Sticky } from "semantic-ui-react";
import "./header.css";
import logo from "./logo.png";

const Header = (props) => {
  return (
    <Sticky>
      <Menu inverted icon="labeled">
        <Container>
          {<Image size="small" src={logo}></Image>}
          <Menu.Item as={Link} to="/">
            <Icon name="home" />
            Главная
          </Menu.Item>
          <Menu.Item as={Link} to="basket">
            <div className={props.sum ? "sum-logo" : "sum-logo-off"}>
              {props.sum}
            </div>
            <Icon size="massive" name="shopping cart" />

            <p>Корзина</p>
          </Menu.Item>
        </Container>
      </Menu>
    </Sticky>
  );
};

export default Header;
