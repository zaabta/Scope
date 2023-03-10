import {
  StyleSheet,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Alert
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { SingleTodo } from "./components/SingleTodo";
import { useState } from "react";

const App = () => {
  const [text, setText] = useState("");
  const [todoes, setTodoes] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const createTodo = () => {
    if (text.length > 1)
      setTodoes([
        ...todoes,
        {
          id: todoes.length + 1,
          content: text
        }
      ]);
    else Alert.alert("wrong", "you can not Create empty todo !")  
    setText("");
  };

  const removeTodo = (id) => {
    setTodoes((prev) => {
      const newTodoes = [...prev]; // deep clone
      const index = newTodoes.findIndex((todo) => todo.id === id); // TO find the index
      newTodoes.splice(index, 1); // remove the todo by index
      return newTodoes;
    });
  };
  const editTodo = (id, newContent) => {
    const newTodoes = [...todoes];
    const index = newTodoes.findIndex((todo) => todo.id === id); // TO find the index
    newTodoes[index].content = newContent;
    setTodoes(newTodoes);
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden={true} />
      <Text style={styles.header}>Today’s tasks</Text>
      <ScrollView contentContainerStyle={styles.todoList}>
        {todoes.map((todo, index) => (
          <SingleTodo
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            remove={removeTodo}
            id={todo.id}
            content={todo?.content}
            key={index}
            handleOnEditTodo={editTodo}
          />
        ))}
      </ScrollView>
      <KeyboardAvoidingView
        style={styles.footer}
        behavior={Platform.OS == "ios" ? "padding" : "height"}
      >
        <TextInput
          value={text}
          onChangeText={(value) => {
            setText(value);
          }}
          style={styles.todoInput}
          placeholder="Write a task"
        />
        <TouchableOpacity style={styles.addBtn} onPress={createTodo}>
          <Text style={styles.textBtn}>+</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    fontFamily: "Roboto"
  },
  header: {
    fontWeight: "700",
    fontSize: 28,
    marginTop: 40,
    marginBottom: 20,
    paddingLeft: 10
  },
  app: {},
  todoList: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    height: "80%"
  },
  footer: {
    position: "absolute",
    bottom: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 20
  },
  todoInput: {
    backgroundColor: "white",
    elevation: 2,
    width: 200,
    height: 50,
    borderRadius: 60,
    textAlign: "center",
    color: "black"
  },
  addBtn: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    color: "gray",
    width: 70,
    height: 70,
    borderRadius: 60,
    elevation: 5
  },
  textBtn: {
    fontWeight: 300,
    fontSize: 35,
    opacity: 0.4
  }
});

export default App;
