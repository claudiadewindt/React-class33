import './App.css';
import WeatherDataController from './WeatherDataController';
import Chart from './Chart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <h1>Weather</h1>
            <WeatherDataController />
          </Route>

          <Route
            path="/:cityId"
            component={(props) => (
              <Chart data-testid="city" cityId={props.match.params.cityId} />
            )}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
