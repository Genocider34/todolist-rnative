import React from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

export default function GoalInput({ handleChange, handlePress }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={handleChange}
        style={styles.textInputContainer}
        placeholder="Add a list"
      />
      <Button onPress={handlePress} title="Add Task" />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderBottomWidth: 2,
    borderBottomColor: "gray",
    marginBottom: 12,
  },
  textInputContainer: {
    width: "70%",
    marginRight: 8,
    padding: 8,
    borderWidth: 1,
    borderColor: "gray",
  },
});
