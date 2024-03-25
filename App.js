import { useState } from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [enterText, setEnterText] = useState("");
  const [tasks, setTasks] = useState([]);

  function handleChange(enteredText) {
    setEnterText(enteredText);
  }

  function handlePress() {
    const nextTask = [...tasks, { label: enterText, id: Math.random() }];
    setTasks(nextTask);
  }

  function handleDelete(id) {
    setTasks(tasks.filter((item) => item.id !== id));
  }

  return (
    <View style={styles.appContainer}>
      <Text style={styles.headerText}>To do list</Text>
      <GoalInput handleChange={handleChange} handlePress={handlePress} />
      <View style={styles.taskContainer}>
        <FlatList
          data={tasks}
          renderItem={(dataItem) => {
            return (
              <GoalItem
                onDelete={handleDelete}
                id={dataItem.item.id}
                text={dataItem.item.label}
              />
            );
          }}
          alwaysBounceHorizontal={false}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 25,
  },
  headerText: {
    fontSize: 30,
    textAlign: "center",
  },
  taskContainer: {
    flex: 6,
  },
});
