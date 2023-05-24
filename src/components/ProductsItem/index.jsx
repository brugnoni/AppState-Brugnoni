import { Image, Text, TouchableOpacity, View } from "react-native";

import React from "react";
import styles from "./styles";

const ProductsItem = ({ item, onSelected }) => {
  return (
    <TouchableOpacity
      style={styles.itemContainer}
      onPress={() => onSelected(item)}
    >
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: "https://scontent.fcor10-3.fna.fbcdn.net/v/t39.30808-6/271382767_3198951750326999_6422865721679521957_n.png?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=W4YsWOifMJkAX-cAec9&_nc_ht=scontent.fcor10-3.fna&oh=00_AfCZ-f3wP5YwamzRIy6jtKB9EnpO17SBhzLX55EnCugu2g&oe=647390B7",
          }}
        />
      </View>
      <View style={styles.textContainer}>
        <Text>{item.name}</Text>
        <Text>{item.description}</Text>
        <Text>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductsItem;
