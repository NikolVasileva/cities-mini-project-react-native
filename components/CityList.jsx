import { View, Text, ScrollView } from "react-native";
import data from '../data.json';
import CityCard from "./CityCard";


export default function CityList() {
    return (
        <View style={styles.body}>
            <Text style={styles.title}>Cities</Text>
            <View>
                {data.cities.map(city => <CityCard key={city.id} title={city.title}/>)}
            </View>
        </View>
    )
}

const styles = {
    title: {
        textAlign: "center", 
        fontSize: 30, 
        fontWeight: 600,
    },
    body: {
        paddingTop: 70,
    }
}