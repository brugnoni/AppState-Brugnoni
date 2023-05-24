import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import { CART } from "../data/cart";
import CartItem from "../components/CartItem";
import React from "react";

const CartScreen = () => {
  const handleDeleteItem = id => {
    console.log(id);
  };

  const renderCartItem = ({ item }) => (
    <CartItem item={item} onDelete={handleDeleteItem} />
  );

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={CART}
          keyExtractor={item => item.id}
          renderItem={renderCartItem}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.confirm}
          onPress={() => console.log("Compra realizada")}
        >
          <Text>Confirm</Text>
          <View>
            <Text style={styles.priceText}>Total: $19000000</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#fff",
  },
  list: {
    flex: 3,
  },
  footer: {
    flex: 1,
    padding: 12,
    borderTopColor: "#ccc",
    borderTopWidth: 1,
  },
  confirm: {
    backgroundColor: "#ededed",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  priceText: {
    fontSize: 24,
  },
});
