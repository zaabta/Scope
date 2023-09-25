import { useState, useEffect } from "react";
import { View, Text, Image, ActivityIndicator, Pressable, FlatList } from "react-native";
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";
import { TextInfo } from "../components/TextInfo"
import { Context } from "../context";
import { useContext } from "react";

const SingleCountry = ({ route }) => {
    const { darkMode } = useContext(Context);
    const [country, setCountry] = useState({});
    const [loading, setLoading] = useState(false);
    const navigator = useNavigation();
    const getData = async (url) => {
        setLoading(true)
        const res = await fetch(url);
        const json = await res.json();
        setLoading(false)
        setCountry(json[0]);
      }

    useEffect(() =>{
        getData("https://restcountries.com/v3.1/name/" + route.params.name)
      },[route.params.name])


    return !loading ? 
    <View style={{...style.singleCountry, backgroundColor: darkMode ? "#f5f5f5": "black"}}>
      <Pressable style={style.backButton} onPress={() => navigator.goBack()}>
        <AntDesign name="arrowleft" size={24} 
          color={style.backButton.arrowLeft.color} />
        <Text style={style.backButton.text}>Back</Text>
      </Pressable>
      {Object.keys(country ?? {})?.length  ? (
      <>
        <Image style={style.flag} source={{ uri: country?.flags.png  }}/>
      <Text style={{...style.title, color: darkMode ? "black": "white"}}>{country?.name.common}</Text>
      <View style={style.info}>
        <TextInfo 
          title={"Native Name: "} 
          info={country?.name.official} 
          titleStyle={{ fontWeight: 600, color: darkMode ? "black": "white" }}  
          infoStyle={{ fontWeight: 300, color: darkMode ? "black": "white" }}
          />
          <TextInfo 
          title={"Population: "} 
          info={country?.population} 
          titleStyle={{ fontWeight: 600, color: darkMode ? "black": "white" }}  
          infoStyle={{ fontWeight: 300, color: darkMode ? "black": "white" }}
          />
          <TextInfo 
          title={"Region: "} 
          info={country?.region} 
          titleStyle={{ fontWeight: 600, color: darkMode ? "black": "white" }}  
          infoStyle={{ fontWeight: 300, color: darkMode ? "black": "white" }}
          />
          <TextInfo 
          title={"Sub Region: "} 
          info={country?.subregion} 
          titleStyle={{ fontWeight: 600, color: darkMode ? "black": "white" }}  
          infoStyle={{ fontWeight: 300, color: darkMode ? "black": "white" }}
          />
          <TextInfo 
          title={"Capital: "} 
          info={country?.capital} 
          titleStyle={{ fontWeight: 600, color: darkMode ? "black": "white" }}  
          infoStyle={{ fontWeight: 300, color: darkMode ? "black": "white" }}
          />
      </View>
      <View style={[style.info, { marginTop: 20 }]}>
      <TextInfo 
          title={"Top Level Domain: "} 
          info={country?.tld} 
          titleStyle={{ fontWeight: 600, color: darkMode ? "black": "white" }}  
          infoStyle={{ fontWeight: 300, color: darkMode ? "black": "white" }}
          />
          <View style={{ flexDirection: "row" }}>
            <TextInfo 
            title={"Currencies: "} 
            info={""} 
            titleStyle={{ fontWeight: 600, color: darkMode ? "black": "white" }}  
            infoStyle={{ fontWeight: 300, color: darkMode ? "black": "white" }}
            />
            {
              Object.entries(country?.currencies)?.map(([_, value], )=> 
              <TextInfo 
                title={""} 
                key={value}
                info={value.name} 
                titleStyle={{ fontWeight: 600, color: darkMode ? "black": "white" }}  
                infoStyle={{ fontWeight: 300, color: darkMode ? "black": "white" }}
              />)
            }
          </View>
          <View style={{ flexDirection: "row" }}>
            <TextInfo 
            title={"Languages: "} 
            info={""} 
            titleStyle={{ fontWeight: 600, color: darkMode ? "black": "white" }}  
            infoStyle={{ fontWeight: 300, color: darkMode ? "black": "white" }}
            />
            {
              Object.keys(country?.languages)?.map((key)=> 
              <TextInfo 
                key={key}
                title={""} 
                info={country?.languages[key]} 
                titleStyle={{ fontWeight: 600, color: darkMode ? "black": "white" }}  
                infoStyle={{ fontWeight: 300, color: darkMode ? "black": "white" }}
              />)
            }
          </View>
          <View style={style.BorderCountries}>
            <Text style={{...style.BorderCountries.title, color: darkMode ? "black": "white"}}>Border Countries</Text>
            <View style={style.BorderCountries.countryList}>
              <FlatList
                horizontal
                data={country.borders}
                renderItem={({ item }) => {
                  return(<Pressable 
                    key={item}
                    style={style.BorderCountries.countryList.country} 
                    onPress={() => navigator.setParams({
                      name: item,
                    })}
                    >
                    <Text>{item}</Text>
                  </Pressable>)
                }}
                keyExtractor={(item) => item}
              />
            </View>
          </View>
      </View>
      </>): <>
      <Image style={style.NoDataImage} source={require("../assets/404.gif")}/>
      <Text style={style.NoDataText}> No Data... Go Back Please!</Text>
      </>}
    </View >
    : <View style={style.spinner}>
      <ActivityIndicator size={"large"} color={"black"}/>
    </View>
}

export default SingleCountry;


const style = {
  singleCountry: {
    paddingLeft: 30,
    paddingRight: 30,
    height: "100%"
  },
  flag: {
    width: "100%",
    height: 200,
    marginBottom: 20
  },
  title: {
    marginBottom: 15,
    fontSize: 25,
    fontWeight: 800
  },
  info: {
    gap: 10,
  },
  spinner: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  backButton: {
    width: 120,
    height: 40,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    marginTop: 25,
    marginBottom: 30,
    backgroundColor: "white",
    elevation: 10,
    arrowLeft: {
      color: "black"
    },
    text: {
      fontWeight: 500,
    }
  },
  BorderCountries: {
    marginTop: 10,
    title: {
      fontWeight: 600,
      fontSize: 18,
      marginBottom: 10
    },
    countryList: {
      flexDirection: "row",
      gap: 10,
      flexWrap: "wrap",
      country: {
        backgroundColor: "white",
        width: 80,
        height: 30,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
      }
    },
  },
  NoDataImage: { 
    width: 200, 
    height: 200, 
    marginRight: "auto", 
    marginLeft: "auto",
    marginTop: 50 
  },
  NoDataText: {
    marginLeft: "auto", 
    marginRight: "auto", 
    fontSize: 20, 
    fontWeight: 500
  }
}