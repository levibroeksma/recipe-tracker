import './App.css';
import logo from './logo.svg';
import Header from './components/Header/Header'
import {Switch, Route} from 'react-router-dom';
import HomePage from "./pages/Home-page/Home-page";
import AboutUs from "./pages/About-us";
import RecipePage from "./pages/Recipe-page/Recipe-page";
import ContactPage from "./pages/Contact/Contact-page";
import ThankYou from "./pages/Contact/Thank-you";
import AccountPage from "./pages/SignIn/SignIn";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import RegisterPage from "./pages/SignUp/SignUp";
import TermsAndConditions from "./pages/Terms-and-conditions/TermsAndConditions";
import PrivacyPolicy from "./pages/Privacy-policy/Privacy-policy-page";
import RegistrationConfirmation from "./pages/SignUp/Registration-confirmation-page";
import MyAccount from "./pages/My-account-page/My-account-page";
import ForgotPasswordPage from "./pages/SignIn/Forgot-password-page";
import AddRecipe from "./pages/Add-recipe-page/AddRecipe";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import RecipeDetailPage from "./pages/Recipe-detail-page/RecipeDetailPage";
import UploadedRecipe from "./pages/Add-recipe-page/UploadedRecipe";

export default function App() {
  return (
    <>
      <ScrollToTop/>
      <Header logo={logo}/>
      <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/recipes" component={RecipePage} />
          <Route exact path="/recipes/:id" component={RecipeDetailPage}/>
          <Route exact path="/recipe-uploaded" component={UploadedRecipe}/>
          <Route exact path="/about-us" component={AboutUs}/>
          <Route exact path="/contact" component={ContactPage}/>
          <Route exact path="/contact/thank-you" component={ThankYou}/>
          <Route exact path="/sign-in" component={AccountPage}/>
          <ProtectedRoute exact path="/my-account" component={MyAccount}/>
          <Route exact path="/forgot-password" component={ForgotPasswordPage}/>
          <ProtectedRoute exact path="/add-recipe" component={AddRecipe} />
          <Route exact path="/add-recipe" component={AddRecipe}/>
          <Route exact path="/register" component={RegisterPage}/>
          <Route exact path="/register/confirmation" component={RegistrationConfirmation}/>
          <Route exact path="/terms-and-conditions" component={TermsAndConditions}/>
          <Route exact path="/privacy-policy" component={PrivacyPolicy}/>
          <Route path="/*" component={() => {return <div className="page-wrapper"><div className="page-wrapper-inner"><h1>404 PAGE NOT FOUND</h1></div></div>}}/>
      </Switch>
      <Footer />
    </>
);
}

