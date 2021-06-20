import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './Home'
import Listings from './components/listings'
import Facebook from './facebooklogin';
import FacebokLogin from './fblogin';


function App() {
  return (

    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/listings" component={Listings}></Route>
          <Route exact path="/facebook-login" component={Facebook}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/fblogin" component={FacebokLogin}></Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
