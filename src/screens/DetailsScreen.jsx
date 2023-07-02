import { Text, View, Button, StyleSheet, Image } from "react-native";
import React from "react";
import { add_item } from "../store/actions/cart.action";
import { useSelector, useDispatch } from "react-redux";

const DetailsScreen = () => {
  const dispatch = useDispatch();
  const item = useSelector((state) => state.products.selected);

  const handleAddItem = () => {
    dispatch(add_item(item));
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
      <Text>${item.price}</Text>
      <Button title="Add to Cart" onPress={handleAddItem} />
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginVertical: 10,
  },
});
