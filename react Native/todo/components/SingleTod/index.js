import { View, Text, StyleSheet } from "react-native";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export const SingleTodo = ({ content }) => {
  return (
    <View style={styles.singleTodo}>
      <Text style={styles.content}> {content} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    singleTodo: {
        width: "90%",
        height: 53,
        backgroundColor: "white",
        border: "none",
        borderRadius: 10,
        justifyContent: "center",
        paddingLeft: 10,
    },
    content: {
        fontWeight: 400,
        fontSize: 18
    }
});
