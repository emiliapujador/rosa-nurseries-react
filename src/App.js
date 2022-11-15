import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import SignIn from "./pages/SignIn";
import Basket from "./pages/Basket";

// todos
// 3 - crear la pagina del about us

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/basket">
          <Basket />
        </Route>
        <Route exact path="/about-us">
          <AboutUs />
        </Route>
        <Route exact path="./sign-in">
          <SignIn />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
