import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import CityList from './components/CityList.jsx';
import data from './data.json';
import { useState } from 'react';

export default function App() {

  const [selectedCity, setSelectedCity] = useState(null)

  const cityPressHandler = (cityId) => {
    setSelectedCity(cityId)
}
  return (
    selectedCity ? alert("test") :
    <CityList cities={data.cities} cityPressHandler={cityPressHandler}/>
  );
}

