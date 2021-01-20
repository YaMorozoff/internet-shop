import React from "react";
import { Button, ButtonGroup, Card, Image, Item } from "semantic-ui-react";
import "./card.css";

import Amount from "arui-feather/amount";

const CardEl = (item) => {
  const AMOUNT = {
    value: item.price,
    currency: {
      code: "RUR",
      minority: 1,
    },
  };
  return (
    <Card key={item.id}>
      <Image src={item.url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{item.decription}</Card.Header>
        <Card.Description>
          <p> Размер:{item.size}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Amount amount={AMOUNT} />
      </Card.Content>
      {item.isAdded ? (
        <Card.Content>
          <ButtonGroup>
            <Button
              className={item.counter === 1 ? "disabled" : "enable"}
              size="large"
              icon="minus"
              onClick={item.minus}
            />
            <div className="card-item-text">{item.counter}</div>
            <Button size="large" icon="plus" onClick={item.plus} />
          </ButtonGroup>

          <Button
            basic
            color="orange"
            size="large"
            floated="right"
            onClick={item.delete}
          >
            Убрать из корзины
          </Button>
        </Card.Content>
      ) : (
        <Button
          basic
          color={"green"}
          // className={item.isAdded ? "added-btn" : "add-btn"}
          onClick={item.add}
          size="large"
        >
          {"В корзину"}
        </Button>
      )}
    </Card>
  );
};

export default CardEl;
