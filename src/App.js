import {HashRouter as Router, Route, Switch} from "react-router-dom";
import './style/index.css';
import Home from "./components/Home";
import Cart from "./components/Cart";
import Admin from "./components/Admin";
import Nav from "./components/Nav";

function App() {
  return (
      <Router>
        <div className="App">
            <Nav/>
          <Switch>
            <Route exact path={"/"} component={Home}/>
            <Route path={"/cart"} component={Cart}/>
            <Route path={"/admin"} component={Admin}/>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
