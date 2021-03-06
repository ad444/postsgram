import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Index from './Components/Index';
import SignUp from './Components/SignUp';
import LogIn from './Components/LogIn';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import KYC from './Components/KYC';
const App = () => {
  return (
    <>
    <div id='main' className='container-fluid'>
      <Router>
        <Switch>
          <Route exact path='/postsgram'>
            <Index />
          </Route>
          <Route exact path='/postsgram/signup'>
            <SignUp />
          </Route>
          <Route exact path='/postsgram/login'>
            <LogIn />
          </Route>
          <Route exact path='/postsgram/home'>
            <Home />
          </Route>
          <Route exact path='/postsgram/dashboard'>
            <Dashboard />
          </Route>
          <Route exact path='/postsgram/kyc'>
            <KYC />
          </Route>
        </Switch>
      </Router>
    </div>
    </>
  );
}

export default App;
