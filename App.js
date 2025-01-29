import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  return (
    <View>
      <View>
        <TextInput placeholder="Your course goal!" />
        <Button title="Add Goal" />
        <Text>List of goals</Text>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({});
