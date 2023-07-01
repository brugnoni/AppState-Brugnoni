import { FlatList, StyleSheet, View } from "react-native";
import OrderItem from "../components/OrderItem";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getOrders, deleteOrder } from "../store/actions/orders.action";
import { useEffect } from "react";

const OrdersScreen = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.list);

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
  };

  const renderOrderItem = ({ item }) => (
    <OrderItem item={item} onDelete={() => handleDeleteOrder(item.id)} />
  );

  return (
    <View>
      <FlatList
        data={orders}
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
