import { StyleSheet, Text, View } from "react-native";

import React from "react";

const DetailsScreen = ({ route }) => {
  const pc = route.params.product;
  return (
    <View>
      <Text>{pc.name}</Text>
      <Text>{pc.description}</Text>
      <Text>${pc.price}</Text>
    </View>
  );
};

export default DetailsScreen;

