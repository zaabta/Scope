import { View, Image, Text, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native';
import { useContext } from "react";
import { Context } from "../context";

const Card = ({  imgSrc, title, population, region, capital })=> {
    const navigator = useNavigation();
    const { darkMode } = useContext(Context);
    return(<TouchableOpacity 
        onPress={() => navigator.navigate("singleCountry", {
            name : title
        })} style={{
        flexDirection: "column",
        backgroundColor: !darkMode ? "black": "white",
        elevation: 20,
        borderRadius: 10,
        width: 250,
        height: 280,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
    }}>
        <Image style={{
             width: "100%",
             height: "50%",
             borderTopLeftRadius: 10,
             borderTopRightRadius: 10,
        }} source={{ uri: imgSrc  }} />
        <View style={{ padding: 20 }}>
            <Text style={{ 
            fontSize: 15,
            fontWeight: 800,
            marginBottom: 5,
            color: !darkMode ? "white": "black",
            }}>{title}</Text>
            <View>
                <Text style={{ color: !darkMode ? "white": "black", }}>
                    <Text style={{ fontWeight: 600, color: !darkMode ? "white": "black",}}>population:</Text> {population}
                    </Text>
                <Text style={{ color: !darkMode ? "white": "black", }}>
                <Text style={{ fontWeight: 600, color: !darkMode ? "white": "black",}}>region: </Text>
                     {region}</Text>
                <Text style={{ color: !darkMode ? "white": "black", }}>
                <Text style={{ fontWeight: 600, color: !darkMode ? "white": "black",}}>capital: </Text>
                    {capital}</Text>
            </View>
        </View>
    </TouchableOpacity>)
}

export default Card;