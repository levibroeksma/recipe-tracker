import './App.css';
import logo from './logo.svg';
import Header from './components/Header/Header'
import {Switch, Route} from 'react-router-dom';
import HomePage from "./Pages/Home-page/Home-page";
import AboutUs from "./Pages/About-us";
import RecipePage from "./Pages/Recipe-page/Recipe-page";
import ContactPage from "./Pages/Contact/Contact-page";
import ThankYou from "./Pages/Contact/Thank-you";
import AccountPage from "./Pages/SignIn/SignIn";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import RegisterPage from "./Pages/SignUp/SignUp";
import TermsAndConditions from "./Pages/Terms-and-conditions/TermsAndConditions";
import PrivacyPolicy from "./Pages/Privacy-policy/Privacy-policy-page";
import RegstrationConfirmation from "./Pages/Forgot-password/Registration-confirmation-page";
import MyAccount from "./Pages/My-account-page/My-account-page";
import ForgotPasswordPage from "./Pages/Forgot-password/Forgot-password-page";
import AddRecipe2 from "./Pages/Add-recipe-page/AddRecipe2";

function App() {
  return (
    <>
      <ScrollToTop/>
      <Header logo={logo}/>
      <Switch>
          <Route exact path="/"><HomePage/></Route>
          <Route path="/recipes"><RecipePage/></Route>
          <Route path="/about-us"><AboutUs/></Route>
          <Route exact path="/contact"><ContactPage/></Route>
          <Route path="/contact/thank-you" ><ThankYou /></Route>
          <Route exact path="/signin"><AccountPage/></Route>
          <Route exact path="/my-account"><MyAccount/></Route>
          <Route path="/forgot-password"><ForgotPasswordPage/></Route>
          <Route exact path="/add-recipe"><AddRecipe2/></Route>
          <Route path="/register"><RegisterPage/></Route>
          <Route path="/register/confirmation"><RegstrationConfirmation/></Route>
          <Route path="/terms-and-conditions"><TermsAndConditions/></Route>
          <Route path="/privacy-policy"><PrivacyPolicy /></Route>
      </Switch>
      <Footer />
    </>
);
}

export default App;