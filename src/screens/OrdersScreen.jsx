import { FlatList, StyleSheet, View } from "react-native";

import { ORDERS } from "../data/orders";
import OrderItem from "../components/OrderItem";
import React from "react";




const OrdersScreen = () => {
  const handleDeleteOrder = () => {
    console.log("Eliminar orden");
  };
  const renderOrderItem = ({ item }) => (
    <OrderItem item={item} onDelete={handleDeleteOrder} />
  );

  return (
    <View>
      <FlatList
        data={ORDERS}
        keyExtractor={(item) => item.id}
        renderItem={renderOrderItem}
      />
    </View>
  );
};

export default OrdersScreen;

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
