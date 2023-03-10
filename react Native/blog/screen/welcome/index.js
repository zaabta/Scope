import { View, Text, Pressable, StyleSheet } from "react-native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        height: "100%",
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Text style={styles.text}>Welcome to Blog App</Text>
      <Pressable  
      onPress={()=> navigation.navigate("blog")}
      >
        <Text
          style={{
            ...styles.text,
            fontSize: 25,  //change
            marginTop: 20
          }}
        >
          blog page
        </Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
    fontSize: 30
  }
});

export default WelcomeScreen;
