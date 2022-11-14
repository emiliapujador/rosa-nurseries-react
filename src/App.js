import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//pages
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";

// todos
// 3 - crear la pagina del about us

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/basket">
          <h1>esto se muestra por que estan en el carrito</h1>
        </Route>
        <Route exact path="/about-us">
          <AboutUs />
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
