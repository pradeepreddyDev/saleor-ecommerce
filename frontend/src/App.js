import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import Checkout from "./components/Checkout/Checkout";
import LoginRegister from "./components/LoginRegister/LoginRegister";
import Product from "./components/Product/Product";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";


const App = () => {

  return  (
      <Router>
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => <Home {...props} />}
            />
            <Route
              exact
              path="/category"
              render={(props) => <Category {...props} />}
            />
            <Route
              exact
              path="/checkout"
              render={(props) => <Checkout {...props} />}
            />
            <Route
              exact
              path="/account"
              render={(props) => <LoginRegister {...props} />}
            />
            <Route
              exact
              path="/product"
              render={(props) => <Product {...props} />}
            />
            <Route
              exact
              path="/cart"
              render={(props) => <ShoppingCart {...props} />}
            />
          </Switch>
      </Router>
  );
};

export default App;