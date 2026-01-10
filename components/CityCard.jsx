import { Text, View } from "react-native";

export default function CityCard({
    title,
    image
}) {
    return(
        <View>
            <Text>{title}</Text>
        </View>
    )
}