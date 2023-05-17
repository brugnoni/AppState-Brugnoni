import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const BreadDetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Aquí va el detalle del Bread</Text>
      <Button
        title="Navegar a Home"
        onPress={() => navigation.navigate("Home")}
      ></Button>
    </View>
  );
};

export default BreadDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#fff",
    paddingBottom: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    padding: 8,
  },
});
