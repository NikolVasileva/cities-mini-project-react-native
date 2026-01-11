import { View, Text, ScrollView } from "react-native";
import data from '../data.json';
import CityCard from "./CityCard.jsx";


export default function CityList() {
    return (
        <View style={styles.body}>
            <Text style={styles.title}>Cities</Text>
            <View>
                {data.cities.map(city => <CityCard 
                key={city.id} 
                title={city.title}
                image={city.image}
                country={city.country}
                />
                )}
            </View>
        </View>
    )
}

const styles = {
    title: {
        textAlign: "center", 
        fontSize: 30, 
        fontWeight: 600,
        paddingBottom: 30,
        fontColor: "#EB8973"
    },
    body: {
        paddingTop: 70,
    }
}