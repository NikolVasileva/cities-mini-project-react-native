import { Button, Image, Text, TouchableOpacity, View } from "react-native";

export default function CityCard({
    title,
    image,
    country,
    onPress
}) {
    return (
        <View style={styles.card}>
            <View style={{ paddingRight: 15 }}>
                <Image
                    style={{ borderRadius: 5 }}
                    source={{
                        uri: image,
                        width: 150,
                        height: 148,
                    }} />
            </View>
            <View>
                <Text style={styles.title}>{title}</Text>
                <Text style={{paddingBottom: 10}}>{country}</Text>

                <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={styles.buttonText}>Details</Text>
                </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = {
    card: {
        flexDirection: "row",
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: "#FFF9F7",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#EB8973",
        justifyContent: "space-eventualy",
    },
    title: {
        fontSize: 18,
        fontWeight: 500,
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