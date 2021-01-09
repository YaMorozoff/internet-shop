import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";
import Header from "../../components/header/header";
import { fetchData } from "../../store/actions";
import { connect } from "react-redux";

const Home = ({ fetchData, fetching }) => {
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />
      {fetching.map((item, i) => (
        <ul className="items">
          <li className="Block" key={i}>
            <img src={item.url} alt="NONE" />
            <p>{item.decription}</p>
            <p>{item.price}</p>
            <p>{item.size}</p>
            <button>В корзину </button>
          </li>
        </ul>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  fetching: state.fetching,
});
const mapDispatchToProps = { fetchData };
export default connect(mapStateToProps, mapDispatchToProps)(Home);
