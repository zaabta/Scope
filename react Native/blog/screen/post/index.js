import { View, Text, Image } from "react-native";
import { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const SinglePostScreen = ({ route }) => {
  const [singlePost, setSinglePost] = useState({});
  useEffect(() => {
    fetch(
      `https://www.wp-course.site/wp-json/youthink/post?slug=${route.params.slug}`
    )
      .then((res) => res.json())
      .then((data) => setSinglePost(data.data));
  }, []);
  return (
    <View
      style={{
        flexDirection: "column",
        backgroundColor: "black",
        width: "100%",
        height: "100%",
        justifyContent: "space-between",
        alignItems: "center"
      }}
    >
      <Text
        style={{
          marginTop: 5,
          fontSize: 25,
          color: "white"
        }}
      >
        {singlePost?.title}
      </Text>
      <Image
        style={{
          marginVertical: 10,
          width: "90%",
          height: "40%"
        }}
        source={{ uri: singlePost.thumbnail }}
      />
      <Text
        style={{
          marginVertical: 10,
          color: "white",
          fontSize: 20,
          textAlign: "left",
          paddingLeft: 10
        }}
      >
        {singlePost?.excerpt}
      </Text>
      <View style={{
        width: "90%",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center"
      }}>
        <View
          style={{
            flexDirection: "column",
          }}
        >
          <AntDesign name="eye" size={24} color="white" />
          <Text style={{color: "white"}}>{singlePost.views}</Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <MaterialIcons name="date-range" size={24} color="white" />
          <Text style={{color: "white"}} >{singlePost.date}</Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <AntDesign name="tags" size={24} color="white" />
          <Text style={{color: "white"}}>{singlePost?.tags?.join(" ,")}</Text>
        </View>
      </View>
    </View>
  );
};

export default SinglePostScreen;
