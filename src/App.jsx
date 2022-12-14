import './App.css';
import Table from './components/Table';
import Form from './components/Form';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Table} />
        <Route path='/users/:id' component={Form} />
        <Route path='/users/create' component={Form} />
      </Switch>
    </Router>
  );
}

export default App;
