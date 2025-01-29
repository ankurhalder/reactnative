import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";
import { useState } from "react";
function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputhandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function AddGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.modalIsVisible} animationType="slide">
      <View style={styles.imputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        ></Image>
        <TextInput
          style={styles.TextInput}
          placeholder="Your course goal!"
          onChangeText={goalInputhandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add Goal" onPress={AddGoalHandler} />
          </View>
          <View style={styles.button}>
            <Button
              title="Cancel"
              onPress={props.onCancel}
              color="red"
            ></Button>
          </View>
        </View>
      </View>
    </Modal>
  );
}
export default GoalInput;

const styles = StyleSheet.create({
  imputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "90%",
    marginRight: 8,
    padding: 8,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 15,
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
