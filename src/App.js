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
import AddRecipe from "./Pages/Add-recipe-page/AddRecipe";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import PageFileUpload from "./Pages/PageFileUpload";

export default function App() {
  return (
    <>
      <ScrollToTop/>
      <Header logo={logo}/>
      <Switch>
          <Route exact={true} path="/"><HomePage/></Route>
          <Route exact={true} path="/recipes"><RecipePage/></Route>
          <Route exexact={true}act component={AboutUs} path="/about-us"/>
          <Route exexact={true}act path="/contact"><ContactPage/></Route>
          <Route exact={true} path="/contact/thank-you" ><ThankYou /></Route>
          <Route exact={true} path="/signin"><AccountPage/></Route>
          <ProtectedRoute exact={true} path="/my-account" component={MyAccount}/>
          <Route exact={true} path="/forgot-password"><ForgotPasswordPage/></Route>
          <ProtectedRoute exact={true} path="/add-recipe" component={AddRecipe} />
          <Route exact={true} path="/add-recipe"><AddRecipe/></Route>
          <Route exact={true} path="/register"><RegisterPage/></Route>
          <Route exact={true} path="/test"><PageFileUpload/></Route>
          <Route exact={true} path="/register/confirmation"><RegstrationConfirmation/></Route>
          <Route exact={true} path="/terms-and-conditions"><TermsAndConditions/></Route>
          <Route exact={true} path="/privacy-policy"><PrivacyPolicy /></Route>
          <Route path="/*" component={() => { return <h1>404 PAGE NOT FOUND</h1>}}/>
      </Switch>
      <Footer />
    </>
);
}

