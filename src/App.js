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
          <Route exact path='/'>
            <Index />
          </Route>
          <Route exact path='/signup'>
            <SignUp />
          </Route>
          <Route exact path='/login'>
            <LogIn />
          </Route>
          <Route exact path='/home'>
            <Home />
          </Route>
          <Route exact path='/dashboard'>
            <Dashboard />
          </Route>
          <Route exact path='/kyc'>
            <KYC />
          </Route>
        </Switch>
      </Router>
    </div>
    </>
  );
}

export default App;
