import { StyleSheet, TextInput, View, Button } from "react-native";

export default function App() {
  const handleButton = () => {
    console.log("Presione desde una función");
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextInput
          placeholder="Ingresa aquí tu item"
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 2,
            width: 200,
          }}
        />
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
});
