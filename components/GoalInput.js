import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Button,
  Modal,
  Image,
  Text,
} from "react-native";

export default function GoalInput({
  handleChange,
  handlePress,
  visible,
  onCancel,
}) {
  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/list.png")}
        />
        <Text style={styles.headerText}>To do list</Text>
        <TextInput
          onChangeText={handleChange}
          style={styles.textInputContainer}
          placeholder="Add a list"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button onPress={handlePress} title="Add Task" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#311b6b",
  },
  textInputContainer: {
    color: "white",
    width: "90%",
    marginRight: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 16,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    margin: 16,
    width: 100,
  },
  headerText: {
    fontSize: 30,
    textAlign: "center",
    color: "white",
  },
  image: {
    width: 100,
    height: 100,
    margin: 10,
  },
});
