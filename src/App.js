import {
  BrowserRouter as Router,
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

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
    // if item is already in the cart just increase the quantity by one
    if (cart.find((item) => item.plantId === plantId)) {
      setCart(
        cart.map((item) => {
          if (item.plantId === plantId) {
            return {
              plantId: item.plantId,
              quantity: item.quantity + quantity,
            };
          }
          return item;
        })
      );
    } else {
      // otherwise push new item to the cart array
      const newItem = {
        plantId: plantId,
        quantity: quantity,
      };
      cart.push(newItem);
      setCart(cart);
    }
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
        <ScrollToTop />
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

function ScrollToTop() {
  const location = useLocation();
  const { pathname, hash } = location;

  useEffect(() => {
    if (hash.length > 0) {
      const el = document.getElementById(hash.slice(1));
      if (el) {
        el.scrollIntoView();
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname, hash]);

  return null;
}
