import { Image, Text, View } from "react-native";

export default function CityCard({
    title,
    image
}) {
    return (
        <View style={styles.card}>
            <View>
                <Image 
                source={{
                    uri: image,
                    width: 100,
                    height: 148,
                }}/>
            </View>
            <View>
                <Text>{title}</Text>
            </View>
        </View>
    )
}

const styles = {
    card: {
       flexDirection: "row",

    }
}