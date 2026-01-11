import { Text, View, Image, TouchableOpacity } from "react-native";

export default function CityDetails(props) {
    return(
        <View style={styles.detailsContainer}>
            <Text style={styles.title}>{props.city.title}</Text>
            <View>
                <Image
                    style={{ borderRadius: 5 }}
                    source={{
                        uri: props.city.image,
                        width: 320,
                        height: 230,
                    }} />
            </View>
            <Text>Country: {props.city.country}</Text>
            <Text>{props.city.description}</Text>
            <TouchableOpacity style={styles.button} onPress={() => onPress(id)}>
                <Text style={styles.buttonText}>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = {
    detailsContainer: {
        alignItems: 'center',
        gap: 10, 
        marginTop: 70,
        padding: 30,
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
    },
    button: {
        backgroundColor: '#EB8973',
        padding: 5,
        borderRadius: 8,
        width: 80
    },
    buttonText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 400,
        textAlign: 'center',
    },

}