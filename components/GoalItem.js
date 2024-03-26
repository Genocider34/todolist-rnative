import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem({ text, id, onDelete }) {
  return (
    <Pressable
      android_ripple={{ color: "red" }}
      onPress={onDelete.bind(this, id)}
      style={({ pressed }) => pressed && styles.pressItem}
    >
      <View style={styles.taskItem}>
        <Text style={styles.taskText}>{text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  taskItem: {
    flexDirection: "row",
    backgroundColor: "gold",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    marginBottom: 10,
  },
  pressItem: {
    opacity: 5,
  },
  taskText: {
    padding: 12,
    // fontFamily: "Poppins",
  },
});
