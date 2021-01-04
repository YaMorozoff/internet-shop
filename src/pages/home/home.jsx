import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import './home.css'
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";

const Home = () => {
  // const [error, setError] = useState(null);
  // const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://gist.githubusercontent.com/YaMorozoff/2aa2f74d4dc616449bdc5ad69d63ab8b/raw/79a1a6e1f8df130f2d1f1091d1957d4405543cd8/gistfile1.json')
      .then(response => response.json())
      .then(result => {
        setData(result);
      });
  },[]);
  return(
    <div className="App">
      <Header/>
      <ul className="items">
        {data.map((item, i) => (
          console.log(item),
          <li className="Block" key={i}>
            <img src={item.url} alt="NONE"/>
            <p>{item.decription}</p>
            <p>{item.price}</p>
            <p>{item.size}</p>
            <button><Link to = "/basket" >В корзину </Link></button>
          </li>
        ))}
      </ul>
      <Footer/>
    </div>

  )
};

export default Home;