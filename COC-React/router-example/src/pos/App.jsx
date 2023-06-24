import React, { useState } from "react";
import "./App.css";
import grocery from "./assets/data/grocery.json";
// import grocery from "./fruits.json";
import Header from './components/Header'
import DisplayProducts from './components/DisplayProducts'
import DisplayCartProducts from './components/DisplayCartProducts'


let searchItem = "";

function App() {

  const [cartItem, setCartItem] = useState({});
  const [totalPrice, setTotalPrice] = useState(0)

  // console.clear()
  return (
    <>
      <Header />
      <div className="App container-fluid container-xxl d-flex flex-column">
        <div className="row flex-grow-1">

          <DisplayProducts grocery={grocery} setTotalPrice={setTotalPrice} setCartItem={setCartItem} />
          <DisplayCartProducts totalPrice={totalPrice} setTotalPrice={setTotalPrice} cartItem={cartItem} setCartItem={setCartItem} />

        </div>
      </div >
    </>
  );
}

export default App;
