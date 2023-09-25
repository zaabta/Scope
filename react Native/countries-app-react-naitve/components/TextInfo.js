import { Text, View } from "react-native"

export const TextInfo = ({ title, info, titleStyle, infoStyle }) => {
    return(<View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
        <Text style={titleStyle}>{title}</Text>
        <Text style={infoStyle} >{info}</Text>
    </View>)
}
