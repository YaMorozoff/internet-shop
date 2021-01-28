import React from "react";
import Header from "../../components/header/header";
import Footer from"../../components/footer/footer";
import { fetchingAction } from "../../store/actions/fetchingAction";
import { connect } from "react-redux";
import { addToCart } from "../../store/actions/addtocartAction";
import CardEl from "../../components/card/card";
import { Card, Container } from "semantic-ui-react";
import { incrementItem } from "../../store/actions/icrementAction";
import { decrementItem } from "../../store/actions/decrementAction";
import { deleteFromCart } from "../../store/actions/deletefromcartAction";
import "./home.css";

const Home = ({
  fetching,
  addToCart,
  sum,
  incrementItem,
  decrementItem,
  deleteFromCart,
}) => {
  return (
    <div className="App">
      <Header sum={sum} />
      <Container>
        <Card.Group itemsPerRow={3}>
          {fetching.map((item) => (
            <CardEl
              key={item.id}
              url={item.url}
              decription={item.decription}
              size={item.size}
              price={item.price}
              isAdded={item.isAdded}
              add={addToCart.bind(this, item)}
              counter={item.count}
              plus={incrementItem.bind(this, item)}
              minus={decrementItem.bind(this, item)}
              delete={deleteFromCart.bind(this, item)}
            />
          ))}
        </Card.Group>
      </Container>
      <Footer/>
    </div>
  );
};

const mapStateToProps = ({ fetching, cart }) => ({
  fetching: fetching.items,
  cart: cart.items,
  sum: cart.items.reduce((sum, item) => sum + item.count, 0),
});
const mapDispatchToProps = {
  fetchingAction,
  addToCart,
  decrementItem,
  incrementItem,
  deleteFromCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
