import { Text, View } from "react-native";
import { useSelector } from "react-redux";
import React from "react";

const DetailsScreen = () => {
  const pc = useSelector((state) => state.products.selected);

  return (
    <View>
      <Text>{pc.name}</Text>
      <Text>{pc.description}</Text>
      <Text>${pc.price}</Text>
    </View>
  );
};

export default DetailsScreen;
