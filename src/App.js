import './App.css';
import logo from './logo.svg';
import Header from './components/Header/Header'
import { BrowserRouter as Router, Switch, Route,} from 'react-router-dom';

function App() {
  return (
      <>
          <Header
              logo={logo}
          />
      </>
  );
}

export default App;
