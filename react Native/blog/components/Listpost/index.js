import { View } from "react-native";
import { SingleBlog } from "../SinglePost";

export const ListPost = ({ items, navigation }) => {
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minWidth: 400,
        gap: 20
      }}
    >
      {items.map((singleBlog, index) => {
        return (
          <SingleBlog
            key={index}
            img={singleBlog.thumbnail}
            title={singleBlog.title}
            view={singleBlog.views}
            date={singleBlog.date}
            tags={singleBlog.tags}
            navigation={navigation}
            slug={singleBlog.slug}
          />
        );
      })}
    </View>
  );
};
