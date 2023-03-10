import { useState } from "react";
import { View, Text, StyleSheet, Modal, TouchableWithoutFeedback, TextInput, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

export const SingleTodo = ({ id, content, remove,  modalVisible, setModalVisible, handleOnEditTodo}) => {
  const [text, setText] = useState(content)
  return (
    <View  style={styles.singleTodo}>
      <Text style={styles.content}> {content} </Text>
      <View style={styles.icons}>
        <Icon size={30} onPress={() => remove(id)} name="remove" />
        <Icon size={25} onPress={()=> setModalVisible(true)} name="edit" />
      </View>
      <Modal
        animationType={"slide"}
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(false)
        }}
      >
        <View onPress={()=> setModalVisible(false)} style={styles.centeredView}>
          <TouchableWithoutFeedback onPress={()=> setModalVisible(false)}>
          <View style={styles.modalView}>
            <Text>Edit Todo</Text>
            <TextInput style={{
              paddingLeft: 10,
              marginTop: 15,
              width: "100%",
              borderColor: "black",
              borderStyle: "solid",
              borderWidth: 1
            }} value={text} onChangeText={(val)=>{
              setText(val)
            }}/>
            <Pressable style={{
              backgroundColor: "black",
              padding: 10,
              borderRadius: 10,
              position: "relative",
              bottom: -50
            }}
            onPress={()=> {
              handleOnEditTodo(id, text)
              setModalVisible(false)
            }}
            >
              <Text style={{
                color: "white"
              }}>submit</Text>
            </Pressable>
          </View>
          </TouchableWithoutFeedback>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  singleTodo: {
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    height: 53,
    backgroundColor: "white",
    border: "none",
    borderRadius: 10,
    justifyContent: "space-between",
    paddingLeft: 10
  },
  content: {
    fontWeight: 400,
    fontSize: 18
  },
  icons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    paddingRight: 10
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: 300,
    height: 200,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }
});
