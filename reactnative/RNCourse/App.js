import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [enteredGoalText, setEnteredGoalText] = useState("");

  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setIsModalOpen(true);
  }

  function closeAddGoalHandler() {
    setIsModalOpen(false);
  }

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    // setCourseGoals((prevGoals) => [...prevGoals, enteredGoalText]);

    // setCourseGoals((prevGoals) => [
    //   ...prevGoals,
    //   { text: enteredGoalText, key: Math.random().toString() },
    // ]);

    setCourseGoals((prevGoals) => [
      ...prevGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);

    setEnteredGoalText("");
    closeAddGoalHandler();
  }

  function deleteGoalHandler(id) {
    setCourseGoals((prevGoals) => {
      return prevGoals.filter((goal) => goal.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add New Goal"
          color="#9262cf"
          onPress={startAddGoalHandler}
        />

        <GoalInput
          enteredGoalText={enteredGoalText}
          goalInputHandler={goalInputHandler}
          addGoalHandler={addGoalHandler}
          closeAddGoalHandler={closeAddGoalHandler}
          visible={isModalOpen}
        />

        {courseGoals.length>0? (
          <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
            alwaysBounceVertical={false}
          />
        </View>
        ) : (
          <View style={styles.addGoalImageCont}>
            <Image
              style={styles.addGoalImage}
              source={require("./assets/addGoal.png")}
            />

            <Text style={styles.goalsText}>Add Your Goals to List !</Text>
          </View>
        )}

        
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    // flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    marginTop: 20
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  // goalsContainer: {
  //   flex: 5,
  // },
  addGoalImageCont: {
    alignItems: "center",
    justifyContent: "center",
  },
  addGoalImage: {
    width: "70%",
    height: "70%",
  },
  goalsText:{
    fontSize: 20,
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 2
  }
});
