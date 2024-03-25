import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

export default function GoalItem({ text, id, onDelete }) {
  return (
    <Pressable onPress={onDelete.bind(this, id)}>
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
    padding: 12,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    borderRadius: 10,
  },
  taskText: {
    // fontFamily: "Poppins",
  },
});
