import { View, ActivityIndicator, Text } from "react-native";

const LoadingScreen = ({ visible }) => {
  return visible ? (
    <View
      style={{
        height: "100%",
        width: "100%",
        opacity: 0.7865,
        position: "absolute",
        backgroundColor: "black",
        zIndex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 15
      }}
    >
      <ActivityIndicator size={120} color={"white"} />
      <Text
        style={{
          color: "white",
          fontSize: 50
        }}
      >
        Loading....
      </Text>
    </View>
  ) : (
    <></>
  );
};

export default LoadingScreen;
