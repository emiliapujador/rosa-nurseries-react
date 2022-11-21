import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import SignIn from "./pages/SignIn";
import Basket from "./pages/Basket";
import PlantDetail from "./pages/PlantDetail";
import IndoorPlants from "./pages/IndoorPlants";
import OutdoorPlants from "./pages/OutdoorPlants";
import { DataProvider } from "./DataProvider";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  function addItemToCart(plantId, quantity) {
    const newItem = {
      plantId: plantId,
      quantity: quantity,
    };
    cart.push(newItem);
    setCart(cart);
  }

  function deleteItem(plantId) {
    const newCart = cart.filter((item) => item.plantId !== plantId);
    setCart(newCart);
  }

  function updateItemQuantity(plantId, quantity) {
    for (const cartItem of cart) {
      if (cartItem.plantId === plantId) {
        cartItem.quantity = quantity;
      }
    }
    setCart([...cart]);
  }

  return (
    <DataProvider.Provider
      value={{
        cart,
        addItemToCart,
        deleteItem,
        updateItemQuantity,
      }}
    >
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/basket">
            <Basket />
          </Route>
          <Route exact path="/about-us">
            <AboutUs />
          </Route>
          <Route exact path="/plant/:slug">
            <PlantDetail />
          </Route>
          <Route exact path="/sign-in">
            <SignIn />
          </Route>
          <Route exact path="/indoor-plants">
            <IndoorPlants />
          </Route>
          <Route exact path="/outdoor-plants">
            <OutdoorPlants />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </DataProvider.Provider>
  );
}

export default App;
