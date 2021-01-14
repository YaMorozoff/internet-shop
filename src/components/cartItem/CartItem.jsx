import React from "react";
import { Button, ButtonGroup, Item } from "semantic-ui-react";
import "./cartItem.css";
import Amount from "arui-feather/amount";

const CartItem = (cart) => {
  const PRICE = {
    value: cart.price,
    currency: {
      code: "RUR",
      minority: 1,
    },
  };
  const SUM = {
    value: cart.price * cart.counter,
    currency: {
      code: "RUR",
      minority: 1,
    },
  };
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

            <Amount size={"xl"} amount={PRICE} />
          </div>
        </Item.Description>
        <Item.Meta>
          <div style={{ display: "flex" }}>
            <p>Стоимость:</p>
            <div className="card-item-text">
              <Amount size={"xl"} amount={SUM} />
            </div>
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
