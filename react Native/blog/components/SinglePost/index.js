import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

export const SingleBlog = ({
  img,
  title,
  des,
  view,
  date,
  tags,
  slug,
  navigation
}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("single-post", {
          slug,
          view 
        })
      }
    >
      <View style={styles.singleBlog}>
        <Image style={styles.img} source={{ uri: img }} />
        <View style={styles.info}>
          <Text style={styles.header}>{title}</Text>
          <View style={styles.icons}>
            <View
              style={{
                flexDirection: "column"
              }}
            >
              <AntDesign name="eye" size={24} color="black" />
              <Text>{view}</Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <MaterialIcons name="date-range" size={24} color="black" />
              <Text>{date}</Text>
            </View>
            <View
              style={{
                flexDirection: "column"
              }}
            >
              <AntDesign name="tags" size={24} color="black" />
              <Text>{tags.length > 1 ? tags[0] + " ,..." : tags[0]}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  singleBlog: {
    backgroundColor: "whitesmoke",
    width: "90%",
    height: 120,
    flexDirection: "row",
    borderRadius: 15
  },
  img: {
    width: "30%",
    borderTopLeftRadius: 15
  },
  info: {
    flexDirection: "column",
    justifyContent: "space-around",
    width: "70%"
  },
  header: {
    paddingLeft: 5,
    fontSize: 18,
    fontWeight: 700,
    color: "black"
  },
  icons: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center"
  }
});
