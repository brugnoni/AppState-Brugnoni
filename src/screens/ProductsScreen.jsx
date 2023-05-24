import { FlatList, StyleSheet, Text, View } from "react-native";

import { PRODUCTS } from "../data/products";
import ProductsItem from "../components/ProductsItem";
import React from "react";

const ProductsScreen = ({ navigation, route }) => {
  const pcs = PRODUCTS.filter(
    pc => pc.category === route.params.categoryId
  );

  const handleSelectedProduct = item => {
    navigation.navigate("Details", {
      product: item,
      name: item.name,
    });
  };

  const renderProductItem = ({ item }) => (
    <View style={styles.productItem}>
      <ProductsItem item={item} onSelected={handleSelectedProduct} />
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={pcs}
        renderItem={renderProductItem}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productItem: {
    margin: 15,
    height: 300,
    width: 150,
  },
});
