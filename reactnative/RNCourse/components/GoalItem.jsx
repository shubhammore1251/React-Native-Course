import { Pressable, StyleSheet, Text, View } from "react-native";

const GoalInput = (props) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#210644" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({pressed})=> pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    marginTop: 20,
    borderRadius: 6,
    backgroundColor: "#ea7a7a",
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
