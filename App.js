import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import CityList from './components/CityList.jsx';
import data from './data.json';

export default function App() {
  
  const cityPressHandler = () => {
    alert("Test")
}
  return (
    <CityList cityPressHandler={cityPressHandler}/>
  );
}

