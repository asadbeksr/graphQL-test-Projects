import './App.css';
import { Switch, Route } from 'react-router-dom';
import Table from './components/Table';
import Form from './components/Form';

import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Table} />
        <Route exact path='/users/:id' component={Form} />
        <Route exact path='/users/create' component={Form} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
