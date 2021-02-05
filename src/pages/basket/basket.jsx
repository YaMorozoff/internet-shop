import React from "react";
import Header from "../../components/header/header";
import { Button, Container, Item, Statistic } from "semantic-ui-react";
import CartItem from "../../components/cartItem/CartItem";
import { deleteFromCart } from "../../store/actions/deletefromcartAction";
import { connect } from "react-redux";
import { incrementItem } from "../../store/actions/icrementAction";
import { decrementItem } from "../../store/actions/decrementAction";
import "./basket.css";
import Amount from "arui-feather/amount";
import Footer from "../../components/footer/footer";

const Basket = ({
  deleteFromCart,
  incrementItem,
  decrementItem,
  cart,
  sum,
  totalPrice,
  count,
}) => {
  const AMOUNT = {
    value: totalPrice,
    currency: {
      code: "RUR",
      minority: 1,
    },
  };
  return (
    <div>
      <Header sum={sum} />
      <div className="some_body">
        {!count ? (
          <h1>Ваша корзина пуста</h1>
        ) : (
          <Container>
            <Statistic>
              <Statistic.Label>Итого:</Statistic.Label>
              <Statistic.Value>
                <Amount size={"xxl"} amount={AMOUNT} />
              </Statistic.Value>
            </Statistic>
            <Button
              basic
              color="green"
              size="massive"
              floated="right"
              style={{ marginTop: "15px" }}
            >
              Оформить заказ
            </Button>
            <hr />
            <Item.Group>
              {cart.map(function (item, i) {
                return (
                  <CartItem
                    key={i}
                    url={item.url}
                    decription={item.decription}
                    size={item.size}
                    price={item.price}
                    delete={deleteFromCart.bind(this, item)}
                    counter={item.count}
                    plus={incrementItem.bind(this, item)}
                    minus={decrementItem.bind(this, item)}
                  />
                );
              })}
            </Item.Group>
          </Container>
        )}
      </div>
      <Footer />
    </div>
  );
};

const mapStateToProps = ({ cart }) => ({
  cart: cart.items,
  count: cart.items.length,
  sum: cart.items.reduce((sum, item) => sum + item.count, 0),
  totalPrice: cart.items.reduce(
    (total, item) => total + item.price * item.count,
    0
  ),
});
const mapDispatchToProps = { deleteFromCart, incrementItem, decrementItem };
export default connect(mapStateToProps, mapDispatchToProps)(Basket);
