import './App.css';
import logo from './logo.svg';
import Header from './components/Header/Header'
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom';
import HomePage from "./Pages/Home-page/Home-page";
import AboutUs from "./Pages/About-us";
import RecipePage from "./Pages/Recipe-page/Recipe-page";
import ContactPage from "./Pages/Contact/Contact-page";
import ThankYou from "./Pages/Contact/Thank-you";
import AccountPageLogin from "./Pages/Login-register-page/Account-page-login";
import Footer from "./components/Footer/Footer";
import StylePage from "./Pages/Style-page/Style-page";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import RegisterPage from "./Pages/Login-register-page/Register-page";
import AccountPageRegister from "./Pages/Login-register-page/Account-page-register";
import TermsAndConditions from "./Pages/TermsAndConditions";
import PrivacyPolicy from "./Pages/Privacy-policy/Privacy-policy-page";
import RegstrationConfirmation from "./Pages/Login-register-page/Registration-confirmation-page";
import MyAccount from "./Pages/My-account-page/My-account-page";
import AddRecipe from "./Pages/Add-recipe-page/Add-recipe";
import ForgotPasswordPage from "./Pages/Login-register-page/Forgot-password-page";

function App() {
  return (
      <Router>
          <ScrollToTop/>
          <Header logo={logo}/>

          <Switch>
              <Route exact path="/"><HomePage/></Route>
              <Route path="/recipes"><RecipePage/></Route>
              <Route path="/about-us"><AboutUs/></Route>
              <Route exact path="/contact"><ContactPage/></Route>
              <Route path="/contact/thank-you" ><ThankYou /></Route>
              <Route path="/style"><StylePage/></Route>
              <Route exact path="/account"><AccountPageLogin/></Route>
              <Route exact path="/my-account"><MyAccount/></Route>
              <Route path="/forgot-password"><ForgotPasswordPage/></Route>
              <Route path="/my-account/add-recipe"><AddRecipe/></Route>
              <Route exact path="/register"><AccountPageRegister/></Route>
              <Route path="/register/registration"><RegisterPage/></Route>
              <Route path="/register/confirmation"><RegstrationConfirmation/></Route>
              <Route path="/terms-and-conditions"><TermsAndConditions/></Route>
              <Route path="/privacy-policy"><PrivacyPolicy /></Route>
          </Switch>

          <Footer />
      </Router>
  );
}

export default App;