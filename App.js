import CityList from './components/CityList.jsx';
import data from './data.json';
import { useState } from 'react';
import CityDetails from './components/CityDetails.jsx';

export default function App() {

  const [selectedCity, setSelectedCity] = useState(null)

  const cityPressHandler = (cityId) => {
    const city = data.cities.find(city => city.id === cityId)
    setSelectedCity(city)
  };
  
  const closeDetailsHandler = () => {
    setSelectedCity(null)
  }

  return (
    selectedCity ? <CityDetails city={selectedCity} onClose={closeDetailsHandler}/> :
    <CityList cities={data.cities} cityPressHandler={cityPressHandler}/>
  );
}

