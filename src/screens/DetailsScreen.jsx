import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import React from "react";

const DetailsScreen = () => {
  const item = useSelector((state) => state.products.selected);

  return (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.description}</Text>
      <Text>${item.price}</Text>
    </View>
  );
};

export default DetailsScreen;
