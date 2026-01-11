import CityList from './components/CityList.jsx';
import data from './data.json';
import { useState } from 'react';
import CityDetails from './components/CityDetails.jsx';

export default function App() {

  const [selectedCity, setSelectedCity] = useState(null)

  const cityPressHandler = (cityId) => {
    const city = data.cities.find(city => city.id === cityId)
    setSelectedCity(city)
}
  return (
    selectedCity ? <CityDetails city={selectedCity}/> :
    <CityList cities={data.cities} cityPressHandler={cityPressHandler}/>
  );
}

