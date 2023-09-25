import { View, Text, TouchableOpacity, Platform } from "react-native";
import { Entypo } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons'; 
import { Context } from '../context';
import { useContext } from 'react';

const Header = () => {
    const {darkMode, toggleDarkMode } = useContext(Context);
    return (
    <View style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: 60,
        backgroundColor: darkMode ? "white": "black",
        paddingLeft: 10,
        paddingRight: 10,
        elevation: 20,
    }}>
        <Text style={{ color: darkMode ? "black": "white", fontWeight: 800, fontSize: 15 }}>
            Where in World ?</Text>
        <TouchableOpacity style={{
             flexDirection: "row",
             alignItems: "center",
             justifyContent: "center",
             gap: 10,
        }}
        onPress={() => toggleDarkMode()}
        >
            {!darkMode ? 
                <Entypo name="light-up" size={24} color={darkMode ? "black": "white"} />:
                <Feather name="moon" size={24} color={darkMode ? "black": "white"} />
            }
            <Text style={{ fontSize: 15, color: darkMode ? "black": "white" }}>{!darkMode ? "light":  "Dark"} Mode</Text>
        </TouchableOpacity>
    </View>
    )
}

export default Header;