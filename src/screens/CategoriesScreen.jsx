import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

const CategoriesScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>CategoriesScreen</Text>
      <Button
        title="Navegar a las categorías de Bread"
        onPress={() => navigation.navigate("Bread")}
      ></Button>
    </View>
  );
};

export default CategoriesScreen;

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
