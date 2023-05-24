import { FlatList, StyleSheet, View } from "react-native";

import { CATEGORIES } from "../data/categories";
import CategoriesItem from "../components/CategoriesItem";
import React from "react";

const CategoriesScreen = ({ navigation }) => {
  const handleSelectedCategory = item => {
    navigation.navigate("Products", {
      categoryId: item.id,
      name: item.title,
    });
  };

  const renderCategoriesItem = ({ item }) => (
    <View style={styles.categoriesContainer}>
      <CategoriesItem item={item} onSelected={handleSelectedCategory} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={CATEGORIES}
        renderItem={renderCategoriesItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  categoriesContainer: {
    padding: 15,
    height: 150,
  },
});
