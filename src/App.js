import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

//pages
import Home from "./pages/Home";

// todos
// 1 - separar el footer y el contact us en dos componentes distintos
// 3 - crear la pagina del about us

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/cart">
          <h1>esto se muestra por que estan en el carrito</h1>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
