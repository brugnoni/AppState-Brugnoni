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
