import { View, Text, ScrollView } from "react-native";

export default function CityList() {
    return (
        <View style={styles.body}>
            <Text style={styles.title}>Test</Text>
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