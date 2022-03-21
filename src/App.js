import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home/Home';
import AddToken from './pages/AddToken/AddToken';
import EditToken from './pages/EditToken/EditToken';


function App() {
  return (
    <div className="App">
      <div className="content">
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route exact path="/add-token"><AddToken /></Route>
          <Route exact path="/edit-token"><EditToken /></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
