import CityList from './components/CityList.jsx';
import data from './data.json';
import { useState } from 'react';
import CityDetails from './components/CityDetails.jsx';

export default function App() {

  const [selectedCity, setSelectedCity] = useState(null)

  const cityPressHandler = (cityId) => {
    setSelectedCity(cityId)
}
  return (
    selectedCity ? <CityDetails /> :
    <CityList cities={data.cities} cityPressHandler={cityPressHandler}/>
  );
}

