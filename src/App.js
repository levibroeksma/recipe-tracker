import './App.css';
import logo from './logo.svg';
import Header from './components/Header/Header'
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import HomePage from "./Pages/Home-page";
import AboutUs from "./Pages/About-us";
import RecipePage from "./Pages/Recipe-page";
import ContactPage from "./Pages/Contact-page";
import AccountPage from "./Pages/Account-page";
import Footer from "./components/Footer/Footer";

function App() {
  return (
      <Router>
          <Header
              logo={logo}
          />
          <Switch>
            <Route exact path="/">
                <HomePage/>
            </Route>
              <Route path="/recipes">
                  <RecipePage/>
              </Route>
              <Route path="/about-us">
                  <AboutUs/>
              </Route>
              <Route path="/contact">
                  <ContactPage/>
              </Route>
              <Route path="/account">
                  <AccountPage/>
              </Route>
          </Switch>
          <Footer />
      </Router>
  );
}

export default App;
