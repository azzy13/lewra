import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Router>
      <div className='App'>
        <h1>Randi</h1>
      </div>
      <Switch>
        <Route exact path='/login' component={Login} />
        <Route path='/register' component={Register} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
