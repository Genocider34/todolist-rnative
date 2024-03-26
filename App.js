import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [enterText, setEnterText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  function handleShowModal() {
    setIsVisible((showing) => !showing);
  }

  function handleChange(enteredText) {
    setEnterText(enteredText);
  }

  function handlePress() {
    const nextTask = [...tasks, { label: enterText, id: Math.random() }];
    setTasks(nextTask);
    handleShowModal((showing) => showing);
  }

  function handleDelete(id) {
    setTasks(tasks.filter((item) => item.id !== id));
  }

  return (
    <>
      <StatusBar style={"light"} />
      <View style={styles.appContainer}>
        <Button onPress={handleShowModal} title="Add a List" />
        <GoalInput
          onCancel={() => handleShowModal((showing) => showing)}
          visible={isVisible}
          handleChange={handleChange}
          handlePress={handlePress}
        />
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
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 25,
  },

  taskContainer: {
    flex: 6,
  },
});
