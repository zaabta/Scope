import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, ToastAndroid,StyleSheet } from "react-native";
import LoadingScreen from "../loading";
import { ListPost } from "../../components/Listpost";
import { AntDesign } from "@expo/vector-icons";

const BlogScreen = ({navigation}) => {
  const [page, setPage] = useState(1);
  const [blogs, setBlogs] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const getData = async (url) => {
    try {
      setIsLoading(true);
      const res = await fetch(url);
      const json = await res.json();
      setIsLoading(false);
      return json;
    } catch (err) {
      console.log("ERROR--> ", err);
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getData(`https://www.wp-course.site/wp-json/youthink/posts?page=${page}`)
      .then((data) => {
        if (
          data.success &&
          blogs.length + data.data.length <= data.meta.total_posts
        )
          setBlogs((prev) => [...prev, ...data.data]);
        if (
          data.success &
          (blogs.length + data.data.length == data.meta.total_posts)
        )
          ToastAndroid.show("All Posts are loaded !", ToastAndroid.SHORT);
      })
      .catch((err) => Alert.alert("ERROR", "something went wrong"));
  }, [page]);
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Our Lastes posts</Text>
      <LoadingScreen visible={isloading} />
      <ScrollView
        onScroll={(e) => {
          // onScroll down
          if (
            !isloading &&
            Math.floor(
              e.nativeEvent.contentSize.height - e.nativeEvent.contentOffset.y
            ) === Math.floor(e.nativeEvent.layoutMeasurement.height)
          ) {
            setPage((prev) => prev + 1);
          }
        }}
        contentContainerStyle={{
          paddingBottom: 20,
          alignItems: "center"
        }}
      >
        <ListPost items={blogs} navigation={navigation} />
        <AntDesign name="caretdown" size={50} color="white" />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center"
  },
  header: {
    color: "whitesmoke",
    fontSize: 40,
    marginVertical: 30,
    textTransform: "capitalize",
    fontWeight: 500,
    textDecorationLine: "underline",
    fontVariant: "small-caps"
  }
});

export default BlogScreen;
