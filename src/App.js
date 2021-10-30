import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import AddService from './Components/AddService';
import Login from "./Components/Login";
import AuthProvider from "./contexts/AuthProvider";
import PrivateRoute from './Components/PrivateRoute';

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
     <Navbar />
     <Switch>
     <Route exact path="/"> 
            <Home />
      </Route>
      <Route exact path="/home">
          <Home></Home>
      </Route>
      <Route exact path="/services">
        <Services />
      </Route >
      <PrivateRoute exact path="/addService">
      <AddService />
      </PrivateRoute>
      <Route exact path="/login">
        <Login />
      </Route>
     </Switch>
     </Router>
     </AuthProvider>
    </div>
  );
}

export default App;
