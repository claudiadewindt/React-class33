import Forecast from './Forecast';
import { Link } from 'react-router-dom';
import './CityCard.css';

function CityCard({ cityWeather, setCityWeather }) {
  function handleDelete(e) {
    setCityWeather((prev) =>
      prev.filter((city) => city.card_id !== e.target.id),
    );
  }
  return (
    <div>
      {cityWeather.length > 0 ? (
        cityWeather.map((city, index) => {
          const { name, sys, weather, main, coord, card_id, id } = city;
          return (
            <div
              className="city-card"
              data-testid={`city_card_${index}`}
              key={index}
            >
              <Link
                to={`/${id}`}
                target="_blank"
                style={{
                  textDecoration: 'none',
                  color: 'black',
                }}
              >
                <div className="details-container">
                  <h2>
                    {name}, {sys.country}
                  </h2>
                  <Forecast
                    general={weather[0]}
                    details={main}
                    location={coord}
                  />
                </div>
              </Link>

              <button
                className="delete"
                id={card_id}
                onClick={handleDelete}
                data-testid={`delete_button_${index}`}
              >
                x
              </button>
            </div>
          );
        })
      ) : (
        <p>Search your city weather</p>
      )}
    </div>
  );
}

export default CityCard;
