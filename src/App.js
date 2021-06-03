import './App.css';
import logo from './logo.svg';
import Header from './components/Header/Header'
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import HomePage from "./Pages/Home-page/Home-page";
import AboutUs from "./Pages/About-us";
import RecipePage from "./Pages/Recipe-page/Recipe-page";
import ContactPage from "./Pages/Contact/Contact-page";
import ThankYou from "./Pages/Contact/Thank-you";
import AccountPage from "./Pages/Account-page/Account-page";
import Footer from "./components/Footer/Footer";
import StylePage from "./Pages/Style-page";

function App() {
  return (
      <Router>
          <Header logo={logo}/>

          <Switch>
              <Route exact path="/"><HomePage/></Route>
              <Route path="/recipes"><RecipePage/></Route>
              <Route path="/about-us"><AboutUs/></Route>
              <Route exact path="/contact"><ContactPage/></Route>
              <Route path="/contact/thank-you" ><ThankYou /></Route>
              <Route path="/style"><StylePage/></Route>
              <Route path="/account"><AccountPage/></Route>
          </Switch>

          <Footer />
      </Router>
  );
}

export default App;