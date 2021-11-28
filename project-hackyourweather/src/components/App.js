import './App.css';
import WeatherPage from './WeatherPage';
import Chart from './Chart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WeatherPage />} />
        <Route path="/:cityId" element={<Chart />} />
      </Routes>
    </Router>
  );
}

export default App;
