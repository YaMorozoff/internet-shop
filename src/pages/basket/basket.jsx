import React from 'react';
import Header from "../../components/header/header";
import listLogo from "../../images/1.png";
import "./basket.css"

const Basket = () => {

  return (
    <div>
       <Header/>
        <div className="basketTable">

          <div className="basketTitle">
            Заказ
          </div>

          <div className="basketOrder">
            <div > <img className="basketOrderImg" src={listLogo} alt="none"/></div>
            <div className="basketOrderTitle">
              <div className="basketOrderTitle1">qwdqwdqwdqwdqedqed</div>
              <div className="basketOrderOption"> owedc2qpoewchpwijec3pw</div>
            </div>
            <div className="basketOrderPrice">112341234</div>
          </div>

          <div className="basketOrder">
            <div > <img className="basketOrderImg" src={listLogo} alt="none"/></div>
            <div className="basketOrderTitle">
              <div className="basketOrderTitle1">qwdqwdqwdqwdqedqed</div>
              <div className="basketOrderOption"> owedc2qpoewchpwijec3pw</div>
            </div>
            <div className="basketOrderPrice">112341234</div>
          </div>

        </div>

    </div>
  );
};

export default Basket;