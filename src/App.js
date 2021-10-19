import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Gallery from "./components/Gallery/Gallery";
import NotFound from "./components/NotFound/NotFound";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Details from "./components/Details/Details";
import AllMedicine from "./components/AllMedicine/AllMedicine";
import DonateMedicine from "./components/DonateMedicine/DonateMedicine";
import RequestMedicine from "./components/RequestMedicine/RequestMedicine";


function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/" >
              <Home />
            </Route>
            <Route exact path="/home" >
              <Home />
            </Route>
            <Route exact path="/about" >
              <About />
            </Route>
           
            <Route exact path="/all-medicine" >
              <AllMedicine></AllMedicine>
            </Route>
            <Route exact path="/donate" >
              <DonateMedicine></DonateMedicine>
            </Route>
            <Route exact path="/request" >
              <RequestMedicine></RequestMedicine>
            </Route>
            <Route exact path="/photo-gallery" >
              <Gallery />
            </Route>
            <Route exact path="/Login">
              <Login></Login>
            </Route>
            <Route exact path="/Register">
              <Register></Register>
            </Route>
            <PrivateRoute exact path="/Details">
              <Details></Details>
            </PrivateRoute>

            <Route path="*">
              <NotFound />
            </Route>

          </Switch>

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
