import { ScrollView, View } from "react-native"
import Card from "./Card"
import { Context } from "../context" 
import { useContext } from "react"

const CardList = ({ data }) => {
    const { darkMode } = useContext(Context);
    return(<ScrollView>
        <View style={{ 
            flexDirection: "column",
            justifyContent: "center", 
            alignItems: "center",
            gap: 35,
            marginTop: 30,
            marginBottom: 30}}>
            {data.map((item, index) => {
            return(<Card 
                key={index}
                imgSrc={item.flags.png} 
                title={item.name.common} 
                population={item.population}
                region={item.region}
                capital={item.capital}
                />)
        })}
        </View>
        </ScrollView>)
}

export default CardList;