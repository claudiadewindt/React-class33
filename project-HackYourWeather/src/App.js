import './App.css';
import CityWeather from './components/CityWeather';

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', marginTop: '30px' }}>Weather</h1>
      <CityWeather />
    </div>
  );
}

export default App;
