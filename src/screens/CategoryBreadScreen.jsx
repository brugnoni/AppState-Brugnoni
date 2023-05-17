import { Button, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { Navigation } from "react-native-navigation";

const CategoryBreadScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>CategoryBreadScreen</Text>
      <Button
        title="Navegar a Detail"
        onPress={() => navigation.navigate("Detail")}
      ></Button>
    </View>
  );
};

export default CategoryBreadScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
