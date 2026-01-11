import { Text, View, Image } from "react-native";

export default function CityDetails(props) {
    return(
        <View style={styles.detailsContainer}>
            <Text style={styles.title}>{props.city.title}</Text>
            <View style={{ paddingRight: 15 }}>
                <Image
                    style={{ borderRadius: 5 }}
                    source={{
                        uri: props.city.image,
                        width: 150,
                        height: 148,
                    }} />
            </View>
        </View>
    )
}

const styles = {
    detailsContainer: {
        alignItems: 'center',
        gap: 10, 
        marginTop: 70,
    },
    title: {
        fontSize: 20,
        fontWeight: 600,
    },

}