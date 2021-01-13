import React from "react";
import { Button, ButtonGroup, Item } from "semantic-ui-react";
import "./cartItem.css";

const CartItem = (cart) => {
  return (
    <Item>
      <Item.Image size="large" src={cart.url} />
      <Item.Content>
        <Item.Header>{cart.decription}</Item.Header>
        <Item.Description>
          <div style={{ display: "flex" }}>
            <p>Размер:</p>
            <div className="card-item-text">{cart.size}</div>
          </div>
        </Item.Description>
        <Item.Description>
          <div style={{ display: "flex" }}>
            <p>Цена:</p>
            <div className="card-item-text">{cart.price}</div>
          </div>
        </Item.Description>
        <Item.Meta>
          <div style={{ display: "flex" }}>
            <p>Стоимость:</p>
            <div className="card-item-text">{cart.price * cart.counter}</div>
          </div>
        </Item.Meta>
        <Item.Extra>
          <ButtonGroup>
            <Button
              className={cart.counter === 1 ? "disabled" : "enable"}
              size="large"
              icon="minus"
              onClick={cart.minus}
            />
            <div className="card-item-text">{cart.counter}</div>
            <Button size="large" icon="plus" onClick={cart.plus} />
          </ButtonGroup>

          <Button
            basic
            color="orange"
            size="large"
            floated="right"
            onClick={cart.delete}
          >
            Убрать из корзины
          </Button>
          <hr />
        </Item.Extra>
      </Item.Content>
    </Item>
  );
};

export default CartItem;
