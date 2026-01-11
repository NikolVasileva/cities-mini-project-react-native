import { View, Text, ScrollView } from "react-native";
import data from '../data.json';
import CityCard from "./CityCard.jsx";


export default function CityList({cityPressHandler}) {
    return (
        <View style={styles.body}>
            <Text style={styles.title}>Cities</Text>
            <ScrollView style={{marginBottom: 70}}>
                {data.cities.map(city => <CityCard 
                key={city.id} 
                id={city.id}
                title={city.title}
                image={city.image}
                country={city.country}
                onPress={cityPressHandler}
                />
                )}
            </ScrollView>
        </View>
    )
}

const styles = {
    title: {
        textAlign: "center", 
        fontSize: 30, 
        fontWeight: 600,
        marginBottom: 30,
        fontColor: "#000",
    },
    body: {
        paddingTop: 70,
    }
}