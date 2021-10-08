import "./App.css";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import SigninPage from './pages/SigninPage';
import HomePage from './pages/HomePage';
import SignupPage from './pages/SignupPage';
import ServicePage from './pages/ServicePage';
import ProductPage from './pages/ProductPage';
import MediaPage from './pages/MediaPage';

function App() {
  return(
    <Router>
      <div>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/signin' component={SigninPage}/>
        <Route exact path='/signup' component={SignupPage}/>
        <Route exact path='/service' component={ServicePage}/>
        <Route exact path='/product' component={ProductPage}/>
        <Route exact path='/media' component={MediaPage}/>
      </div>
    </Router>
  );
}

export default App;
