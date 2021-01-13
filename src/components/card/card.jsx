import React from "react";
import { Button, ButtonGroup, Card, Image } from "semantic-ui-react";
import "./card.css";
const CardEl = (item) => {
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
        <a>{item.price}$</a>
      </Card.Content>
      {item.isAdded ? (
        <ButtonGroup>
          <Button
            className={item.counter === 1 ? "disabled" : "enable"}
            size="large"
            icon="minus"
            onClick={item.minus}
          />
          <div className="card-item-text">{item.counter}</div>
          <Button size="large" icon="plus" onClick={item.plus} />
          <Button
            basic
            color="orange"
            size="large"
            floated="right"
            onClick={item.delete}
          >
            Убрать из корзины
          </Button>
        </ButtonGroup>
      ) : (
        <Button
          basic
          color={item.isAdded ? "orange" : "green"}
          disabled={item.isAdded}
          // className={item.isAdded ? "added-btn" : "add-btn"}
          onClick={item.add}
          size="large"
        >
          {item.isAdded ? "Добавлено" : "В корзину"}
        </Button>
      )}
    </Card>
  );
};

export default CardEl;
