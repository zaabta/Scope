import { useState, useEffect, useContext } from 'react';
import { View } from "react-native"
import { Searchbar, List } from 'react-native-paper';
import CardList from '../components/CardList';
import { Context } from '../context';

const Home = () => {
    const contextData = useContext(Context)
    const [countries, setCountries] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [region, setRegion] = useState("All region");
    const [expand, setExpand] = useState(false);
    const getData = async (url) => {
        const res = await fetch(url);
        const json = await res.json();
        setCountries(json);
      }
      useEffect(() =>{
        getData("https://restcountries.com/v3.1/all")
      },[])
    return (<View>
        <Searchbar 
            style={{ marginTop: 20, width: "80%",
            marginRight: "auto",
            marginLeft: "auto",
            backgroundColor: "white" }}
            mode="bar" 
            placeholder="Search For country..." 
            onChangeText={(text) => setSearchQuery(text)} 
            value={searchQuery}/>
        <List.Section style={{ borderRadius: 10, marginLeft: "auto", marginRight: "auto",marginTop:20,width: "50%", backgroundColor: "white", zIndex: 3, elevation: 3 }}>
          <List.Accordion  
          style={{ borderRadius: 10,backgroundColor: "white", zIndex: 999, elevation: 3 }}
            title={region} 
            expanded={expand} 
            onPress={() => setExpand(!expand)}>
              <List.Item  title={"All region"} value={"All region"} onPress={() => {
                    setRegion("All region") 
                    setExpand(false)
                  }} />
                  <List.Item  title={"Africa"} value={"Africa"} onPress={() => {
                    setRegion("Africa") 
                    setExpand(false)
                  }} />
                  <List.Item  title={"Americas"} value={"Americas"} onPress={() => {
                    setRegion("Americas") 
                    setExpand(false)
                  }} />
                  <List.Item  title={"Asia"} value={"Asia"} onPress={() => {
                    setRegion("Asia") 
                    setExpand(false)
                  }} />
                  <List.Item  title={"Europe"} value={"Europe"} onPress={() => {
                    setRegion("Europe") 
                    setExpand(false)
                  }} />
                  <List.Item  title={"Oceania"} value={"Oceania"} onPress={() => {
                    setRegion("Oceania") 
                    setExpand(false)
                  }} />
          </List.Accordion>
        </List.Section>
        <CardList 
            data={countries.filter((country) => 
            country.name.common.toLowerCase().includes(searchQuery.toLowerCase())).filter((country) => region !== "All region" ? country.region == region: true)}
          />
    </View>)
}

export default Home