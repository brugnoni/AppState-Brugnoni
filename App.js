import { StyleSheet, TextInput, View, Button } from "react-native";

export default function App() {
  const handleButton = () => {
    console.log("Presione desde una función");
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput styles={styles.input} placeholder="Agrega un item" />
        <Button title="Agregar Item" onPress={handleButton} />
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderBottomColor: "black",
    borderBottomWidth: 2,
    width: 200,
  },
});
